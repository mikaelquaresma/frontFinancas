"use client";

import * as React from "react";
import { Search, Bell, Menu, Sun, Moon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "@/stores/ThemeContext";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";

interface PropsBarraNavegacao {
  aoAlternarMenu?: () => void;
}

export default function BarraNavegacao({ aoAlternarMenu }: PropsBarraNavegacao) {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const handleSair = () => {
    router.push('/');
  };

  const handleConfiguracoes = () => {
    router.push('/configuracoes');
  };

  const getPageTitle = () => {
    switch (pathname) {
      case '/dashboard':
        return t('nav.inicio');
      case '/transferencias':
        return t('nav.transferencias');
      case '/relatorios':
        return t('nav.relatorios');
      case '/configuracoes':
        return t('nav.configuracoes');
      case '/importacoes':
        return t('importacoes.titulo');
      default:
        return t('nav.inicio');
    }
  };

  const getPageSubtitle = () => {
    switch (pathname) {
      case '/dashboard':
        return t('nav.inicio.subtitulo');
      case '/transferencias':
        return t('nav.transferencias.subtitulo');
      case '/relatorios':
        return t('nav.relatorios.subtitulo');
      case '/configuracoes':
        return t('nav.configuracoes.subtitulo');
      case '/importacoes':
        return 'Gerencie suas importações de dados de forma simples e eficiente';
      default:
        return null;
    }
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden">
        {/* Top Header */}
        <nav className={`w-full px-4 py-3 flex items-center justify-between ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white border-b border-gray-200'
        }`}>
          {/* Menu Button */}
          <button 
            onClick={aoAlternarMenu}
            className={`p-2 rounded-lg transition-colors ${
              theme === 'dark' 
                ? 'text-gray-400 hover:bg-gray-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Menu className="h-6 w-6" />
          </button>
          
          {/* Logo Central */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-custom rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className={`text-lg font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>SobraMais</span>
          </div>

          {/* User Avatar */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/avatar.jpg" alt="Marvin McKinney" />
                  <AvatarFallback className="bg-primary-custom text-white text-sm">MM</AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className={`w-48 ${
              theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}>
              <DropdownMenuItem className={`cursor-pointer ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`} onClick={handleConfiguracoes}>
                Configurações
              </DropdownMenuItem>
              <DropdownMenuItem className={`cursor-pointer ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`} onClick={handleSair}>
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Search Bar Below Header */}
        <div className={`w-full px-4 pb-4 ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}>
          <div className="relative w-full">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="search"
              placeholder="Pesquisar aqui"
              className={`w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-custom focus:border-transparent ${
                theme === 'dark' 
                  ? 'bg-gray-800 border border-gray-700 text-white placeholder-gray-400' 
                  : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block md:ml-64 px-6 md:px-3 lg:px-6 pt-6">
        <div className={`backdrop-blur-md rounded-2xl px-4 sm:px-6 py-3 shadow-xl ${
          theme === 'dark' 
            ? 'bg-gray-800/90 border border-gray-700' 
            : 'bg-white/90 border border-gray-200'
        }`}>
            <div className="flex items-center justify-between w-full">
              {/* Page Title */}
              <div className="flex-1 flex flex-col items-start min-w-0">
                <h1 className={`text-lg md:text-xl font-semibold truncate ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{getPageTitle()}</h1>
                {getPageSubtitle() && (
                  <p className={`text-xs md:text-sm truncate ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>{getPageSubtitle()}</p>
                )}
              </div>

              {/* Search Bar - Center */}
              <div className="relative flex-1 max-w-xs md:max-w-sm lg:max-w-md mx-3 md:mx-4 lg:mx-8 flex items-center justify-center">
                <div className="relative w-full">
                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <input
                    type="search"
                    placeholder="Pesquisar aqui"
                    className={`w-full pl-10 pr-4 py-2 text-sm md:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-custom focus:border-transparent ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>
              </div>

              {/* Right Side Icons */}
              <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end min-w-0">
                {/* Theme Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark' 
                      ? 'text-gray-400 hover:bg-gray-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4 md:h-5 md:w-5" /> : <Moon className="h-4 w-4 md:h-5 md:w-5" />}
                </Button>

                {/* Notification Bell */}
                <button className={`p-2 rounded-lg transition-colors relative ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:bg-gray-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}>
                  <Bell className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>

                {/* User Profile */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-2 md:gap-3 cursor-pointer min-w-0">
                      <Avatar className="w-6 h-6 md:w-8 md:h-8">
                        <AvatarImage src="/avatar.jpg" alt="Marvin McKinney" />
                        <AvatarFallback className="bg-primary-custom text-white text-xs md:text-sm">MM</AvatarFallback>
                      </Avatar>
                      <div className="text-right hidden lg:block min-w-0">
                        <p className={`text-sm font-medium truncate ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>Marvin McKinney</p>
                        <p className={`text-xs truncate ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>Accountant</p>
                      </div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className={`w-48 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 border-gray-700' 
                      : 'bg-white border-gray-200'
                  }`}>
                    <DropdownMenuItem className={`cursor-pointer ${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`} onClick={handleConfiguracoes}>
                      Configurações
                    </DropdownMenuItem>
                    <DropdownMenuItem className={`cursor-pointer ${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`} onClick={handleSair}>
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
