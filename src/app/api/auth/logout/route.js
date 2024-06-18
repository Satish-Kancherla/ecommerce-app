import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req){
    cookies().delete("user")
    return NextResponse.json({})
}