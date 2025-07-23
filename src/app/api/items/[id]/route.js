import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const id = params.id;
  const singleData = await dbConnect("products").findOne({
    _id: new ObjectId(id),
  });

  return Response.json({ singleData });
}

export async function DELETE(req, { params }) {
  const id = params.id;
  const response = await dbConnect("products").deleteOne({
    _id: new ObjectId(id),
  });

  return Response.json({ response });
}

export async function PATCH(req, { params }) {
  const id = params.id;
  const postedData = await req.json();
  const filter = {
    _id: new ObjectId(id),
  };
  const updateData = await dbConnect("products").updateOne(
    filter,
    { $set: { ...postedData } },
    {
      upsert: true,
    }
  );

  return Response.json(updateData);
}
