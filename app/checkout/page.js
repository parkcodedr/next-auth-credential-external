import CheckoutForm from "@/components/form/CheckoutForm";
import Navbar from "@/components/store/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import Image from "next/image";

const Checkout = () => {
  return (
    <main>
      <div className="h-14 w-full bg-[#9A0BB4]"></div>
      <Navbar />
      <section className="container min-h-screen bg-white">
        <div className="flex">
          <section className="w-3/5 ">
            <div className="bg-[#F8F5F7] px-16 py-5">
              <h2 className="text-base font-semibold">Product Review</h2>
              <section className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <Image
                    src="/assets/images/product-lg.png"
                    height="191"
                    width="174"
                  />
                  <div>
                    <h1 className="font-semibold text-base">
                      Apple Watch, APX5
                    </h1>
                    <p className="text-[10px]">
                      Color: <span className="text-[#43006B]">Blue</span>{" "}
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold text-[#30026557]">
                    NGN10,000.90
                  </h2>
                  <p className="text-xs">Quantity: 2</p>
                </div>
              </section>
            </div>
            <section className="px-16 py-5">
              <div className="text-sm font-medium flex justify-between items-center mb-10">
                <p>Delivery Information</p>
                <Button
                  variant="outline"
                  className="border-[#9A0BB4] text-[#300265]"
                >
                  Edit Information
                </Button>
              </div>
              <section className="flex flex-col gap-2 mt-2 w-2/5">
                <div className="text-sm font-normal grid grid-cols-2 gap-1">
                  <p className="flex-1 font-semibold">Name:</p>
                  <p>Mary Okah OLa</p>
                </div>
                <div className="text-sm font-normal grid grid-cols-2 gap-1">
                  <p className="flex-1">Email:</p>
                  <p className="text-left">adaokah@gmail.com</p>
                </div>
                <div className="text-sm font-normal grid grid-cols-2 gap-1">
                  <p className="flex-1">Mobile:</p>
                  <p>+2340703827728</p>
                </div>
                <div className="text-sm font-normal grid grid-cols-2 gap-1">
                  <p className="flex-1">Address:</p>
                  <p>Kubwa, Abuja</p>
                </div>
                <div className="text-sm font-normal grid grid-cols-2 gap-1">
                  <p className="flex-1">City:</p>
                  <p>Kubwa</p>
                </div>
                <div className="text-sm font-normal grid grid-cols-2 gap-1">
                  <p className="flex-1">Zip Code:</p>
                  <p>8874</p>
                </div>
              </section>
            </section>
          </section>

          <div className="w-2/5">
            <div className="px-5 md:px-10 py-10">
              <div className="flex items-center w-4/5">
                <Input
                  type="email"
                  className="bg-white focus:outline-none shadow-md"
                  placeholder="Enter Coupon Code"
                />
                <div className="-ml-3">
                  <Button className="bg-[#9A0BB4] ">Apply Coupon</Button>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFAD0] px-5 md:px-10 py-10">
              <h2 className="text-base font-semibold mb-4">Payment Details</h2>
              <CheckoutForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
