"use client";

import { useState } from "react";
import BarraNavegacao from "./navBar";
import BarraLateral from "./sidebar";


export default function WrapperLayout({ filhos }: { filhos: React.ReactNode }) {
  const [barraLateralAberta, setBarraLateralAberta] = useState(false);

  const alternarBarraLateral = () => {
    setBarraLateralAberta(!barraLateralAberta);
  };

  const fecharBarraLateral = () => {
    setBarraLateralAberta(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Barra de Navegação - Mobile fixo, Desktop flutuante */}
      <BarraNavegacao aoAlternarMenu={alternarBarraLateral} />
      
      <div className="flex flex-1">
        {/* Barra Lateral - Oculta no desktop, visível no mobile quando aberta */}
        <BarraLateral estaAberta={barraLateralAberta} aoFechar={fecharBarraLateral} />
        
        {/* Conteúdo Principal */}
        <main className="flex-1 p-3 sm:p-4 lg:p-6 md:ml-64">
          <div>
            {filhos}
          </div>
        </main>
      </div>
    </div>
  );
}