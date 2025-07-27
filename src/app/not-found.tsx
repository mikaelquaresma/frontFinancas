"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
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
                    Ops! Algo deu errado. A página que você está procurando não existe ou ainda está em desenvolvimento.
                </p>
                
                <Link href="/dashboard">
                    <Button className="bg-primary-custom hover:bg-primary-custom text-white flex items-center gap-2 mx-auto">
                        <Home className="w-4 h-4" />
                        Voltar ao Início
                    </Button>
                </Link>
            </Card>
        </div>
    );
}