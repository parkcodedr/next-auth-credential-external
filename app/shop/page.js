"use client";
import React from "react";

import Navbar from "@/components/store/Navbar";
import CategoryMenu from "@/components/store/CategoryMenu";
import HeroSlider from "@/components/store/HeroSlider";
import Deals from "@/components/store/Deals";
import BestPrices from "@/components/store/BestPrices";

const page = () => {
  return (
    <main>
      <div className="h-14 w-full bg-[#fc53ec]"></div>
      <section className="">
        <Navbar />
      </section>
      <section className="flex 2xl:container">
        <CategoryMenu />
        <div className="w-full md:w-4/5 ">
          <HeroSlider />
        </div>
      </section>
      <Deals />
      <BestPrices />
    </main>
  );
};

export default page;
