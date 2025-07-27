"use client";

import WrapperLayout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { ThemeProvider } from "@/stores/ThemeContext";

export default function Custom404() {
    return (
        <ThemeProvider>
            <WrapperLayout filhos={
                <>
                    <style jsx>{`
                      .error-bg {
                        background-color: #111827; /* gray-900 */
                      }
                      @media (min-width: 768px) {
                        .error-bg {
                          background-color: lab(5 0.05 -4.54);
                        }
                      }
                    `}</style>
                    <div className="min-h-screen text-white p-3 sm:p-4 lg:p-6 error-bg flex items-center justify-center">
                        <Card className="bg-gray-800 border-gray-700 p-8 max-w-md w-full text-center">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center">
                                    <AlertTriangle className="w-10 h-10 text-red-500" />
                                </div>
                            </div>
                            
                            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                            
                            <h2 className="text-xl font-semibold text-white mb-2">
                                Página não encontrada
                            </h2>
                            
                            <p className="text-gray-400 mb-8">
                                Ops! Algo deu errado. Esta funcionalidade ainda está em desenvolvimento e estará disponível em breve.
                            </p>
                            
                            <Link href="/dashboard">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 mx-auto">
                                    <Home className="w-4 h-4" />
                                    Voltar ao Início
                                </Button>
                            </Link>
                        </Card>
                    </div>
                </>
            } />
        </ThemeProvider>
    );
}