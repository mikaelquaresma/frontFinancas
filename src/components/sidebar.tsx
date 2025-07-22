"use client";

import { useState } from "react";
import { Camera, Home, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: <Home size={40} />, label: "Início" },
    { icon: <Search size={40} />, label: "Pesquisar" },
    { icon: <Settings size={40} />, label: "Configurações" },
    { icon: <Camera size={40} />, label: "Teste" },
  ];

  return (
    <aside
      className={cn(
        "h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <div className="flex items-center justify-between p-4">
        {isOpen && <span className="text-lg font-bold">Sobra mais</span>}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="ml-auto"
        >
          <span>{isOpen ? "<" : ">"}</span>
        </Button>
      </div>

      <nav className="flex flex-col space-y-2 p-2">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="flex items-center gap-2 justify-start"
          >
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </Button>
        ))}
      </nav>
    </aside>
  );
}
