import React from "react";
import ProductCard from "@/components/store/cards/ProductCard";

const Deals = () => {
  return (
    <main className="container mx-auto">
      <h2>Deals</h2>
      <div className="grid grid-cols-4">
        <ProductCard />
      </div>
    </main>
  );
};

export default Deals;
