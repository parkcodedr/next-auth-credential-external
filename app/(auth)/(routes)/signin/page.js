import SignInForm from "@/components/signin-form";
import React from "react";

const SignIn = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="flex flex-col space-y-3 md:w-1/5 w-full px-6 md:px-0 lg:px-0">
        <h2 className="text-lg font-bold leading-7 text-center">Sign in</h2>
        <SignInForm />
      </div>
    </main>
  );
};

export default SignIn;
