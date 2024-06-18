import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { category, name, new_price, old_price, description } = await req.json();

  try {
    const men = await prisma.men.create({
      data: {
        category,
        name,
        new_price,
        old_price,
        description,
      },
    });
    return NextResponse.json(men, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
