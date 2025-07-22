/* eslint-disable */
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import NavbarLogoCenter from "@/components/navBarLogoCenter";

export default function PasswordForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const tipo = searchParams.get("tipo"); // "pessoa" ou "empresa"

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center"
            style={{ height: "100vh", background: "#f4f3f5" }}
        >
            <div className="absolute w-full top-0"><NavbarLogoCenter /></div>

            <div className="absolute top-25 left-4 z-20">
                <Button
                    variant="outline"
                    className="px-4 py-2 text-sm font-medium cursor-pointer border-[#3D195B] text-[#3D195B] hover:bg-[#3D195B] hover:text-white"
                    onClick={() => {
                        if (tipo === "empresa") {
                            router.push("/cadastro/empresa");
                        } else {
                            router.push("/cadastro/pessoa");
                        }
                    }}
                >
                    ← Voltar
                </Button>
            </div>

            <Card className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-[600px] flex flex-col justify-center">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl" style={{ color: "#3D195B" }}>
                        Preencha a sua senha
                    </CardTitle>
                </CardHeader>
                
                <div className="w-full p-0 sm:p-6 space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="password">Senha (8 caracteres no mínimo)</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Informe sua senha"
                                    className="bg-background pr-10"
                                />
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2">☺</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirmar senha</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirme sua senha"
                                className="bg-background"
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Eu aceito os termos de serviço & políticas de privacidade
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button className="w-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-[#3D195B] hover:bg-[#2a1240] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3D195B]">
                            Próximo &gt;
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
export const dynamic = "force-dynamic";
