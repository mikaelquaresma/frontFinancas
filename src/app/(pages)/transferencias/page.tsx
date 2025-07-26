"use client";

import { ThemeProvider } from "@/compartilhado/contextos/ThemeContext";
import WrapperLayout from "@/adaptadores/primarios/apresentacao/componentes/layout";
import TransferenciasContent from "@/adaptadores/primarios/apresentacao/componentes/TransferenciasContent";

export default function TransferenciasPage() {
    return (
        <ThemeProvider>
            <WrapperLayout filhos={<TransferenciasContent />} />
        </ThemeProvider>
    );
}