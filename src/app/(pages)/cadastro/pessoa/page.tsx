
"use client";


import NavbarLogoCenter from "@/components/navBarLogoCenter";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Link from "next/link";
import { Label } from "@/components/ui/label";

export default function PersonalDataForm() {
    return (  
        <div
            className="min-h-screen flex flex-col items-center justify-center"
            style={{ height: "100vh", background: "#f4f3f5" }}
        >
            <div className="absolute w-full top-0"><NavbarLogoCenter /></div>

            <div className="absolute top-25 left-4 z-20">
                <Link href="/cadastro" passHref>
                    <Button
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium cursor-pointer border-[#3D195B] text-[#3D195B] hover:bg-[#3D195B] hover:text-white"
                    >
                        ← Voltar
                    </Button>
                </Link>
            </div>
            <Card className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-[600px] flex flex-col justify-center">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl" style={{ color: "#3D195B" }}>
                        Preencha seus dados
                    </CardTitle>
                </CardHeader>
                <div className="w-full p-0 sm:p-6 space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nome</Label>
                            <Input
                                id="name"
                                className="bg-background"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                id="email"
                                type="email"
                                className="bg-background"
                            />
                            <p className="text-sm text-destructive">E-mail já está em uso</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Número de telefone</Label>
                            <Input
                                id="phone"
                                type="tel"
                                className="bg-background"
                            />
                            <p className="text-sm text-destructive">Número de telefone não é válido</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="timezone">Fuso horário</Label>
                            <Select defaultValue="-3">
                                <SelectTrigger className="w-full bg-background">
                                    <SelectValue placeholder="Selecione um fuso horário" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="-3">(GMT-03:00) Buenos Aires</SelectItem>
                                    <SelectItem value="-4">(GMT-04:00) Manaus</SelectItem>
                                    <SelectItem value="-5">(GMT-05:00) Rio Branco</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Link href="/cadastro/senha?tipo=pessoa" passHref>
                            <Button className="w-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-[#3D195B] hover:bg-[#2a1240] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3D195B]">
                                Próximo &gt;
                            </Button>
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    );
}