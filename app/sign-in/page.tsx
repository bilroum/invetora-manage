import { SignIn } from "@stackframe/stack";
import Link from "next/link";
import React from "react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-5">
        <SignIn />
        <Link href="/" className="pt-5 hover:text-red-800">
          Go Home
        </Link>
      </div>
    </div>
  );
}
