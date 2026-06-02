import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import "dotenv/config";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

let prismaInstance: PrismaClient;

if (globalForPrisma.prisma) {
  prismaInstance = globalForPrisma.prisma;
} else {
  const dbPath = process.env.DATABASE_URL
    ? process.env.DATABASE_URL.replace("file:", "")
    : "./dev.db";

  const adapter = new PrismaBetterSqlite3({ url: dbPath });
  prismaInstance = new PrismaClient({ adapter });
}

export const prisma = prismaInstance;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;