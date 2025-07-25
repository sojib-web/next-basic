"use client";
import { postSingleData } from "@/app/actions/products/postSingleProducts";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProductAddForm = () => {
  const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;

    const payload = { productName };

    try {
      // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(payload),
      // });
      const res = await postSingleData(payload);
      // if (!res.ok) throw new Error("Failed to submit");

      setMessage("Product added successfully!");
      router.push("/products");
      router.refresh();
      form.reset();
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          className="border px-3 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
        {message && <p className="text-green-600">{message}</p>}
      </form>
    </div>
  );
};

export default ProductAddForm;
