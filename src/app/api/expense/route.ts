import {PrismaClient} from "@prisma/client";
import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

const prisma = new PrismaClient()

const schema = z.object({
    identifyNumber: z.string(),
    identifyIdType: z.number(),
    description: z.string(),
    price: z.number(),
    date: z.date(),
    categoryId: z.number(),
    products: z.array(z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
        quantity: z.number(),
    })).optional(),
    tags: z.array(z.object({
        id: z.string().optional(),
        name: z.string(),
        description: z.string(),
    })).optional(),
    files: z.array(z.object({
        name: z.string(),
        description: z.string(),
        file: z.record(z.any()),
        url: z.string(),
    })).optional(),
})


/**
 * @swagger
 * api/expense:
 *  get:
 *  description: Get all expenses
 *  responses:
 *      200:
 *          description: Expenses
 *              content:
 *                  application/json:
 *                  schema:
 *                      type: array
 */
export async function GET(request: NextRequest) {
    const session = await getServerSession(authOptions)
    const user = await prisma.user.findFirstOrThrow({
        where:{
            email: session?.user?.email
        }
    })
    const data = await prisma.expense.findMany({
        where: {
            userId: user.id
        }
    })
    NextResponse.json({ data })
}

/**
 * @swagger
 * /api/expense:
 *   post:
 *     description: Create expenses values
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions)
    const email = session?.user?.email;
    const parsed = schema.parse(request.body)
    if(!session?.user?.email){
        return new NextResponse(null, {status: 403});
    }

    const user = await prisma.user.findFirstOrThrow({
       where:{
           email: email
       }
    });
    const expense = await prisma.expense.create({
        data: {
            identifyNumber: parsed.identifyNumber,
            identifyIdType: parsed.identifyIdType,
            description: parsed.description,
            price: parsed.price,
            date: new Date(parsed.date),
            categoryId: parsed.categoryId,
            userId: user.id,
        }
    })

    if (parsed.products && parsed.products.length > 0) {
        await prisma.expenseProducts.createMany({
            data: parsed.products.map((product) => ({
                name: product.name,
                description: product.description,
                price: product.price,
                quantity: product.quantity,
                expenseExpense_id: expense.expense_id,
            }))
        });
    }

    if(parsed.tags && parsed.tags.length > 0) {
        await prisma.expenseTags.createMany({
            data: parsed.tags.map((tag) => ({
                name: tag.name,
                description: tag.description,
                expenseExpense_id: expense.expense_id,
            }))
        });
    }
    return NextResponse.json({ expense })
}
