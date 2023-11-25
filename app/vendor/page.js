"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const VendorDashboard = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Vendor Dashboard</h1>

      {session ? (
        <>
          <h4>{session.user.name}</h4>
          <h2>{JSON.stringify(session.user)}</h2>
          <Image
            src={session.user?.image}
            height={30}
            width={30}
            alt="user"
            className="rounded-full object-cover"
            
          />
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      ) : null}
    </div>
  );
};

export default VendorDashboard;
