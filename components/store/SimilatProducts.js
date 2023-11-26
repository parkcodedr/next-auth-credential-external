import React from "react";
import ProductCard from "@/components/store/cards/ProductCard";

const SimilarProducts = () => {
  return (
    <section className="mb-20">
      <main className="container mx-auto px-20 py-5">
        <h2 className="py-5 text-xl font-bold">Check other Items</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default SimilarProducts;

const products = [
  {
    name: "Apple Watch, APX5",
    price: "10,000.90",
    image: "pro1.png",
  },
  {
    name: "Yo Face Cap",
    price: "15,000.90",
    image: "pro2.png",
  },
  {
    name: "Sony Head Set, ePX5",
    price: "10,000.90",
    image: "pro3.png",
  },
  {
    name: "Yo Game Pad, Full set",
    price: "15,000.90",
    image: "pro4.png",
  },
];
