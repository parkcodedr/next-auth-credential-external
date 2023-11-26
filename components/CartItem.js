import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Image from "next/image";

import { CiCircleRemove } from "react-icons/ci";

const CartItem = ({ bg }) => {
  return (
    <main
      className={`flex gap-3 justify-center items-center ${
        bg ? "bg-[#F8F5F7]" : "bg-white"
      }`}
    >
      <div className="flex flex-col justify-center items-center">
        <Image src="/assets/images/product-lg.png" height="100" width="100" />
      </div>
      <section className="flex-1">
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl">Apple Watch, APX5</h1>
          <span className="p-2 cursor-pointer">
            <CiCircleRemove color="#A80CC4" size={20} />
          </span>
        </div>

        <div className="py-2">
          <h2 className="text-sm font-semibold text-[#30026557]">
            NGN10,000.90
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <div className="rounded-full w-5 h-5 bg-[#A80CC4] flex justify-center items-center">
            <FaMinus color="white" size={10} />
          </div>
          <p className="text-lg font-semibold">2</p>
          <div className="rounded-full w-5 h-5 bg-[#A80CC4] flex justify-center items-center">
            <FaPlus color="white" size={10} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartItem;
