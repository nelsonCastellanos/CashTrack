import {NextResponse} from "next/server";
import {NextRequest} from "next/server.js";

export async function GET(request: NextRequest) {
    return NextResponse.json({message: "Hello world"});
}