import { PrismaClient } from "@prisma/client";

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const res = await request.json();
  const username: string = res.username;
  const password: string = res.password;
  const user = await prisma.user.create({
    data: {
      password: password,
      username: username,
    },
  });
  return new Response(JSON.stringify(user), {
    headers: { "content-type": "application/json" },
  });
}
