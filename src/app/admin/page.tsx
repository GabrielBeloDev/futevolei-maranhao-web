import Link from "next/link";
import { Plus, Edit, LogOut, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/posts";
import { logoutAction } from "@/app/admin/actions";
import { DeletePostButton } from "@/components/admin/delete-post-button";

export default async function AdminDashboard() {
  const posts = await getAllPosts();
  const publishedCount = posts.filter((p) => p.published).length;
  const draftCount = posts.length - publishedCount;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Admin Header */}
      <header className="bg-dark text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-dourado" />
            <h1 className="font-bold text-lg">Painel Admin</h1>
          </div>
          <form action={logoutAction}>
            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </form>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-[var(--foreground)]">{posts.length}</p>
              <p className="text-sm text-[var(--muted-foreground)]">Total de posts</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-green-600">{publishedCount}</p>
              <p className="text-sm text-[var(--muted-foreground)]">Publicados</p>
            </CardContent>
          </Card>
          <Card className="col-span-2 md:col-span-1">
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-amber-600">{draftCount}</p>
              <p className="text-sm text-[var(--muted-foreground)]">Rascunhos</p>
            </CardContent>
          </Card>
        </div>

        {/* Posts section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[var(--foreground)]">Posts</h2>
          <Button asChild className="bg-vermelho hover:bg-vermelho/90 text-white">
            <Link href="/admin/posts/new">
              <Plus className="h-4 w-4 mr-2" />
              Novo Post
            </Link>
          </Button>
        </div>

        {posts.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <FileText className="h-10 w-10 mx-auto mb-3 text-[var(--muted-foreground)]" />
              <p className="text-[var(--muted-foreground)]">Nenhum post criado ainda.</p>
              <Button asChild className="mt-4 bg-vermelho hover:bg-vermelho/90 text-white">
                <Link href="/admin/posts/new">
                  <Plus className="h-4 w-4 mr-2" />
                  Criar primeiro post
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="flex flex-col gap-3">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-[var(--foreground)] truncate">
                        {post.title}
                      </h3>
                      <Badge
                        variant={post.published ? "default" : "secondary"}
                        className={
                          post.published
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                        }
                      >
                        {post.published ? "Publicado" : "Rascunho"}
                      </Badge>
                    </div>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {new Date(post.created_at).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/posts/${post.id}/edit`}>
                        <Edit className="h-4 w-4 mr-1" />
                        Editar
                      </Link>
                    </Button>
                    <DeletePostButton postId={post.id} postTitle={post.title} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
