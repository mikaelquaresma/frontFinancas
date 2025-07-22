"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavbarLogoCenter from "@/components/navBarLogoCenter";


const CadastroCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
        checkDesktop();
        window.addEventListener("resize", checkDesktop);
        return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    const cardStyle: React.CSSProperties = {
        width: "100%",
        maxWidth: "600px",
        minWidth: "320px",
        margin: "0 auto",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    };

    return <div style={cardStyle}>{children}</div>;
};

export default function CadastroPage() {
    const [selectedAccountType, setSelectedAccountType] = useState<string | null>(null);
    const [touched, setTouched] = useState(false);

    const handleNext = () => {
        setTouched(true);
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-gray-50"
            style={{ height: "100vh" }}
        >
            <div className="absolute w-full top-0"><NavbarLogoCenter /></div>

            <div className="absolute top-25 left-4 z-20">
                <Link href="/login" passHref>
                    <Button
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium cursor-pointer"
                    >
                        ← Login
                    </Button>
                </Link>
            </div>
            {/* Área de cadastro centralizada */}
            <CadastroCard>
                <Card className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full h-full flex flex-col justify-center">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">Crie sua conta</CardTitle>
                        <p className="text-sm text-muted-foreground mt-2">Para começar, escolha o tipo da sua conta</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <button
                                onClick={() => { setSelectedAccountType("pessoa"); setTouched(false); }}
                                className={`w-full p-4 border rounded-lg text-left transition-colors ${selectedAccountType === "pessoa"
                                        ? "border-indigo-600 bg-indigo-50"
                                        : "hover:bg-accent/50"
                                    }`}
                            >
                                <h3 className="font-medium">Pessoal</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Para quem deseja gerenciar as finanças pessoais ou familiar.
                                </p>
                            </button>

                            <button
                                onClick={() => { setSelectedAccountType("empresa"); setTouched(false); }}
                                className={`w-full p-4 border rounded-lg text-left transition-colors ${selectedAccountType === "empresa"
                                        ? "border-indigo-600 bg-indigo-50"
                                        : "hover:bg-accent/50"
                                    }`}
                            >
                                <h3 className="font-medium">Empresarial</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Para quem deseja gerenciar as finanças da empresa.
                                </p>
                            </button>
                        </div>
                        {touched && (!selectedAccountType || (selectedAccountType !== "pessoa" && selectedAccountType !== "empresa")) && (
                            <div className="text-red-600 text-sm pt-2">Selecione uma opção para continuar.</div>
                        )}
                        <div className="flex justify-between items-center pt-4">
                            <Link
                                href="/login"
                                className="text-sm text-indigo-600 hover:underline"
                            >
                                Já tem uma conta? Faça login
                            </Link>
                            <Button
                                disabled={selectedAccountType !== "pessoa" && selectedAccountType !== "empresa"}
                                className="w-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                asChild={!selectedAccountType || (selectedAccountType !== "pessoa" && selectedAccountType !== "empresa")}
                                onClick={() => {
                                    if (!selectedAccountType || (selectedAccountType !== "pessoa" && selectedAccountType !== "empresa")) {
                                        handleNext();
                                    }
                                }}
                            >
                                <Link href={selectedAccountType ? `/cadastro/${selectedAccountType}` : "#"}>Próximo &gt;</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </CadastroCard>
        </div>
    );
}