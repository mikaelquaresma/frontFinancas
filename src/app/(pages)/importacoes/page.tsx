"use client";

import { ThemeProvider } from "@/stores/ThemeContext";
import WrapperLayout from "@/components/layout";
import ImportacoesContent from "@/features/imports/components/ImportacoesContent";

export default function ImportacoesPage() {
    return (
        <ThemeProvider>
            <WrapperLayout filhos={<ImportacoesContent />} />
        </ThemeProvider>
    );
}