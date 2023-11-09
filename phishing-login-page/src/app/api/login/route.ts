import { Prisma, PrismaClient } from "@prisma/client";

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const res = await request.json();
  const username: string = res.username;
  const password: string = res.password;
  const user = await prisma.user.create({
    data: {
      password: password,
      username: username,
      email: "example@example.com",
      name: "John Doe",
      picture: "https://example.com/picture.jpg",
      sid: "1234567890",
      // add any other missing properties here
    } as Prisma.UserCreateInput,
  });
  return new Response(JSON.stringify(user), {
    headers: { "content-type": "application/json" },
  });
}
