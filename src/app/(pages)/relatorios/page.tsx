"use client";

import { ThemeProvider } from "@/compartilhado/contextos/ThemeContext";
import WrapperLayout from "@/adaptadores/primarios/apresentacao/componentes/layout";
import RelatoriosContent from "@/adaptadores/primarios/apresentacao/componentes/RelatoriosContent";

export default function RelatoriosPage() {
    return (
        <ThemeProvider>
            <WrapperLayout filhos={<RelatoriosContent />} />
        </ThemeProvider>
    );
}