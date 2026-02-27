import { useState } from "react";
import { productData } from "../data/productData";
import type { Product } from "../types";

export const Products = () => {
  const [activeTab, setActiveTab] = useState("Hand Tools");
  const products: Product[] = productData[activeTab];

  return (
    <main className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 py-24">
      {/* Page Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold">Electrical Tools</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore all the essential electrical tools categorized by type.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {Object.keys(productData).map((type) => (
          <button
            key={type}
            onClick={() => setActiveTab(type)}
            className={`px-6 py-2 rounded-lg border transition duration-300 ${
              activeTab === type
                ? "bg-primary text-black border-primary"
                : "border-gray-700 text-gray-300 hover:bg-gray-900"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-xl  hover:bg-white/5 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-contain rounded-t-xl  "
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-400 mt-1 text-sm">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
