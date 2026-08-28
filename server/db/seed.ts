import "dotenv/config";
import { auth } from "../lib/auth";
import { db } from "./index";

async function main() {
  await auth.api.signUpEmail({
    body: {
      name: "Test User",
      email: "test@example.com",
      password: "password",
    },
  });
  console.log("Seeded: test@example.com / password");
  await db.$client.end();
}

main();
