// import { PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";

// const prisma = PrismaClient();

// export const POST = async (request) => {
//   const body = await request.json();
//   const guest = await prisma.guest.create({
//     data: {
//       name: body.name,
//       message: body.message,
//     },
//   });
//   return NextResponse.json(guest, { status: 201 });
// };

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request) => {
  const body = await request.json();
  const product = await prisma.guest.create({
    data: {
      name: body.name,
      message: body.message,
    },
  });
  return NextResponse.json(product, { status: 201 });
};
