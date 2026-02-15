import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PostForm } from "@/components/admin/post-form";
import { AdminHeader } from "@/components/admin/admin-header";
import { createPost } from "@/app/admin/actions";

export default function NewPostPage() {
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
          <h1 className="text-xl font-bold text-[var(--foreground)]">Novo Post</h1>
        </div>

        <PostForm action={createPost} submitLabel="Criar Post" />
      </div>
    </div>
  );
}
