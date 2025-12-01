"use server";
import { redirect } from "next/navigation";
import getCurrentUser from "../auth";
import { prisma } from "../prisma";
import { nonnegative, z } from "zod";

const ProductSchema = z.object({
  name: z.string().min(1, "name is required"),
  price: z.coerce.number().nonnegative("Price must be. positive"),
  quantity: z.coerce.number().int().min(0, "Quantity must be üpositive"),
  sku: z.string().optional(),
  lowStock: z.coerce.number().int().min(0).optional(),
});

export async function deleteProduct(formData: FormData) {
  const user = await getCurrentUser();
  const id = String(formData.get("id") || "");
  await prisma.product.delete({
    where: { id: id, userId: user.id },
  });

  return { success: true };
}

export async function createProduct(formData: FormData) {
  const user = await getCurrentUser();

  const parsed = ProductSchema.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    sku: formData.get("sku") || undefined,
    lowStock: formData.get("lowStock") || undefined,
  });

  if (!parsed.success) {
    throw new Error("Validation failed");
  }

  try {
    await prisma.product.create({
      data: { ...parsed.data, userId: user.id },
    });
    redirect("/invetory");
  } catch (error) {
    throw new Error("Faailed to create new Product");
  }

  return { success: true };
}
