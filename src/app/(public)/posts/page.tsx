import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { getPublishedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Posts",
  description: "Novidades e postagens do Futevôlei Maranhão",
};

export default async function PostsPage() {
  const posts = await getPublishedPosts();

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="text-vermelho">Posts</span>
          </h1>
          <p className="text-white/60 max-w-lg mx-auto">
            Novidades, treinos e histórias do Futevôlei Maranhão
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-white/50">Nenhum post publicado ainda.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Link key={post.id} href={`/posts/${post.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full bg-surface-alt border-white/10">
                  {post.cover_image && (
                    <div className="relative aspect-video">
                      <Image
                        src={post.cover_image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <p className="text-xs text-white/40 mb-2">
                      {new Date(post.created_at).toLocaleDateString("pt-BR")}
                    </p>
                    <h2 className="font-semibold text-lg text-white mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-white/60 line-clamp-3">
                      {post.content.slice(0, 150).replace(/\s+\S*$/, "")}...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
