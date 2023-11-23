"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { signOut } from "next-auth/react";
import { getSession } from "@/lib/getCurrentUser";

const VendorDashboard = async () => {
  const session = await getSession();

  console.log({ session });
  return (
    <div>
      <h1>Vendor Dashboard</h1>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
};

export default VendorDashboard;
