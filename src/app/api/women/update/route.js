import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const { category, name, new_price, old_price, description } = await req.json();

  try {
    const updateWomen = await prisma.women.update({
      where: { id },
      data: {
        category,
        name,
        new_price,
        old_price,
        description,
      },
    });
    return NextResponse.json(updateWomen, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
