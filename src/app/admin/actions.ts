"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function createPost(formData: FormData) {
  const supabase = await createClient();

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "on";
  const coverFile = formData.get("cover_image") as File | null;

  let cover_image: string | null = null;

  if (coverFile && coverFile.size > 0) {
    const ext = coverFile.name.split(".").pop();
    const fileName = `${Date.now()}-${slugify(title)}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("post-images")
      .upload(fileName, coverFile);

    if (!uploadError) {
      const { data } = supabase.storage
        .from("post-images")
        .getPublicUrl(fileName);
      cover_image = data.publicUrl;
    }
  }

  const slug = `${slugify(title)}-${Date.now().toString(36)}`;

  const { error } = await supabase.from("posts").insert({
    title,
    slug,
    content,
    cover_image,
    published,
  });

  if (error) throw error;

  revalidatePath("/posts");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function updatePost(id: string, formData: FormData) {
  const supabase = await createClient();

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const published = formData.get("published") === "on";
  const coverFile = formData.get("cover_image") as File | null;

  const updates: Record<string, unknown> = { title, content, published };

  if (coverFile && coverFile.size > 0) {
    const ext = coverFile.name.split(".").pop();
    const fileName = `${Date.now()}-${slugify(title)}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("post-images")
      .upload(fileName, coverFile);

    if (!uploadError) {
      const { data } = supabase.storage
        .from("post-images")
        .getPublicUrl(fileName);
      updates.cover_image = data.publicUrl;
    }
  }

  const { error } = await supabase
    .from("posts")
    .update(updates)
    .eq("id", id);

  if (error) throw error;

  revalidatePath("/posts");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function deletePost(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) throw error;

  revalidatePath("/posts");
  revalidatePath("/admin");
}

export async function loginAction(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: "Email ou senha inválidos" };
  }

  redirect("/admin");
}

export async function logoutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
