import {NextRequest, NextResponse} from "next/server";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    const identifiesTpe = await prisma.identifyType.findMany()
    return NextResponse.json(identifiesTpe)
}