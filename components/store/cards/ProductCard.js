import LoveIcon from "@/components/vectors/LoveIcon";
import React from "react";
import RatingStar from "@/components/store/Rating";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }) => {
  return (
    <section>
      <main className="card__container border rounded-xl bg-[#FFDEFC] h-[228px]">
        <div className="relative">
          <div className="flex justify-between p-3">
            <div>Rating</div>
            <div className="h-6 w-6 rounded-full bg-[#A80CC4] flex items-center justify-center cursor-pointer">
              <LoveIcon />
            </div>
          </div>
          <section className="w-full flex justify-center items-center h-[150px]">
            <Image
              src={`/assets/images/${product.image}`}
              height={200}
              width={200}
              className="object-contain"
            />
          </section>
          <div className="absolute -right-4">
            <Button className="rounded-xl bg-[#9A0BB4]">Add to cart</Button>
          </div>
        </div>
      </main>
      <section className="flex flex-col gap-2 mt-2">
        <div>
          <h2 className="text-base font-semibold">{product.name}</h2>
          <p className="text-[10px]">Long lasting battery</p>
        </div>
        <div>
          <p className="text-sm font-semibold">NGN{product.price}</p>
          <p className="text-[10px] text-[#000000] line-through">
            NGN20,000.90
          </p>
        </div>
      </section>
    </section>
  );
};

export default ProductCard;
