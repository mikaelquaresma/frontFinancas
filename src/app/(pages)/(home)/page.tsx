"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { 
    TrendingUp, 
    Shield, 
    BarChart3,
    ArrowRight,
    CheckCircle,
    Star,
    CreditCard,
    PieChart,
    Smartphone,
    Globe,
    Users,
    Zap,
    Play
} from "lucide-react";

export default function Home() {
    
    return (
        <div className="min-h-screen bg-white">
            {/* Header/Navbar */}
            <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">SobraMais</span>
                        </div>
                        
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#recursos" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Recursos</a>
                            <a href="#precos" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Preços</a>
                            <a href="#sobre" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Sobre</a>
                            <a href="#contato" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Contato</a>
                        </nav>

                        <div className="flex items-center space-x-3">
                            <Link href="/login">
                                <Button variant="ghost" className="text-gray-700 hover:text-gray-900 font-medium">
                                    Entrar
                                </Button>
                            </Link>
                            <Link href="/cadastro">
                                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6 shadow-lg">
                                    Começar Grátis
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 pt-20 pb-32 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-700"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="max-w-2xl">
                            {/* Badge */}
                            <div className="inline-flex items-center bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-4 py-2 mb-8">
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-2"></div>
                                <span className="text-purple-700 text-sm font-semibold">✨ Controle Financeiro Inteligente</span>
                            </div>
                            
                            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                                    Transforme
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    Suas Finanças
                                </span>
                            </h1>
                            
                            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                                A plataforma completa para gerenciar suas finanças pessoais e empresariais com inteligência artificial e segurança bancária.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Link href="/cadastro">
                                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all">
                                        Começar Gratuitamente
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold group">
                                    <Play className="mr-2 h-5 w-5" />
                                    Ver Demo
                                </Button>
                            </div>

                            <div className="flex items-center space-x-8 text-sm text-gray-500">
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                    <span className="font-medium">30 dias grátis</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                    <span className="font-medium">Sem cartão de crédito</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                    <span className="font-medium">Cancele quando quiser</span>
                                </div>
                            </div>
                        </div>

                        {/* Dashboard Preview */}
                        <div className="relative">
                            <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                                <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8 hover:shadow-3xl transition-shadow">
                                    {/* Window Controls */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        </div>
                                        <div className="text-xs text-gray-400 font-mono">sobramais.com</div>
                                    </div>
                                    
                                    {/* Dashboard Content */}
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Saldo Total</p>
                                                <p className="text-3xl font-bold text-gray-900">R$ 47.253,80</p>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                ))}
                                                <span className="text-sm text-gray-600 ml-2">4.9</span>
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl">
                                                <div className="flex items-center justify-between mb-2">
                                                    <TrendingUp className="w-6 h-6 text-green-600" />
                                                    <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">+18%</span>
                                                </div>
                                                <p className="text-2xl font-bold text-green-700">R$ 8.4k</p>
                                                <p className="text-xs text-green-600">Receita</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-2xl">
                                                <div className="flex items-center justify-between mb-2">
                                                    <PieChart className="w-6 h-6 text-blue-600" />
                                                    <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded-full">-5%</span>
                                                </div>
                                                <p className="text-2xl font-bold text-blue-700">R$ 3.2k</p>
                                                <p className="text-xs text-blue-600">Gastos</p>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-gray-600">Meta mensal</span>
                                                <span className="text-sm font-semibold text-gray-900">78%</span>
                                            </div>
                                            <div className="w-full bg-gray-100 rounded-full h-3">
                                                <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-1000" style={{width: '78%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            
                            {/* Floating Elements */}
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl shadow-xl flex items-center justify-center transform rotate-12 hover:rotate-6 transition-transform">
                                <CreditCard className="w-10 h-10 text-white" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl shadow-xl flex items-center justify-center transform -rotate-12 hover:-rotate-6 transition-transform">
                                <BarChart3 className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="recursos" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Por que escolher o
                            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">SobraMais?</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Descubra como nossa plataforma pode revolucionar sua gestão financeira com tecnologia de ponta e segurança máxima.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        <Card className="group p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Segurança Máxima</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Protegemos seus dados com criptografia de nível bancário, autenticação biométrica e monitoramento 24/7 contra fraudes.
                            </p>
                        </Card>

                        <Card className="group p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <BarChart3 className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Análise Inteligente</h3>
                            <p className="text-gray-600 leading-relaxed">
                                IA avançada que analisa seus gastos, prevê tendências e oferece insights personalizados para otimizar suas finanças.
                            </p>
                        </Card>

                        <Card className="group p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <TrendingUp className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Crescimento Real</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Estratégias de investimento personalizadas e metas inteligentes que ajudam você a multiplicar seu patrimônio.
                            </p>
                        </Card>
                    </div>

                    {/* Additional Features */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                        <div className="text-center group">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Smartphone className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">App Mobile</h4>
                            <p className="text-sm text-gray-600">Acesse de qualquer lugar</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Globe className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Multi-moeda</h4>
                            <p className="text-sm text-gray-600">Suporte internacional</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Users className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Gestão Familiar</h4>
                            <p className="text-sm text-gray-600">Para toda a família</p>
                        </div>
                        <div className="text-center group">
                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Automação</h4>
                            <p className="text-sm text-gray-600">Inteligência artificial</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Números que
                            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Impressionam</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="group">
                            <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">250K+</div>
                            <div className="text-gray-600 font-medium">Usuários Ativos</div>
                        </div>
                        <div className="group">
                            <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">R$ 2.5B</div>
                            <div className="text-gray-600 font-medium">Gerenciado</div>
                        </div>
                        <div className="group">
                            <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">4.9★</div>
                            <div className="text-gray-600 font-medium">Avaliação</div>
                        </div>
                        <div className="group">
                            <div className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">99.9%</div>
                            <div className="text-gray-600 font-medium">Uptime</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
                </div>
                
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
                        Pronto para
                        <span className="block">Transformar</span>
                        <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Suas Finanças?</span>
                    </h2>
                    <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Junte-se a milhares de brasileiros que já descobriram o poder de ter controle total sobre seu dinheiro.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/cadastro">
                            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all">
                                Começar Gratuitamente
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-4 text-lg font-semibold">
                                Já tenho conta
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-5 gap-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">S</span>
                                </div>
                                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">SobraMais</span>
                            </div>
                            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                                A plataforma financeira que transforma sua relação com o dinheiro através de tecnologia inteligente e segurança bancária.
                            </p>
                            <div className="flex space-x-4">
                                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                                    <span className="text-sm font-bold">f</span>
                                </div>
                                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                                    <span className="text-sm font-bold">in</span>
                                </div>
                                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                                    <span className="text-sm font-bold">@</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold mb-6 text-lg">Produto</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Integrações</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold mb-6 text-lg">Empresa</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold mb-6 text-lg">Suporte</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400">&copy; 2025 SobraMais. Todos os direitos reservados.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0 text-gray-400 text-sm">
                            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}