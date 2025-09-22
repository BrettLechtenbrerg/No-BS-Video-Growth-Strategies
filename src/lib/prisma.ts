import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient(): PrismaClient | undefined {
  try {
    // Check if we're using SQLite in production (not supported on Vercel)
    const databaseUrl = process.env.DATABASE_URL
    if (process.env.NODE_ENV === "production" && databaseUrl?.includes("file:")) {
      console.warn("SQLite database detected in production - database features disabled")
      return undefined
    }
    
    return new PrismaClient()
  } catch (error) {
    console.warn("Failed to initialize Prisma client:", error)
    return undefined
  }
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export default prisma
