"use client";

import { ThemeProvider } from "@/compartilhado/contextos/ThemeContext";
import WrapperLayout from "@/adaptadores/primarios/apresentacao/componentes/layout";
import ConfiguracoesContent from "@/adaptadores/primarios/apresentacao/componentes/ConfiguracoesContent";

export default function ConfiguracoesPage() {
    return (
        <ThemeProvider>
            <WrapperLayout filhos={<ConfiguracoesContent />} />
        </ThemeProvider>
    );
}