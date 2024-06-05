import { NextResponse } from "next/server"

import { addTest } from "@/server/front/action/test";
async function handler(request) {
    const params = await request.json();
    console.log(params);

    const result = await addTest({
        name: '999'
    });

    return NextResponse.json({
        code: 0,
        message: "success",
        success: true,
        data: result,
    }, { status: 200 })
}

export const GET = handler
export const POST = handler
export const PUT = handler
