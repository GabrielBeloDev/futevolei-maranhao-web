import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getPublishedPosts } from "@/lib/posts";

export async function PostsPreviewSection() {
  const posts = await getPublishedPosts();
  const latestPosts = posts.slice(0, 3);

  if (latestPosts.length === 0) return null;

  return (
    <section className="py-20 md:py-32 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-vermelho font-semibold tracking-wider uppercase text-sm mb-4">
            Blog
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Últimos <span className="text-vermelho">Posts</span>
          </h2>
          <p className="text-white/60 max-w-lg mx-auto">
            Novidades, treinos e histórias do Futevôlei Maranhão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {latestPosts.map((post) => (
            <Link key={post.id} href={`/posts/${post.slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full bg-surface-alt border-white/10">
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
                  <h3 className="font-semibold text-lg text-white mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-white/60 line-clamp-3">
                    {post.content.slice(0, 150).replace(/\s+\S*$/, "")}...
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group border-vermelho text-vermelho hover:bg-vermelho hover:text-white transition-all"
          >
            <Link href="/posts">
              Ver todos
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
