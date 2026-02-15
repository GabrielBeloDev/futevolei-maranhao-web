import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post não encontrado" };
  return {
    title: post.title,
    description: post.content.slice(0, 160),
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4 max-w-3xl">
        <Button asChild variant="ghost" className="mb-8 text-white/70 hover:text-white">
          <Link href="/posts">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Link>
        </Button>

        <p className="text-sm text-white/40 mb-2">
          {new Date(post.created_at).toLocaleDateString("pt-BR")}
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {post.title}
        </h1>

        {post.cover_image && (
          <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg prose-invert max-w-none whitespace-pre-wrap">
          {post.content}
        </div>
      </div>
    </article>
  );
}
