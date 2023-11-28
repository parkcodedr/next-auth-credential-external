"use client";
import React from "react";

import Navbar from "@/components/store/Navbar";
import CategoryMenu from "@/components/store/CategoryMenu";
import HeroSlider from "@/components/store/HeroSlider";
import Deals from "@/components/store/Deals";
import BestPrices from "@/components/store/BestPrices";
import SummaryCount from "@/components/store/SummaryCount";
import Footer from "@/components/store/Footer";

const page = () => {
  return (
    <main>
      <div className="h-14 w-full bg-[#9A0BB4]"></div>
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
      <SummaryCount />
      <Footer />
    </main>
  );
};

export default page;
