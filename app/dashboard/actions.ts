"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function publishPost(prevState: unknown, formData: FormData) {
  const title = formData.get("title")?.toString().trim();
  const content = formData.get("content")?.toString().trim();

  if (!title || !content) {
    return { error: "Title and content are required." };
  }

  try {
    // Generate initial slug from title
    let slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    if (!slug) {
      slug = "post-" + Math.random().toString(36).substring(2, 7);
    }

    // Resolve duplicate slugs by appending a counter
    let existingPost = await prisma.post.findUnique({
      where: { slug },
    });
    let count = 1;
    const baseSlug = slug;
    while (existingPost) {
      slug = `${baseSlug}-${count}`;
      existingPost = await prisma.post.findUnique({
        where: { slug },
      });
      count++;
    }

    await prisma.post.create({
      data: {
        title,
        slug,
        content,
      },
    });

    // Revalidate related paths so client views update immediately
    revalidatePath("/blog");
    revalidatePath("/");

    return { success: true, message: `Blog published successfully with slug: ${slug}` };
  } catch (error) {
    console.error("Failed to publish blog post:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to publish blog post due to an internal error.";
    return { error: errorMessage };
  }
}

export async function deletePost(id: number) {
  try {
    await prisma.post.delete({
      where: { id },
    });

    revalidatePath("/blog");
    revalidatePath("/");

    return { success: true, message: "Blog post deleted successfully." };
  } catch (error) {
    console.error("Failed to delete blog post:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to delete blog post.";
    return { error: errorMessage };
  }
}
