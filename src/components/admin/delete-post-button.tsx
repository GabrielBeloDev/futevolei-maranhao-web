"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deletePost } from "@/app/admin/actions";

interface DeletePostButtonProps {
  postId: string;
  postTitle: string;
}

export function DeletePostButton({ postId, postTitle }: DeletePostButtonProps) {
  async function handleDelete() {
    if (!confirm(`Tem certeza que deseja excluir "${postTitle}"?`)) return;
    await deletePost(postId);
  }

  return (
    <Button variant="destructive" size="sm" onClick={handleDelete}>
      <Trash2 className="h-4 w-4 mr-1" />
      Excluir
    </Button>
  );
}
