"use client";

import { ThemeProvider } from "@/stores/ThemeContext";
import WrapperLayout from "@/components/layout";
import TransferenciasContent from "@/features/transfers/components/TransferenciasContent";

export default function TransferenciasPage() {
    return (
        <ThemeProvider>
            <WrapperLayout filhos={<TransferenciasContent />} />
        </ThemeProvider>
    );
}