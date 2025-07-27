"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import { 
    TrendingUp, 
    Shield, 
    BarChart3,
    ArrowRight,
    CheckCircle
} from "lucide-react";

export default function Home() {
    const { t } = useTranslation();
    
    return (
        <div className="min-h-screen bg-white">
            {/* Header/Navbar */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-primary-custom rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">S</span>
                            </div>
                            <span className="ml-2 text-xl font-bold text-gray-900">SobraMais</span>
                        </div>
                        
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#" className="text-gray-600 hover:text-gray-900">Produtos</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">Recursos</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">Preços</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">Sobre</a>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <Link href="/login">
                                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                                    Login
                                </Button>
                            </Link>
                            <Link href="/cadastro">
                                <Button className="bg-primary-custom hover:bg-primary-custom text-white">
                                    Começar Grátis
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center bg-blue-600/10 border border-blue-600/20 rounded-full px-4 py-2 mb-6">
                                <span className="text-blue-400 text-sm font-medium">{t('inicio.hero.selo')}</span>
                            </div>
                            
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                                {t('inicio.hero.titulo')}
                                <span className="block text-blue-400">{t('inicio.hero.sobra')}</span>
                            </h1>
                            
                            <p className="text-xl text-gray-300 mb-8 max-w-lg">
                                {t('inicio.hero.descricao')}
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link href="/cadastro">
                                    <Button size="lg" className="bg-primary-custom hover:bg-primary-custom text-white px-8">
                                        {t('inicio.hero.botao')}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Button size="lg" className="bg-gray-800 text-white hover:bg-gray-700">
                                    Ver Demo
                                </Button>
                            </div>

                            <div className="flex items-center space-x-6 text-sm text-gray-400">
                                <div className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                                    Grátis por 30 dias
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                                    Sem cartão de crédito
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative z-10">
                                <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl p-6 rounded-2xl">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        </div>
                                        <div className="flex items-center space-x-2 text-primary-custom">
                                            <div className="w-2 h-2 bg-primary-custom rounded-full"></div>
                                            <span className="text-sm font-medium">4.9</span>
                                            <span className="text-xs text-gray-500">ROI</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Saldo Total</span>
                                            <span className="font-bold text-gray-900">R$ 24.847,50</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-primary-custom h-2 rounded-full" style={{width: '75%'}}></div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 pt-4">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-green-600">+12%</div>
                                                <div className="text-xs text-gray-500">Este mês</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-2xl font-bold text-primary-custom">R$ 3.2k</div>
                                                <div className="text-xs text-gray-500">Economia</div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            {t('inicio.recursos.titulo')}
                            <span className="block text-primary-custom">{t('inicio.recursos.subtitulo')}</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <Shield className="h-6 w-6 text-primary-custom" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('inicio.recursos.seguranca.titulo')}</h3>
                            <p className="text-gray-600">
                                {t('inicio.recursos.seguranca.descricao')}
                            </p>
                        </Card>

                        <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <BarChart3 className="h-6 w-6 text-primary-custom" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('inicio.recursos.analise.titulo')}</h3>
                            <p className="text-gray-600">
                                {t('inicio.recursos.analise.descricao')}
                            </p>
                        </Card>

                        <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                                <TrendingUp className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('inicio.recursos.crescimento.titulo')}</h3>
                            <p className="text-gray-600">
                                {t('inicio.recursos.crescimento.descricao')}
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary-custom to-blue-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        LET&apos;S START SECURING
                        <span className="block">YOUR MONEY</span>
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Junte-se a milhares de pessoas que já transformaram sua vida financeira com o SobraMais.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/cadastro">
                            <Button size="lg" className="bg-white text-primary-custom hover:bg-gray-100 px-8">
                                Começar Gratuitamente
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                                Já tenho uma conta
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            GET TO KNOW MORE
                            <span className="block text-primary-custom">ABOUT MONEYHUB</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-gray-900 mb-2">25M+</div>
                            <div className="text-gray-600">Usuários Ativos</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900 mb-2">768+</div>
                            <div className="text-gray-600">Empresas Parceiras</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900 mb-2">5.0★</div>
                            <div className="text-gray-600">Avaliação dos Usuários</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-gray-900 mb-2">99.8%</div>
                            <div className="text-gray-600">Uptime Garantido</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-primary-custom rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">S</span>
                                </div>
                                <span className="ml-2 text-xl font-bold">SobraMais</span>
                            </div>
                            <p className="text-gray-400 mb-4">
                                A plataforma financeira que transforma sua relação com o dinheiro.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold mb-4">Produto</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Recursos</a></li>
                                <li><a href="#" className="hover:text-white">Preços</a></li>
                                <li><a href="#" className="hover:text-white">API</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold mb-4">Empresa</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Sobre</a></li>
                                <li><a href="#" className="hover:text-white">Carreiras</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold mb-4">Suporte</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Help Center</a></li>
                                <li><a href="#" className="hover:text-white">Contato</a></li>
                                <li><a href="#" className="hover:text-white">Status</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 SobraMais. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}