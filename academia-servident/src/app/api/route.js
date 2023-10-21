import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export function GET(request, {params}) {
    console.log(params)
    connectDB()
    return NextResponse.json({
        message: `obteniendo ping ${params.id}`,
    });
}
