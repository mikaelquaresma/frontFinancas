"use client";

import { usePathname } from "next/navigation";
import Navbar from "../navBar";
import Sidebar from "../sidebar";


export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showLayout = pathname !== "/login";
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">{children}</main>
        
      </div>
    </div>
  );
}