// @ts-ignore
import { PrismaClient } from "@prisma/client";

// @ts-ignore
export async function POST(request: Request) {
  // @ts-ignore
  const prisma = new PrismaClient();
  // @ts-ignore
  const res = await request.json();
  // @ts-ignore
  const username = res.username;
  // @ts-ignore
  const password = res.password;
  // @ts-ignore
  const user = await prisma.user.create({
    data: {
      password: password,
      username: username,
    },
  });
  // @ts-ignore
  return new Response(JSON.stringify(user), {
    headers: { "content-type": "application/json" },
  });
}
