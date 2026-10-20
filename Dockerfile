# syntax=docker/dockerfile:1

FROM node:20-slim AS base

# ---- deps: install node_modules (separate layer, cached) ----
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ---- builder: generate Prisma client + next build (standalone) ----
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
# auth.config.ts requires AUTH_SECRET to be set whenever NODE_ENV=production,
# which `next build` also sets during static page-data collection. This is a
# build-time-only placeholder so that check passes — it is never baked into
# a route response, and the real secret is injected at container runtime via
# docker-compose's env_file, overriding this value.
ENV AUTH_SECRET="build-time-placeholder-overridden-at-runtime"
RUN npx next build

# ---- runner: minimal production image ----
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN groupadd --system --gid 1001 nodejs \
  && useradd --system --uid 1001 --gid nodejs nextjs

# Standalone output already contains a pruned node_modules + server.js.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Local file uploads (see app/api/upload) — mount a volume here to persist
# across redeploys.
RUN mkdir -p /app/uploads && chown nextjs:nodejs /app/uploads

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
