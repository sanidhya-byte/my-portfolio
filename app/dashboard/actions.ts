"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { verifySession, logout } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function publishPost(prevState: unknown, formData: FormData) {
  if (!(await verifySession())) {
    return { error: "Unauthorized. Please log in as admin." };
  }

  const title = formData.get("title")?.toString().trim();
  const content = formData.get("content")?.toString().trim();
  const idStr = formData.get("id")?.toString();

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

    if (idStr) {
      const id = parseInt(idStr, 10);
      if (isNaN(id)) {
        return { error: "Invalid post ID." };
      }

      const existing = await prisma.post.findUnique({ where: { id } });
      if (!existing) {
        return { error: "Post not found." };
      }

      // Resolve duplicate slugs by appending a counter (excluding the current post being updated)
      let existingPost = await prisma.post.findFirst({
        where: {
          slug,
          id: { not: id },
        },
      });
      let count = 1;
      const baseSlug = slug;
      while (existingPost) {
        slug = `${baseSlug}-${count}`;
        existingPost = await prisma.post.findFirst({
          where: {
            slug,
            id: { not: id },
          },
        });
        count++;
      }

      await prisma.post.update({
        where: { id },
        data: {
          title,
          slug,
          content,
        },
      });

      // Revalidate related paths so client views update immediately
      revalidatePath("/blog");
      revalidatePath(`/blog/${slug}`);
      if (existing.slug !== slug) {
        revalidatePath(`/blog/${existing.slug}`);
      }
      revalidatePath("/");

      return { success: true, message: `Blog updated and republished successfully!` };
    } else {
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
    }
  } catch (error) {
    console.error("Failed to publish/update blog post:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to publish or update blog post due to an internal error.";
    return { error: errorMessage };
  }
}

export async function deletePost(id: number) {
  if (!(await verifySession())) {
    return { error: "Unauthorized. Please log in as admin." };
  }

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

export async function logoutAction() {
  await logout();
  redirect("/login");
}
