import LoveIcon from "@/components/vectors/LoveIcon";
import React from "react";

const ProductCard = () => {
  return (
    <main className="card__container border rounded-xl">
      <div className="relative">
        <div className="flex justify-between p-3">
          <h3>Rating</h3>
          <div className="h-6 w-6 rounded-full bg-[#A80CC4] flex items-center justify-center cursor-pointer">
            <LoveIcon />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductCard;
