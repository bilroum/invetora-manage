import { Button } from "@/components/ui/button";
import { HomeIcon, LogIn } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center  py-32 px-16 bg-white dark:bg-black">
        <h1 className="font-bold text-4xl mb-4">Invetora Management</h1>
        <p>
          Keep track of your stock quickly and efficiently. Please log in or
          create an account to get started.
        </p>
        <div className="flex w-full justify-center gap-4 mt-4">
          <Button variant="default" className="flex items-center gap-2" asChild>
            <Link href="/">
              <HomeIcon className="w-4 h-4" />
              <span className="lg:inline">Home</span>
            </Link>
          </Button>

          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/sign-in">
              <LogIn className="w-4 h-4" />
              <span className=" lg:inline">Login</span>
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
