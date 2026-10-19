// Usage: npx tsx scripts/set-admin-password.ts <email> <new-password>
import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../lib/prisma-client";

const prisma = new PrismaClient();

async function main() {
  const [email, newPassword] = process.argv.slice(2);
  if (!email || !newPassword) {
    console.error("Usage: npx tsx scripts/set-admin-password.ts <email> <new-password>");
    process.exit(1);
  }
  if (newPassword.length < 8) {
    console.error("Password must be at least 8 characters.");
    process.exit(1);
  }

  const passwordHash = await bcrypt.hash(newPassword, 10);
  const user = await prisma.user.update({
    where: { email },
    data: { password: passwordHash },
  });

  console.log(`Password updated for ${user.email}.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
