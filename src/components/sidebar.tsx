"use client";

import { useState } from "react";
import { LayoutDashboard, DollarSign, CreditCard, FileText, Users, ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Balance");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", key: "Dashboard" },
    { icon: <DollarSign size={20} />, label: "Balance", key: "Balance" },
    { icon: <CreditCard size={20} />, label: "Card Center", key: "Card Center" },
    { icon: <FileText size={20} />, label: "Invoices", key: "Invoices" },
    { icon: <Users size={20} />, label: "Transaction Details", key: "Transaction Details" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "h-screen bg-gray-50 flex flex-col transition-all duration-300 relative z-50",
        // Desktop: Always visible, collapsible
        "lg:flex",
        isCollapsed ? "lg:w-16" : "lg:w-64",
        // Mobile: Hidden by default, slides in when open
        "hidden lg:flex",
        isOpen && "lg:hidden fixed top-0 left-0 w-64 flex"
      )}>
        {/* Close button for mobile */}
        {isOpen && (
          <button
            onClick={onClose}
            className="lg:hidden absolute right-4 top-4 z-10 p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        )}

        {/* Toggle Button for Desktop */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:block absolute -right-3 top-8 z-10 bg-white border border-gray-200 rounded-full p-1.5 shadow-sm hover:shadow-md transition-shadow"
        >
          {isCollapsed ? (
            <ChevronRight size={16} className="text-gray-600" />
          ) : (
            <ChevronLeft size={16} className="text-gray-600" />
          )}
        </button>

        <div className={cn("p-6", isOpen && "pt-16", isCollapsed && "lg:px-3")}>
          {!isCollapsed && (
            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              MENU
            </h2>
          )}
        </div>

        <nav className={cn("flex-1", isCollapsed ? "lg:px-2 px-4" : "px-4")}>
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveItem(item.key)}
              className={cn(
                "w-full flex items-center rounded-lg text-left transition-all duration-200 mb-1",
                isCollapsed ? "lg:gap-0 lg:px-2 lg:py-3 lg:justify-center gap-3 px-3 py-3" : "gap-3 px-3 py-3",
                activeItem === item.key
                  ? "bg-gray-900 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
              title={isCollapsed ? item.label : undefined}
            >
              {item.icon}
              {!isCollapsed && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
