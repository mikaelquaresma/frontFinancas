"use client";

import * as React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white px-4 py-3 flex items-center justify-between">
      {/* Logo / Nome do Site */}
      <div className="text-xl font-bold text-gray-900 select-none">
        Sobra mais
      </div>

      {/* Barra de Pesquisa */}
      <div className="flex-1 max-w-lg mx-4">
        <Input
          type="search"
          placeholder="Pesquisar..."
          className="w-full"
          aria-label="Pesquisar no site"
        />
      </div>


      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src="/avatar.jpg" alt="Usuário" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem>Perfil</DropdownMenuItem>
          <DropdownMenuItem>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
