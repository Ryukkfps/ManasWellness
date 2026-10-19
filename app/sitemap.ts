import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://manaswellness.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "", "/about", "/services", "/contact", "/reviews", "/events", "/gallery", "/blog",
    "/privacy-policy", "/terms-and-conditions", "/cookie-policy",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  let services: { slug: string; updatedAt: Date }[] = [];
  let events: { slug: string; updatedAt: Date }[] = [];
  let posts: { slug: string; updatedAt: Date }[] = [];

  try {
    [services, events, posts] = await Promise.all([
      prisma.service.findMany({ where: { isActive: true }, select: { slug: true, updatedAt: true } }),
      prisma.event.findMany({ where: { isActive: true }, select: { slug: true, updatedAt: true } }),
      prisma.blogPost.findMany({ where: { status: 'PUBLISHED' }, select: { slug: true, updatedAt: true } }),
    ]);
  } catch (error) {
    console.error('Sitemap database error:', error);
  }

  return [
    ...staticRoutes,
    ...services.map((s) => ({ url: `${SITE_URL}/services/${s.slug}`, lastModified: s.updatedAt })),
    ...events.map((e) => ({ url: `${SITE_URL}/events/${e.slug}`, lastModified: e.updatedAt })),
    ...posts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: p.updatedAt })),
  ];
}
