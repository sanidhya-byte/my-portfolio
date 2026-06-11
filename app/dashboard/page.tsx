import { prisma } from "@/lib/prisma";
import DashboardClient from "./DashboardClient";
import { Post } from "@prisma/client";

// Force dynamic rendering to ensure the admin dashboard always shows the latest database state
export const dynamic = "force-dynamic";

export default async function Dashboard() {
  let posts: Post[] = [];
  try {
    posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Failed to fetch posts in dashboard:", error);
  }

  return <DashboardClient posts={posts} />;
}