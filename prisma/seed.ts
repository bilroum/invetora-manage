import { prisma } from "../lib/prisma.ts";



async function main() {
  const demoUserId = "72f05a2d-6478-477f-aec6-5319b99ae09b";

  await prisma.product.createMany({
    data: Array.from({ length: 25 }).map((_, i) => ({
      userId: demoUserId,
      name: `Product ${i + 1}`,
      price: Math.random() * 90 + 10,
      quantity: Math.floor(Math.random() * 20),
      lowStock: 5,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
    })),
  });

  console.log("Seed data created.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
