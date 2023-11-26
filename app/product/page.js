"use client";
import Navbar from "@/components/store/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import PolicyItem from "@/components/PolicyItem";
import { DeliveryIcon, PickupStation, ReturnIcon } from "@/components/vectors";

const page = () => {
  return (
    <main>
      <div className="h-14 w-full bg-[#fc53ec]"></div>
      <section className="">
        <Navbar />
      </section>
      <section className=" container mx-auto flex">
        <div className="w-3/5 bg-[#F8F5F7] p-10">
          <main className="flex items-center ">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/assets/images/product-lg.png"
                height="360"
                width="360"
              />
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full bg-indigo-700"></div>
                <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
                <div className="w-5 h-5 rounded-full bg-purple-700"></div>
                <div className="w-5 h-5 rounded-full bg-black"></div>
                <div className="w-5 h-5 rounded-full bg-indigo-300"></div>
              </div>
            </div>
            <section>
              <h1 className="font-semibold text-3xl">Apple Watch, APX5</h1>
              <p className="text-xs font-light">
                Apple Watch, APX5 is the latest apple watch product available in
                different colors
              </p>
              <p className="text-[10px]">
                Brand:{" "}
                <span className="text-[#43006B]">
                  Apple | see other Apple product
                </span>{" "}
              </p>
              <div className="py-2">
                <h2 className="text-2xl font-semibold text-[#30026557]">
                  NGN10,000.90
                </h2>
                <div className="flex items-center gap-1">
                  <p className="text-xs line-through">NGN20,000.90</p>
                  <p className="text-[#C7B73F] text-xs">50%</p>
                </div>
                <p className="text-xs text-[#C50707]">
                  + shipping from NGN500 to Kubwa Abuja
                </p>
              </div>

              <div className="flex gap-1 items-center py-2 mb-2">
                <p>Rating</p>
                <p>(900 verified Rating)</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="rounded-full w-7 h-7 bg-[#A80CC4] flex justify-center items-center">
                  <FaMinus color="white" />
                </div>
                <p className="text-lg font-semibold">2</p>
                <div className="rounded-full w-7 h-7 bg-[#A80CC4] flex justify-center items-center">
                  <FaPlus color="white" />
                </div>
              </div>

              <div className="flex gap-3 py-5">
                <Button className="bg-[#A80CC4]">Buy Now</Button>
                <Button variant="outline">Add to Cart</Button>
              </div>
            </section>
          </main>
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
            <div className="flex items-center space-x-2 justify-end">
              <Checkbox id="save" className="text-[#9A0BB4]" />
              <Label className="text-[#9A0BB4] text-xs">
                Save Delivery Details
              </Label>
            </div>
          </form>
          <div>
            <PolicyItem
              icon={<DeliveryIcon />}
              title="Door Delivery"
              description="Delivery Fees NGN500"
              sub="Ready for delivery between 30 November & 31 November when you order"
            />
            <PolicyItem
              icon={<PickupStation />}
              title="Pickup Station"
              description="Delivery Fees NGN250"
              sub="Ready for delivery between 30 November & 31 November when you order"
            />
            <PolicyItem
              icon={<ReturnIcon />}
              title="Return Policy"
              description="Free return within 7 days for all eligible items"
             
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
