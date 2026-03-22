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

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const product = await request.json();
    const products = await getProducts();
    
    // Simple ID generation
    const newId = products.length > 0 ? Math.max(...products.map((p: any) => p.id)) + 1 : 1;
    const newProduct = { ...product, id: newId };
    
    products.push(newProduct);
    await saveProducts(products);
    
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}
