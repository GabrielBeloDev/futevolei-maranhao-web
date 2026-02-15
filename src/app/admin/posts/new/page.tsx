import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PostForm } from "@/components/admin/post-form";
import { createPost } from "@/app/admin/actions";

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-areia">
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/admin">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Link>
        </Button>

        <h1 className="text-2xl font-bold text-dark mb-8">Novo Post</h1>
        <PostForm action={createPost} submitLabel="Criar Post" />
      </div>
    </div>
  );
}
