import type { NextAuthConfig } from "next-auth";

if (!process.env.AUTH_SECRET && process.env.NODE_ENV === "production") {
  throw new Error(
    "AUTH_SECRET environment variable is required in production. See .env.example."
  );
}

// Exact-match helper: a plain `.startsWith()` on a route prefix like
// "/api/enquiry" would also match "/api/enquiries", silently exempting an
// admin-only route from auth just because it shares a prefix with a public
// one. This matches the route itself or a sub-path of it, nothing else.
function pathIsOrIsUnder(pathname: string, route: string) {
  return pathname === route || pathname.startsWith(`${route}/`);
}

export const authConfig = {
  pages: {
    signIn: "/admin/login",
    signOut: "/admin/login",
  },
  trustHost: true,
  useSecureCookies: process.env.NODE_ENV === "production",
  secret: process.env.AUTH_SECRET,
  events: {
    async signOut() {
      // This runs on the server side when sign out occurs
      console.log("User signed out");
    },
  },
  callbacks: {
    authorized({ auth, request: { nextUrl, method, headers } }) {
      const isLoggedIn = !!auth?.user;
      const isAdminRoute = nextUrl.pathname.startsWith("/admin");
      const isLoginRoute = nextUrl.pathname === "/admin/login";

      if (isAdminRoute && !isLoginRoute) {
        if (isLoggedIn) return true;
        return false; // Redirect to login
      } else if (isLoginRoute && isLoggedIn) {
        // Get the actual host from headers to avoid 0.0.0.0
        const host = headers.get('host') || '';
        const referer = headers.get('referer');
        
        let redirectHost = host;
        if (host.startsWith('0.0.0.0') && referer) {
          try {
            const refererUrl = new URL(referer);
            redirectHost = refererUrl.host;
          } catch (e) {
            // Use NEXTAUTH_URL if available
            if (process.env.NEXTAUTH_URL) {
              const nextAuthUrl = new URL(process.env.NEXTAUTH_URL);
              redirectHost = nextAuthUrl.host;
            }
          }
        }
        
        const protocol = nextUrl.protocol;
        return Response.redirect(new URL(`${protocol}//${redirectHost}/admin`));
      }

      // Routes that accept public, unauthenticated submissions (POST only —
      // their GET/PUT/DELETE siblings, where they exist, still require login).
      // Note: only the specific "/responses" sub-path under /api/surveys/[slug]
      // is public — admin survey-building endpoints under /api/surveys stay
      // protected, so this is not a plain prefix match like the others.
      const publicWriteRoutes = ["/api/appointment", "/api/enquiry", "/api/reviews"];
      const isPublicWrite =
        publicWriteRoutes.some((route) => pathIsOrIsUnder(nextUrl.pathname, route)) ||
        (nextUrl.pathname.startsWith("/api/surveys/") && nextUrl.pathname.endsWith("/responses"));

      // Routes that are admin-only for every method, including GET, because
      // they return visitor PII or leads (not just gated mutations).
      const adminOnlyRoutes = ["/api/enquiries"];
      const isAdminOnly = adminOnlyRoutes.some((route) => pathIsOrIsUnder(nextUrl.pathname, route));

      if (nextUrl.pathname.startsWith("/api/") && !nextUrl.pathname.startsWith("/api/auth")) {
        if (isAdminOnly && !isLoggedIn) {
          return false;
        }
        if (!isAdminOnly && !isPublicWrite && method !== "GET" && !isLoggedIn) {
          return false;
        }
      }

      return true;
    },
    async redirect({ url, baseUrl }) {
      // Handle relative URLs
      if (url.startsWith("/")) {
        return url;
      }
      
      // Parse the URL to check if it's using 0.0.0.0
      try {
        const urlObj = new URL(url);
        
        // If the URL contains 0.0.0.0, replace it with NEXTAUTH_URL or baseUrl
        if (urlObj.hostname === "0.0.0.0") {
          if (process.env.NEXTAUTH_URL) {
            const nextAuthUrl = new URL(process.env.NEXTAUTH_URL);
            urlObj.hostname = nextAuthUrl.hostname;
            urlObj.port = nextAuthUrl.port;
            urlObj.protocol = nextAuthUrl.protocol;
            return urlObj.toString();
          }
        }
        
        // If URL is on the same origin, allow it
        if (urlObj.origin === baseUrl) {
          return url;
        }
        
        // If URL starts with baseUrl, allow it
        if (url.startsWith(baseUrl)) {
          return url;
        }
      } catch (error) {
        console.error("Error parsing redirect URL:", error);
      }
      
      // Default to baseUrl for safety
      return baseUrl;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: string }).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { role?: string }).role = token.role as string;
      }
      return session;
    },
  },
  providers: [], // Add providers with empty array for middleware
} satisfies NextAuthConfig;
