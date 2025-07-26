"use client";

import * as React from "react";
import { Search, Calendar, Bell, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface NavbarProps {
  onMenuToggle?: () => void;
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
  return (
    <nav className="w-full bg-white px-4 lg:px-6 py-4 flex items-center justify-between border-b border-gray-100">
      {/* Mobile Menu Button + Logo */}
      <div className="flex items-center gap-3">
        {/* Hamburger Menu - Only visible on mobile */}
        <button 
          onClick={onMenuToggle}
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">Dx</span>
          </div>
          <span className="text-lg font-semibold text-gray-900 hidden sm:block">Dexignlab</span>
        </div>
      </div>

      {/* Search Bar - Hidden on small screens */}
      <div className="hidden md:flex flex-1 max-w-md mx-8">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="search"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-2 lg:gap-4">
        {/* Search Icon for Mobile */}
        <button className="md:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
          <Search className="h-5 w-5" />
        </button>

        {/* Add Button - Hidden on small screens */}
        <button className="hidden lg:flex items-center gap-2 px-3 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
          <span className="text-sm">+</span>
          <span className="text-sm font-medium">F</span>
        </button>

        {/* Calendar Icon - Hidden on small screens */}
        <button className="hidden sm:block p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
          <Calendar className="h-5 w-5" />
        </button>

        {/* Notification Bell */}
        <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-3 cursor-pointer">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/avatar.jpg" alt="Brooklyn Simmons" />
                <AvatarFallback className="bg-orange-500 text-white text-sm">BS</AvatarFallback>
              </Avatar>
              <div className="text-right hidden lg:block">
                <p className="text-sm font-medium text-gray-900">Brooklyn Simmons</p>
                <p className="text-xs text-gray-500">UI/UX Designer</p>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
