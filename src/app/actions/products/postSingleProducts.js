"use server";

import dbConnect from "@/lib/dbConnect";

export const postSingleData = async (postData) => {
  try {
    const data = await dbConnect("products").insertOne(postData);
    revalidatePath("/products");
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
