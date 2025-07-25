import dbConnect from "@/lib/dbConnect";
import { redirect } from "next/navigation";
import React from "react";
import { getProducts } from "../actions/products/getProducts";

// export const dynamic = "force-dynamic";

const ProductsPage = async () => {
  // const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  // // console.log("jhjklh", NEXT_PUBLIC_SERVER_ADDRESS);
  // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`);
  // const data = await res.json();

  // const data = await dbConnect("products").find({}).toArray();
  // const items = data.data;
  const items = await getProducts();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Product List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {item.name}
            </h2>
            <p className="text-gray-600">Category: {item.category}</p>

            <p className="text-gray-600">Products Name: {item.productName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
