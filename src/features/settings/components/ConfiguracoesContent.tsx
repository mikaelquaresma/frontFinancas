"use client";

import { useState } from "react";
import { useTheme } from "@/stores/ThemeContext";
import { useTranslation } from "@/hooks/useTranslation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { 
    User, 
    Palette, 
    CreditCard, 
    Shield, 
    DollarSign, 
    Plug, 
    Code,
    Menu,
    X
} from "lucide-react";

export default function ConfiguracoesContent() {
    const { theme, primaryColor, setPrimaryColor, language, setLanguage } = useTheme();
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState('Perfil');
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const menuItems = [
        { icon: <User size={20} />, label: t("settings.profile"), key: "Perfil" },
        { icon: <Palette size={20} />, label: t("settings.appearance"), key: "Aparencia" },
        { icon: <CreditCard size={20} />, label: t("settings.account"), key: "Conta" },
        { icon: <Shield size={20} />, label: t("settings.privacy"), key: "Privacidade" },
        { icon: <DollarSign size={20} />, label: t("settings.billing"), key: "Cobranca" },
        { icon: <Plug size={20} />, label: t("settings.connectors"), key: "Conectores" },
        { icon: <Code size={20} />, label: "Claude Code", key: "ClaudeCode" },
    ];

    const renderContent = () => {
        switch (activeSection) {
            case 'Perfil':
                return (
                    <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                            <Avatar className="w-16 h-16 sm:w-20 sm:h-20">
                                <AvatarImage src="/avatar.jpg" alt="Marvin McKinney" />
                                <AvatarFallback className="bg-primary-custom text-white text-lg">MM</AvatarFallback>
                            </Avatar>
                            <div className="text-center sm:text-left">
                                <h3 className={`text-lg font-semibold ${
                                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>Marvin McKinney</h3>
                                <p className={`text-sm ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>marvin@example.com</p>
                                <Button variant="outline" size="sm" className="mt-2">
                                    Alterar foto
                                </Button>
                            </div>
                        </div>
                        
                        <div className="grid gap-4">
                            <div>
                                <Label htmlFor="name" className={`${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}>Nome completo</Label>
                                <Input 
                                    id="name" 
                                    defaultValue="Marvin McKinney" 
                                    className={`mt-1 ${
                                        theme === 'dark' 
                                            ? 'bg-gray-700 border-gray-600 text-white' 
                                            : 'bg-white border-gray-300'
                                    }`} 
                                />
                            </div>
                            <div>
                                <Label htmlFor="email" className={`${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}>Email</Label>
                                <Input 
                                    id="email" 
                                    defaultValue="marvin@example.com" 
                                    className={`mt-1 ${
                                        theme === 'dark' 
                                            ? 'bg-gray-700 border-gray-600 text-white' 
                                            : 'bg-white border-gray-300'
                                    }`} 
                                />
                            </div>
                            <div>
                                <Label htmlFor="phone" className={`${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}>Telefone</Label>
                                <Input 
                                    id="phone" 
                                    defaultValue="+55 11 99999-9999" 
                                    className={`mt-1 ${
                                        theme === 'dark' 
                                            ? 'bg-gray-700 border-gray-600 text-white' 
                                            : 'bg-white border-gray-300'
                                    }`} 
                                />
                            </div>
                        </div>
                        
                        <Button className="w-full sm:w-auto bg-primary-custom hover:bg-primary-custom text-white">
                            Salvar alterações
                        </Button>
                    </div>
                );

            case 'Aparencia':
                return (
                    <div className="space-y-4 sm:space-y-6">
                        <div className={`p-4 sm:p-6 rounded-lg ${
                            theme === 'dark' 
                                ? 'bg-gray-700/50 border border-gray-600' 
                                : 'bg-gray-50 border border-gray-200'
                        }`}>
                            <h3 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>{t("settings.theme")}</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div>
                                    <Label htmlFor="theme" className={`text-sm sm:text-base ${
                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}>{t("settings.darkMode")}</Label>
                                    <p className={`text-xs sm:text-sm mt-1 ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>{t("settings.darkModeDesc")}</p>
                                </div>
                                <input 
                                    type="checkbox" 
                                    id="theme" 
                                    checked={theme === 'dark'} 
                                    className="w-5 h-5 sm:w-4 sm:h-4 shrink-0" 
                                />
                            </div>
                        </div>
                        
                        <div className={`p-4 sm:p-6 rounded-lg ${
                            theme === 'dark' 
                                ? 'bg-gray-700/50 border border-gray-600' 
                                : 'bg-gray-50 border border-gray-200'
                        }`}>
                            <h3 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>{t("settings.primaryColor")}</h3>
                            <div>
                                <Label className={`text-sm sm:text-base ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}>{t("settings.primaryColorDesc")}</Label>
                                <div className="flex flex-wrap gap-3 mt-3">
                                    {[
                                        { name: t('colors.blue'), color: '#0060d1' as const },
                                        { name: t('colors.purple'), color: '#5b1695' as const },
                                        { name: t('colors.pink'), color: '#ae1877' as const },
                                        { name: t('colors.cyan'), color: '#18a3ae' as const },
                                        { name: t('colors.green'), color: '#43ae18' as const },
                                        { name: t('colors.black'), color: '#000' as const }
                                    ].map((colorOption) => (
                                        <button
                                            key={colorOption.name}
                                            onClick={() => setPrimaryColor(colorOption.color)}
                                            className={`group relative w-10 h-10 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                                                primaryColor === colorOption.color 
                                                    ? 'border-white shadow-lg ring-2 ring-offset-2' 
                                                    : theme === 'dark' 
                                                        ? 'border-gray-600 hover:border-gray-500' 
                                                        : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                            style={{ 
                                                backgroundColor: colorOption.color
                                            }}
                                            title={colorOption.name}
                                        >
                                            {primaryColor === colorOption.color && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center">
                                                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colorOption.color }}></div>
                                                    </div>
                                                </div>
                                            )}
                                            <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${
                                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                                {colorOption.name}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                <p className={`text-xs mt-4 ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>A cor selecionada será aplicada em botões, links e elementos de destaque</p>
                            </div>
                        </div>
                        
                        <div className={`p-4 sm:p-6 rounded-lg ${
                            theme === 'dark' 
                                ? 'bg-gray-700/50 border border-gray-600' 
                                : 'bg-gray-50 border border-gray-200'
                        }`}>
                            <h3 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>{t("settings.language")}</h3>
                            <div>
                                <Label className={`text-sm sm:text-base ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}>{t("settings.languageDesc")}</Label>
                                <Select value={language} onValueChange={setLanguage}>
                                    <SelectTrigger className={`w-full mt-2 ${
                                        theme === 'dark' 
                                            ? 'bg-gray-700 border-gray-600 text-white' 
                                            : 'bg-white border-gray-300'
                                    }`}>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className={`${
                                        theme === 'dark' 
                                            ? 'bg-gray-700 border-gray-600' 
                                            : 'bg-white border-gray-200'
                                    }`}>
                                        <SelectItem value="pt-br" className={`${
                                            theme === 'dark' 
                                                ? 'text-white hover:bg-gray-600' 
                                                : 'text-gray-900 hover:bg-gray-100'
                                        }`}>{t("lang.pt-br")}</SelectItem>
                                        <SelectItem value="en" className={`${
                                            theme === 'dark' 
                                                ? 'text-white hover:bg-gray-600' 
                                                : 'text-gray-900 hover:bg-gray-100'
                                        }`}>{t("lang.en")}</SelectItem>
                                        <SelectItem value="es" className={`${
                                            theme === 'dark' 
                                                ? 'text-white hover:bg-gray-600' 
                                                : 'text-gray-900 hover:bg-gray-100'
                                        }`}>{t("lang.es")}</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                );

            case 'Cobranca':
                return (
                    <div className="space-y-6">
                        {/* Plano Pro Card */}
                        <Card className={`p-4 sm:p-6 ${
                            theme === 'dark' 
                                ? 'bg-gray-800 border-gray-700' 
                                : 'bg-white border-gray-200 shadow-sm'
                        }`}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary-custom rounded-lg flex items-center justify-center shrink-0">
                                        <DollarSign className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className={`font-semibold ${
                                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>Plano Pro</h3>
                                        <p className={`text-sm ${
                                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                        }`}>Mensal</p>
                                        <p className={`text-xs leading-relaxed ${
                                            theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                                        }`}>Sua assinatura será renovada automaticamente em 25 de ago. de 2025.</p>
                                    </div>
                                </div>
                                <Button variant="outline" size="sm" className="w-full sm:w-auto shrink-0">
                                    Ajustar plano
                                </Button>
                            </div>
                        </Card>

                        {/* Pagamento Card */}
                        <Card className={`p-4 sm:p-6 ${
                            theme === 'dark' 
                                ? 'bg-gray-800 border-gray-700' 
                                : 'bg-white border-gray-200 shadow-sm'
                        }`}>
                            <h3 className={`font-semibold mb-4 ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>Pagamento</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <CreditCard className={`h-5 w-5 shrink-0 ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`} />
                                    <span className={`${
                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}>Mastercard •••• 0477</span>
                                </div>
                                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                                    Atualizar
                                </Button>
                            </div>
                        </Card>

                        {/* Faturas Card */}
                        <Card className={`p-4 sm:p-6 ${
                            theme === 'dark' 
                                ? 'bg-gray-800 border-gray-700' 
                                : 'bg-white border-gray-200 shadow-sm'
                        }`}>
                            <h3 className={`font-semibold mb-4 ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>Faturas</h3>
                            <div className="space-y-3">
                                {/* Desktop Headers */}
                                <div className="hidden sm:grid grid-cols-4 gap-4 text-sm font-medium">
                                    <span className={`${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>Data</span>
                                    <span className={`${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>Total</span>
                                    <span className={`${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>Status</span>
                                    <span className={`${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>Ações</span>
                                </div>
                                {/* Desktop Row */}
                                <div className="hidden sm:grid grid-cols-4 gap-4 text-sm">
                                    <span className={`${
                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}>25 de jul. de 2025</span>
                                    <span className={`${
                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                    }`}>R$ 110,00</span>
                                    <span className="text-green-500">Paid</span>
                                    <Button variant="outline" size="sm">
                                        Ver
                                    </Button>
                                </div>
                                {/* Mobile Card */}
                                <div className={`sm:hidden p-4 rounded-xl border space-y-3 ${
                                    theme === 'dark' 
                                        ? 'bg-gray-800 border-gray-700' 
                                        : 'bg-white border-gray-200'
                                }`}>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className={`text-sm font-medium ${
                                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                            }`}>25 de jul. de 2025</span>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className={`text-xl font-bold ${
                                                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                                                }`}>R$ 110,00</span>
                                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    Paid
                                                </span>
                                            </div>
                                        </div>
                                        <Button variant="outline" size="sm" className="shrink-0">
                                            Ver
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Cancelamento Card */}
                        <Card className={`p-4 sm:p-6 border-red-200 ${
                            theme === 'dark' 
                                ? 'bg-red-900/20 border-red-800' 
                                : 'bg-red-50'
                        }`}>
                            <h3 className={`font-semibold mb-2 ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>Cancelamento</h3>
                            <p className={`text-sm mb-4 ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}>Cancelar plano</p>
                            <Button variant="destructive" size="sm" className="w-full sm:w-auto">
                                Cancelar
                            </Button>
                        </Card>
                    </div>
                );

            default:
                return (
                    <div className="flex items-center justify-center h-48 sm:h-64">
                        <div className="text-center px-4">
                            <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                            }`}>
                                <Code className={`w-8 h-8 sm:w-10 sm:h-10 ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                }`} />
                            </div>
                            <p className={`text-base sm:text-lg font-medium mb-2 ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>Seção em desenvolvimento</p>
                            <p className={`text-sm ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}>Esta funcionalidade estará disponível em breve</p>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className={`min-h-screen p-3 sm:p-4 lg:p-6 transition-colors ${
            theme === 'dark' 
                ? 'bg-gray-900 text-white' 
                : 'text-gray-900'
        }`} style={theme === 'light' ? { backgroundColor: 'lab(95 -1.17 -3.31)' } : {}}>
            <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
                
                {/* Mobile/Tablet Navigation Header */}
                <div className="lg:hidden">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className={`text-xl font-bold ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>Configurações</h1>
                        
                        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                            <SheetTrigger>
                                <Button 
                                    variant="outline" 
                                    size="sm"
                                    className={`flex items-center gap-2 ${
                                        theme === 'dark' 
                                            ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                                            : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                                    }`}
                                >
                                    <Menu className="h-4 w-4" />
                                    Menu
                                </Button>
                            </SheetTrigger>
                            <SheetContent 
                                side="left" 
                                className={`w-80 ${
                                    theme === 'dark' 
                                        ? 'bg-gray-900 border-gray-700' 
                                        : 'bg-white border-gray-200'
                                }`}
                            >
                                <SheetHeader>
                                    <div className="flex items-center justify-between">
                                        <SheetTitle className={`${
                                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                            Configurações
                                        </SheetTitle>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => setIsSheetOpen(false)}
                                            className="h-6 w-6 p-0"
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </SheetHeader>
                                
                                <nav className="mt-6 space-y-2">
                                    {menuItems.map((item) => (
                                        <button
                                            key={item.key}
                                            onClick={() => {
                                                setActiveSection(item.key);
                                                setIsSheetOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                                                activeSection === item.key
                                                    ? "bg-primary-custom text-white shadow-sm"
                                                    : theme === 'dark' 
                                                      ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                                                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                            }`}
                                        >
                                            {item.icon}
                                            <span className="font-medium">{item.label}</span>
                                        </button>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
                    {/* Desktop Sidebar */}
                    <div className="hidden lg:block lg:col-span-1">
                        <Card className={`p-4 sticky top-6 ${
                            theme === 'dark' 
                                ? 'bg-gray-800 border-gray-700' 
                                : 'bg-white border-gray-200 shadow-sm'
                        }`}>
                            <nav className="space-y-1">
                                {menuItems.map((item) => (
                                    <button
                                        key={item.key}
                                        onClick={() => setActiveSection(item.key)}
                                        className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200 ${
                                            activeSection === item.key
                                                ? "bg-primary-custom text-white shadow-sm"
                                                : theme === 'dark' 
                                                  ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                                                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        }`}
                                    >
                                        {item.icon}
                                        <span className="font-medium">{item.label}</span>
                                    </button>
                                ))}
                            </nav>
                        </Card>
                    </div>

                    {/* Content */}
                    <div className="col-span-1 lg:col-span-3">
                        <Card className={`p-4 sm:p-6 ${
                            theme === 'dark' 
                                ? 'bg-gray-800 border-gray-700' 
                                : 'bg-white border-gray-200 shadow-sm'
                        }`}>
                            {renderContent()}
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}