import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://futevoleimaranhao.com.br";

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.updated_at),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/equipe`, lastModified: new Date() },
    { url: `${baseUrl}/posts`, lastModified: new Date() },
    ...postUrls,
  ];
}
