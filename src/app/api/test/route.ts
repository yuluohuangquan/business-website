import { NextResponse } from "next/server"

import { addTest } from "@/server/front/action/test";
export async function POST(request) {
    const params = await request.json();

    console.log(params);
    return NextResponse.json({
        code: 0,
        message: "success",
        success: true,
        data: params,
    }, { status: 200 })
} 