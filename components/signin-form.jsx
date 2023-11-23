"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const formSchema = z.object({
    email: z.string().email("Enter a valid email").min(1, {
      message: "Email must be at least 2 characters.",
    }),
    password: z.string().min(1, {
      message: "Email must be at least 2 characters.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values) {
    setIsLoading(true);
    setError(null);
    signIn("credentials", { ...values, redirect: false }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        // toast.success('Logged in');
        router.push(callbackUrl ? callbackUrl : "/dashboard");
        router.refresh();
      }

      if (callback?.error) {
        console.log({ error: callback.error });
        setError(callback.error);
        // toast.error(callback.error);
      }
    });
  }

  return (
    <div>
      {error ? <p className="text-red-400 text-center">{error}</p> : null}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;
