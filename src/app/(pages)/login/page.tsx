import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"; // alterado para o checkbox correto
import { Label } from "@/components/ui/label";
import Link from "next/link";
import NavbarLogoCenter from "@/components/navBarLogoCenter";

export default function Login() {
  return (
    <div className="min-h-screen flex">
      <div className="absolute w-full top-0 z-50"><NavbarLogoCenter /></div>

      <div
        className="hidden lg:block lg:w-1/2 relative overflow-hidden group"
      >
        <div
          className="absolute inset-0 transition-transform duration-1000 ease-in-out will-change-transform group-hover:scale-110 z-0"
          style={{
            backgroundImage: 'url(https://img.freepik.com/vetores-gratis/fundo-abstrato-da-malha-do-vetor-pontos-cosmicamente-conectados-e-poligonos-que-voam-no-espaco-restos-voadores-cartao-futurista-de-estilo-tecnologico-linhas-pontos-circulos-e-avioes-design-futurista_1217-713.jpg?t=st=1753141169~exp=1753144769~hmac=3ac07ba5a3146feedf2f4a3914cb9804a9e8ab89ad095c4f30db027e2ec6b665&w=740)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay e texto, sem zoom */}
        <div className="absolute inset-0 bg-neutral-950/50 flex items-center justify-center p-12 z-10 pointer-events-none">
          <div className="text-white text-center select-none">
            <h2 className="text-4xl font-bold mb-4">Sobra Mais</h2>
            <p className="text-xl">
              Controle suas finanças de forma simples, segura e eficiente. Gerencie receitas, despesas e tenha uma visão completa do seu dinheiro em um só lugar.
            </p>
          </div>
        </div>
      </div>

      {/* Área de login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-[600px] mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <div className="text-center lg:hidden">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Login ao painel</h1>
          </div>
          <div className="hidden lg:block text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Login ao painel</h1>
          </div>

          <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <div>
                <Label className="block text-sm font-medium text-gray-700">
                  Email ou telefone
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base"
                />
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-700">
                  Sua Senha
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" name="remember" />
                <Label className="text-xs sm:text-sm text-gray-900">
                  Remember me
                </Label>
              </div>

              <div className="text-xs sm:text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Já tem uma conta?{" "}
            <a href="/cadastro" className="font-medium text-indigo-600 hover:text-indigo-700">
              Criar uma nova conta
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}