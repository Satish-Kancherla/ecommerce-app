import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path"
import {v4} from "uuid";

export async function PUT(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const formData = await req.formData();

  const category = formData.get('category');
  const name = formData.get('name');
  const new_price = formData.get('new_price');
  const old_price = formData.get('old_price');
  const description = formData.get('description');
  const file = formData.get("image");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = v4()+'_'+file.name.replaceAll(" ", "_");

  try {
    const imageUrl = `/uploads/${filename}`;
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );
    const updatedMen = await prisma.men.update({
      where: { id },
      data: {
        category,
        name, 
        new_price,
        old_price,
        description,
        imageUrl,
      },
    });
    return NextResponse.json(updatedMen, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


// import { prisma } from "@/lib/prisma";
// import { NextResponse } from "next/server";

// export async function PUT(req) {
//   const { searchParams } = new URL(req.url);
//   const id = searchParams.get('id');
//   const { category, name, new_price, old_price, description } = await req.json();

//   try {
//     const updatedMen = await prisma.men.update({
//       where: { id },
//       data: {
//         category,
//         name,
//         new_price,
//         old_price,
//         description,
//       },
//     });
//     return NextResponse.json(updatedMen, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
