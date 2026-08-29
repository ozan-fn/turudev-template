import { prisma } from "../app/lib/prisma";
import { auth } from "../app/lib/auth.server";

async function seed() {
  const existing = await prisma.user.findUnique({ where: { email: "test@example.com" } });
  if (existing) {
    console.log("User already exists:", existing.email);
    return;
  }
  const res = await auth.api.signUpEmail({
    body: {
      email: "test@example.com",
      password: "password",
      name: "Test User",
    },
  });
  console.log("Seeded user:", res.user.email);
}

seed()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
