import React from "react";
import {
  Appliances,
  BabyProduct,
  Computing,
  Electronics,
  Fashion,
  Gaming,
  Health,
  Others,
  Phone,
} from "@/components/vectors";
import Link from "next/link";
import Image from "next/image";

const CategoryMenu = () => {
  return (
    <div className="w-[212px] bg-[#EABC6F14] hidden md:block">
      <h3 className="text-[10px] p-5">Select any categories below</h3>
      <section className="space-y-1 mt-3">
        {cateogries.map((category) => (
          <Link
            href="#"
            className="flex items-center text-xs hover:bg-[#FFD48B] px-5 py-1 transition-all"
          >
            <span className="w-8">{category.icon}</span>
            <span className="flex-1">{category.title}</span>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default CategoryMenu;

const cateogries = [
  {
    title: "Appliances",
    icon: <Appliances />,
  },
  {
    title: "Phone & Tablets",
    icon: <Phone />,
  },
  {
    title: "Food Items",
    icon: <Image src="/assets/svg/food-items.svg" height={19} width={19} />,
  },
  {
    title: "Computing",
    icon: <Computing />,
  },

  {
    title: "Electronics",
    icon: <Electronics />,
  },
  {
    title: "Health & Beauty",
    icon: <Health />,
  },
  {
    title: "Baby Product",
    icon: <BabyProduct />,
  },
  {
    title: "Gaming",
    icon: <Gaming />,
  },
  {
    title: "Others",
    icon: <Others />,
  },
];
