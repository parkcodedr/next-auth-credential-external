import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex justify-center gap-5 py-20 bg-[#FC53EC1A] mt-12">
      <Image src="/assets/images/logo-lg.png" height={116} width={251} />
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="text-lg font-semibold leading-none">New to econstro?</h2>
          <p className="text-base text-gray-700">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
        </div>
        <div className="flex">
          <Input
            type="email"
            className="bg-[#DBD5DA] shadow-md focus:border-[#9A0BB4] focus:outline-none"
            placeholder="Enter Email"
          />
          <div className="-ml-3">
            <Button className="bg-[#9A0BB4]">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
