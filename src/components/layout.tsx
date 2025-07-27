"use client";

import { useState } from "react";
import BarraNavegacao from "./navBar";
import BarraLateral from "./sidebar";
import { useTheme } from "@/stores/ThemeContext";


export default function WrapperLayout({ filhos }: { filhos: React.ReactNode }) {
  const [barraLateralAberta, setBarraLateralAberta] = useState(false);
  const { theme } = useTheme();

  const alternarBarraLateral = () => {
    setBarraLateralAberta(!barraLateralAberta);
  };

  const fecharBarraLateral = () => {
    setBarraLateralAberta(false);
  };

  return (
    <div className={`flex flex-col min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-gray-900' : ''
    }`} style={theme === 'light' ? { backgroundColor: 'lab(95 -1.17 -3.31)' } : {}}>
      {/* Barra de Navegação - Mobile fixo, Desktop flutuante */}
      <BarraNavegacao aoAlternarMenu={alternarBarraLateral} />
      
      <div className="flex flex-1">
        {/* Barra Lateral - Oculta no desktop, visível no mobile quando aberta */}
        <BarraLateral estaAberta={barraLateralAberta} aoFechar={fecharBarraLateral} />
        
        {/* Conteúdo Principal */}
        <main className={`flex-1 p-3 sm:p-4 lg:p-6 md:ml-64 transition-colors ${
          theme === 'dark' ? 'bg-gray-900' : ''
        }`} style={theme === 'light' ? { backgroundColor: 'lab(95 -1.17 -3.31)' } : {}}>
          <div>
            {filhos}
          </div>
        </main>
      </div>
    </div>
  );
}