/* eslint-disable */
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import NavbarLogoCenter from "@/components/navBarLogoCenter";

export default function Login() {
  return (
    <div className="min-h-screen flex" style={{ background: "#f4f3f5" }}>
      <div className="absolute w-full top-0 z-50"><NavbarLogoCenter /></div>
      <div className="w-full flex items-center justify-center bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-[600px] mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
          <div className="text-center lg:hidden">
            <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: "#3D195B" }}>
              Login ao painel
            </h1>
          </div>
          <div className="hidden lg:block text-center">
            <h1 className="text-2xl sm:text-3xl font-bold" style={{ color: "#3D195B" }}>
              Login ao painel
            </h1>
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
                <a href="#" className="font-medium text-[#3D195B] hover:text-[#2a1240]">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-[#3D195B] hover:bg-[#2a1240] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3D195B]"
              >
                Login
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Já tem uma conta?{" "}
            <a href="/cadastro" className="font-medium text-[#3D195B] hover:text-[#2a1240]">
              Criar uma nova conta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}