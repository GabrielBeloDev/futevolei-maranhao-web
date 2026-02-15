"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { Post } from "@/lib/types";

interface PostFormProps {
  action: (formData: FormData) => void;
  post?: Post;
  submitLabel: string;
}

export function PostForm({ action, post, submitLabel }: PostFormProps) {
  return (
    <form action={action} className="flex flex-col gap-6 max-w-2xl">
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          name="title"
          required
          defaultValue={post?.title ?? ""}
          placeholder="Título do post"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="content">Conteúdo</Label>
        <Textarea
          id="content"
          name="content"
          required
          rows={15}
          defaultValue={post?.content ?? ""}
          placeholder="Escreva o conteúdo do post..."
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="cover_image">Imagem de capa</Label>
        <Input
          id="cover_image"
          name="cover_image"
          type="file"
          accept="image/*"
        />
        {post?.cover_image && (
          <p className="text-xs text-muted-foreground">
            Imagem atual: já possui uma imagem. Envie outra para substituir.
          </p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <input
          id="published"
          name="published"
          type="checkbox"
          defaultChecked={post?.published ?? false}
          className="h-4 w-4"
        />
        <Label htmlFor="published">Publicar</Label>
      </div>

      <Button type="submit" className="bg-vermelho hover:bg-vermelho/90 w-fit">
        {submitLabel}
      </Button>
    </form>
  );
}
