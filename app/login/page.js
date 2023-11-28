import LoginForm from "@/components/form/LoginForm";
import Navbar from "@/components/store/Navbar";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <div className="h-14 w-full bg-[#9A0BB4]"></div>
      <Navbar />
      <section className="2xl:container min-h-screen">
        <section>
          <div className="flex login__container">
            <div className="w-full md:w-2/5 p-12">
              <div className="flex flex-col gap-1 mb-5">
                <h2 className="text-2xl font-semibold">Hi</h2>
                <p className="text-xs font-light">
                  Sign in to get access to free coupon
                </p>
              </div>
              <LoginForm />
            </div>
            <div className="w-full md:w-2/4">
              <div
                className="flex justify-end "
                style={{
                  backgroundImage: "url('/assets/images/login-bg.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <Image
                  src="/assets/images/lady-image.png"
                  alt="Lady"
                  width={490}
                  height={435}
                  className="mt-10"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default page;
