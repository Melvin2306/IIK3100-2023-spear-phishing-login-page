import { PrismaClient, UserUncheckedCreateInput } from "@prisma/client";

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const res = await request.json();
  const username = res.username;
  const password = res.password;
  const user = await prisma.user.create({
    data: {
      password: password,
      username: username,
    } as UserUncheckedCreateInput,
  });
  return new Response(JSON.stringify(user), {
    headers: { "content-type": "application/json" },
  });
}
