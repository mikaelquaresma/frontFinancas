"use client";

import { useState } from "react";
import Navbar from "../navBar";
import Sidebar from "../sidebar";


export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - Mobile fixed, Desktop floating */}
      <Navbar onMenuToggle={toggleSidebar} />
      
      <div className="flex flex-1">
        {/* Sidebar - Hidden on desktop, visible on mobile when opened */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        
        {/* Main Content */}
        <main className="flex-1 p-3 sm:p-4 lg:p-6">
          {/* Desktop: Add top padding for floating navbar */}
          <div className="md:pt-16">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}