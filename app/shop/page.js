"use client";
import React from "react";

import Navbar from "@/components/store/Navbar";
import CategoryMenu from "@/components/store/CategoryMenu";
import HeroSlider from "@/components/store/HeroSlider";
import Deals from "@/components/store/Deals";

const page = () => {
  return (
    <main>
      <div className="h-14 w-full bg-[#fc53ec]"></div>
      <section className="">
        <Navbar />
      </section>
      <section className="flex 2xl:container">
        <CategoryMenu />
        <div className="w-4/5 ">
          <HeroSlider />
        </div>
      </section>
      <Deals />
    </main>
  );
};

export default page;
