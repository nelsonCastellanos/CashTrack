import {NextRequest, NextResponse} from "next/server";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {PrismaClient} from "@prisma/client";
import {z} from "zod";
const prisma = new PrismaClient()


const schema = z.object({
    name: z.string(),
    description: z.string().nullish(),
})
export async function GET(request: NextRequest) {
    const categories = await prisma.expenseCategory.findMany()
    return NextResponse.json(categories)
}

export async function POST(request: NextRequest) {
    const parsed = schema.parse(await request.json())
    const category = await prisma.expenseCategory.create({
        data: {
            name: parsed.name,
            description: parsed.description
        }
    })
    return NextResponse.json(category)
}