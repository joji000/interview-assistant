import Link from "next/link";
import Image from "next/image";
import React from "react";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const Rootlayout = async({ children }: { children: React.ReactNode }) => {

  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className="root-layout">
      <nav>
        <Link className="flex items-center gap-2" href="/">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">InterviewPrep </h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default Rootlayout;
