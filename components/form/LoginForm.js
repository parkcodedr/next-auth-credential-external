"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
// import { ReactComponent as GoogleIcon } from "../../assets/svg/google.svg";
// import { ReactComponent as FacebookIcon } from "../../assets/svg/facebook.svg";

const LoginForm = () => {
  return (
    <form>
      <div className="mb-3">
        <Label>Email</Label>
        <Input placeholder="maryokah@gamail.com" className="border-[#9A0BB4]" />
      </div>
      <div className="mb-1">
        <Label>Password</Label>
        <Input placeholder="*******" className="border-[#9A0BB4]" />
      </div>
      <div className="mb-5 flex justify-end">
        <Link href="/forgot-password" className="text-right">
          Forget Password ?
        </Link>
      </div>

      <Button className="bg-[#9A0BB4] w-full rounded-xl">Sign in</Button>
      <p className="text-xs text-center mt-2 flex justify-center">
        Dont have an account?{" "}
        <Link href="/register" className="text-[#9A0BB4] ml-1">
          Sign up
        </Link>
      </p>
      <div class="flex items-center mt-2">
        <div class="flex-1 border-t border-[rgba(0, 0, 0, 0.28)]"></div>
        <div class="mx-4 text-black text-xs font-normal">Or</div>
        <div class="flex-1 border-t border-[rgba(0, 0, 0, 0.28)]"></div>
      </div>

      <div className="flex flex-col gap-2 items-center mt-2">
        <p className="text-xs font-light">Sign in using</p>
        <div className="flex gap-4 justify-center items-center">
          <ImFacebook2 color="#1877F2" size={24} className="cursor-pointer" />
          <FcGoogle size={24} className="cursor-pointer" />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
