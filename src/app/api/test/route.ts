import { NextResponse } from "next/server"

import { addTest } from "@/server/front/action/test";
export async function POST(request) {
    const params = await request.json();

    const result = await addTest(params);

    return NextResponse.json({
        code: 0,
        message: "success",
        success: true,
        data: result,
    }, { status: 200 })
} 