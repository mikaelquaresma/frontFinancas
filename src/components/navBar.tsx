"use client";

import * as React from "react";
import { Search, Bell, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface NavbarProps {
  onMenuToggle?: () => void;
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden w-full bg-gray-900 border-b border-gray-800 px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Mobile Menu Button + Logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onMenuToggle}
            className="p-2 text-gray-400 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm">S</span>
            </div>
            <span className="text-base sm:text-lg font-semibold text-white">SobraMais</span>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="flex-1 max-w-xs sm:max-w-md mx-2 sm:mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3 w-3 sm:h-4 sm:w-4" />
            <input
              type="search"
              placeholder="Pesquisar aqui"
              className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 text-sm sm:text-base bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Notification Bell - Mobile */}
        <button className="p-2 text-gray-400 hover:bg-gray-800 rounded-lg transition-colors relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
      </nav>

      {/* Desktop Navbar */}
      <div className="hidden md:block md:ml-64 px-6 md:px-3 lg:px-6 pt-6">
        <div className="bg-gray-800/90 backdrop-blur-md border border-gray-700 rounded-2xl px-4 sm:px-6 py-3 shadow-xl">
            <div className="flex items-center justify-between w-full">
              {/* Page Title */}
              <div className="flex-1 flex items-center min-w-0">
                <h1 className="text-lg md:text-xl font-semibold text-white truncate">Início</h1>
              </div>

              {/* Search Bar - Center */}
              <div className="relative flex-1 max-w-xs md:max-w-sm lg:max-w-md mx-3 md:mx-4 lg:mx-8 flex items-center justify-center">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="search"
                    placeholder="Pesquisar aqui"
                    className="w-full pl-10 pr-4 py-2 text-sm md:text-base bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Right Side Icons */}
              <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end min-w-0">
                {/* Notification Bell */}
                <button className="p-2 text-gray-400 hover:bg-gray-700 rounded-lg transition-colors relative">
                  <Bell className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>

                {/* User Profile */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-2 md:gap-3 cursor-pointer min-w-0">
                      <Avatar className="w-6 h-6 md:w-8 md:h-8">
                        <AvatarImage src="/avatar.jpg" alt="Marvin McKinney" />
                        <AvatarFallback className="bg-blue-600 text-white text-xs md:text-sm">MM</AvatarFallback>
                      </Avatar>
                      <div className="text-right hidden lg:block min-w-0">
                        <p className="text-sm font-medium text-white truncate">Marvin McKinney</p>
                        <p className="text-xs text-gray-400 truncate">Accountant</p>
                      </div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-gray-800 border-gray-700">
                    <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                      Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                      Configurações
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 hover:text-white">
                      Sair
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
