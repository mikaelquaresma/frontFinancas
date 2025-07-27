"use client";

import { ThemeProvider } from "@/stores/ThemeContext";
import WrapperLayout from "@/components/layout";
import ConfiguracoesContent from "@/features/settings/components/ConfiguracoesContent";

export default function ConfiguracoesPage() {
    return (
        <ThemeProvider>
            <WrapperLayout filhos={<ConfiguracoesContent />} />
        </ThemeProvider>
    );
}