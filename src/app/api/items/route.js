import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  const data = await dbConnect("products").find({}).toArray();

  return Response.json({ data });
}

export async function POST(req) {
  const postData = await req.json();
  const data = await dbConnect("products").insertOne(postData);
  revalidatePath("/products");
  return Response.json({ data });
}
