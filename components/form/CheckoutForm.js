import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Visa from "../../assets/svg/visa.svg";
import MasterCard from "../../assets/svg/master-card.svg";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const CheckoutForm = () => {
  return (
    <main className="w-3/4">
      <div>
        <RadioGroup
          defaultValue="Card or Debit Card"
          className="flex flex-col ml-2"
        >
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem
              value="Cash on Delivery"
              id="cash-on-delivery"
              className="border-[#9A0BB4] text-[#9A0BB4]"
            />
            <Label htmlFor="cash-on-delivery" className="font-light">
              Cash on Delivery
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="Paypal"
              id="Paypal"
              className="border-[#9A0BB4] text-[#9A0BB4]"
            />
            <Label htmlFor="paypal" className="font-light">
              Paypal
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="Card or Debit Card"
              id="card"
              className="border-[#9A0BB4] text-[#9A0BB4]"
            />
            <div className="flex gap-20  items-center">
              <Label htmlFor="card" className="font-light">
                Card or Debit Card
              </Label>
              <div className="flex items-center gap-3">
                <Image src={Visa} height={32} width={32} />
                <Image src={MasterCard} height={32} width={32} />
              </div>
            </div>
          </div>
        </RadioGroup>
      </div>
      <div className="my-4">
        <div className="mb-3">
          <Label>Email</Label>
          <Input
            placeholder="maryokah@gamail.com"
            className="border-[#9A0BB4]"
          />
        </div>
        <div className="mb-3">
          <Label>Card Holder Name</Label>
          <Input placeholder="Mary Okah" className="border-[#9A0BB4]" />
        </div>
        <div className="mb-3">
          <Label>Card number</Label>
          <Input
            placeholder="383 93************ 055"
            className="border-[#9A0BB4]"
          />
        </div>
        <section className="grid grid-cols-2">
          <div className="mb-3 w-3/5">
            <Label>Expiry Date</Label>
            <Input placeholder="09/02" className="border-[#9A0BB4]" />
          </div>
          <div className="mb-3">
            <Label>CVV</Label>
            <Input placeholder="***" className="border-[#9A0BB4]" />
          </div>
        </section>
      </div>
      <section>
        <div className="text-sm font-medium grid grid-cols-2">
          <p>Sub Total</p>
          <p>NGN10,000.90</p>
        </div>
        <section className="flex flex-col gap-1 mt-2">
          <div className="text-sm font-normal grid grid-cols-2">
            <p>Coupon Discount</p>
            <p>NGN0.0</p>
          </div>
          <div className="text-sm font-normal grid grid-cols-2">
            <p>Tax</p>
            <p>NGN00.50</p>
          </div>
          <div className="text-sm font-normal grid grid-cols-2">
            <p>Delivery Cost</p>
            <p>NGN500</p>
          </div>
        </section>
      </section>
      <div className="flex justify-end mt-5">
        <Button className="bg-[#9A0BB4]">Proceed</Button>
      </div>
    </main>
  );
};

export default CheckoutForm;
