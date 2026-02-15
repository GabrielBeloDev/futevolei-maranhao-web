"use client";

import { useState } from "react";
import Image from "next/image";
import { ImagePlus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Post } from "@/lib/types";

interface PostFormProps {
  action: (formData: FormData) => void;
  post?: Post;
  submitLabel: string;
}

export function PostForm({ action, post, submitLabel }: PostFormProps) {
  const [preview, setPreview] = useState<string | null>(
    post?.cover_image ?? null,
  );
  const [submitting, setSubmitting] = useState(false);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  }

  function handleSubmit(formData: FormData) {
    setSubmitting(true);
    action(formData);
  }

  return (
    <form
      action={handleSubmit}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
    >
      <div className="lg:col-span-2 flex flex-col gap-6">
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-base">Conteúdo</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                name="title"
                required
                defaultValue={post?.title ?? ""}
                placeholder="Título do post"
                autoComplete="off"
                className="h-11 text-base"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="content">Conteúdo</Label>
              <Textarea
                id="content"
                name="content"
                required
                rows={18}
                defaultValue={post?.content ?? ""}
                placeholder="Escreva o conteúdo do post…"
                className="min-h-[300px] text-sm leading-relaxed resize-y"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Imagem de capa</CardTitle>
        </CardHeader>
        <CardContent>
          {preview ? (
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4 border border-[var(--border)]">
              <Image
                src={preview}
                alt="Preview da capa"
                fill
                className="object-cover"
                unoptimized={preview.startsWith("blob:")}
              />
            </div>
          ) : (
            <div className="aspect-video rounded-lg border-2 border-dashed border-[var(--border)] flex flex-col items-center justify-center mb-4 text-[var(--muted-foreground)]">
              <ImagePlus className="h-8 w-8 mb-2" />
              <p className="text-xs">Nenhuma imagem selecionada</p>
            </div>
          )}

          <Label
            htmlFor="cover_image"
            className="flex items-center justify-center gap-2 cursor-pointer rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
          >
            <ImagePlus className="h-4 w-4" />
            {preview ? "Trocar imagem" : "Selecionar imagem"}
          </Label>
          <Input
            id="cover_image"
            name="cover_image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="sr-only"
          />
        </CardContent>
      </Card>

      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-base">Publicação</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <label
              htmlFor="published"
              className="flex items-center justify-between cursor-pointer rounded-lg border border-[var(--border)] px-4 py-3 hover:bg-[var(--muted)] transition-colors"
            >
              <span className="text-sm font-medium text-[var(--foreground)]">
                Publicar post
              </span>
              <span className="relative">
                <input
                  id="published"
                  name="published"
                  type="checkbox"
                  defaultChecked={post?.published ?? false}
                  className="peer sr-only"
                />
                <span className="block h-6 w-10 rounded-full bg-[var(--border)] peer-checked:bg-green-500 transition-colors" />
                <span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-4" />
              </span>
            </label>

            <Button
              type="submit"
              className="w-full bg-vermelho hover:bg-vermelho/90 text-white h-11 font-medium"
              disabled={submitting}
            >
              <Upload className="h-4 w-4 mr-2" />
              {submitting ? "Salvando…" : submitLabel}
            </Button>
          </CardContent>
        </Card>
      </div>
    </form>
  );
}
