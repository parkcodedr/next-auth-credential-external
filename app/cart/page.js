"use client";
import Navbar from "@/components/store/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CartItem from "@/components/CartItem";

const page = () => {
  return (
    <main>
      <div className="h-14 w-full bg-[#fc53ec]"></div>
      <section className="">
        <Navbar />
      </section>
      <section className=" container mx-auto flex">
        <div className="w-3/5  p-10 bg-white">
          <section className="flex flex-col space-y-6">
            <CartItem bg={true} />
            <CartItem bg={false} />
            <CartItem bg={true} />
            <CartItem bg={false} />
            <CartItem bg={true} />
          </section>
        </div>
        <div className="w-2/5 bg-[#FFF07959] p-10">
          <h2>Choose Your Location</h2>
          <form>
            <div className="mb-2">
              <Label>State</Label>
              <Input placeholder="Abuja" />
            </div>
            <div className="mb-2">
              <Label>City</Label>
              <Input placeholder="Kubwa,Abuja" />
            </div>
            <div className="mb-2">
              <Label>Mobile</Label>
              <Input placeholder="+234074889393" />
            </div>
            <div className="mb-2">
              <Label>Email</Label>
              <Input placeholder="maryokah@gmail.com" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default page;

const detailNav = [
  "Overview",
  "Description",
  "Shipping",
  "Warranty",
  "Return Policy",
  "Reviews",
];
