import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PostForm } from "@/components/admin/post-form";
import { AdminHeader } from "@/components/admin/admin-header";
import { updatePost } from "@/app/admin/actions";
import { createClient } from "@/lib/supabase/server";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !post) notFound();

  const updateWithId = updatePost.bind(null, id);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <AdminHeader />

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex items-center gap-4 mb-8">
          <Button asChild variant="outline" size="sm">
            <Link href="/admin">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Link>
          </Button>
          <h1 className="text-xl font-bold text-[var(--foreground)]">Editar Post</h1>
        </div>

        <PostForm action={updateWithId} post={post} submitLabel="Salvar Alterações" />
      </div>
    </div>
  );
}
