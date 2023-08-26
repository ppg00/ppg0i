import { allWritings } from "@/.contentlayer/generated";
import { MetadataRoute } from "next";

export default function sitemap() {
  const postRoutes = allWritings.map((post) => ({
    lastModified: post.publishedAt,
    // REFACTOR: extract url to a constant or use public env variable
    url: `https://ppg0i.vercel.app/writing/${post.slug}`,
  }));

  const routes = ['', '/writing'].map((route) => ({
    lastModified: new Date().toISOString().split('T')[0],
    url: `https://ppg0i.vercel.app${route}`,
  }));

  return [...routes, ...postRoutes] as MetadataRoute.Sitemap;
}
