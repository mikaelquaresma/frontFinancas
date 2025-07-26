"use client";

import { useState } from "react";
import { Home, Users, FileText, BarChart3, Bell, MessageSquare, Settings, HelpCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { icon: <Home size={20} />, label: "Início", key: "Home" },
    { icon: <Users size={20} />, label: "Contas", key: "Accounts" },
    { icon: <FileText size={20} />, label: "Transações", key: "Transactions" },
    { icon: <BarChart3 size={20} />, label: "Relatórios", key: "Reports" },
    { icon: <FileText size={20} />, label: "Despesas", key: "Expenses" },
    { icon: <Bell size={20} />, label: "Notificações", key: "Notifications" },
    { icon: <MessageSquare size={20} />, label: "Mensagens", key: "Messages" },
  ];

  const bottomItems = [
    { icon: <HelpCircle size={20} />, label: "Suporte", key: "Support" },
    { icon: <Settings size={20} />, label: "Configurações", key: "Settings" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40"
          style={{ backgroundColor: '#000000d4' }}
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "h-screen bg-gray-900 flex flex-col transition-all duration-300 z-50 border-r border-gray-800",
        // Desktop: Always visible and fixed
        "md:fixed md:top-0 md:left-0 md:flex w-64",
        // Mobile: Hidden by default, slides in when open
        "hidden md:flex",
        isOpen && "md:hidden fixed top-0 left-0 w-64 flex"
      )}>
        {/* Close button for mobile */}
        {isOpen && (
          <button
            onClick={onClose}
            className="md:hidden absolute right-4 top-4 z-10 p-2 text-gray-400 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        )}

        {/* Logo */}
        <div className="p-6 border-b border-gray-800 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-white text-lg font-semibold">SobraMais</span>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveItem(item.key)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200",
                  activeItem === item.key
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                )}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
                {(item.key === "Notifications" || item.key === "Messages") && (
                  <div className="ml-auto">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Bottom Navigation */}
        <div className="px-4 py-4 border-t border-gray-800 flex-shrink-0">
          <div className="space-y-1">
            {bottomItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveItem(item.key)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200",
                  activeItem === item.key
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                )}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Update Notice */}
        <div className="p-4 flex-shrink-0">
          <div className="bg-blue-600 rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <p className="text-white font-medium text-sm mb-1">Nova atualização disponível</p>
            <p className="text-blue-100 text-xs mb-3">clique para atualizar</p>
            <button className="bg-white text-blue-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Atualizar
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
