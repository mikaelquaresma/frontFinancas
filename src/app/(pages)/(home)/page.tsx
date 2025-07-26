"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link href="/login" passHref>
        <Button
          variant="outline"
          className="px-4 py-2 text-sm font-medium cursor-pointer border-[#3D195B] text-[#3D195B] hover:bg-[#3D195B] hover:text-white"
        >
          Login &rarr;
        </Button>
      </Link>
    </div>
  );
}