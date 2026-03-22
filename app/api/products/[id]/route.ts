import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "lib/data/products.json");

async function getProducts() {
  const data = await fs.readFile(DATA_PATH, "utf-8");
  return JSON.parse(data);
}

async function saveProducts(products: any[]) {
  await fs.writeFile(DATA_PATH, JSON.stringify(products, null, 4));
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const updatedProduct = await request.json();
    const products = await getProducts();
    
    const index = products.findIndex((p: any) => p.id === parseInt(id));
    if (index === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    
    products[index] = { ...updatedProduct, id: parseInt(id) };
    await saveProducts(products);
    
    return NextResponse.json(products[index]);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const products = await getProducts();
    
    const filteredProducts = products.filter((p: any) => p.id !== parseInt(id));
    if (filteredProducts.length === products.length) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    
    await saveProducts(filteredProducts);
    return NextResponse.json({ message: "Product deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}
