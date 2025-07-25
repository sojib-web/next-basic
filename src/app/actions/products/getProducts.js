"use server";

import dbConnect from "@/lib/dbConnect";

export const getProducts = async () => {
  try {
    const items = await dbConnect("products").find({}).toArray();
    return items;
  } catch (error) {
    console.error(error);
    return [];
  }
};
