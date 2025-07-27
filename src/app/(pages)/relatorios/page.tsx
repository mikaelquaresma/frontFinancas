"use client";

import { ThemeProvider } from "@/stores/ThemeContext";
import WrapperLayout from "@/components/layout";
import RelatoriosContent from "@/features/reports/components/RelatoriosContent";

export default function RelatoriosPage() {
    return (
        <ThemeProvider>
            <WrapperLayout filhos={<RelatoriosContent />} />
        </ThemeProvider>
    );
}