"use client";

import { useState } from "react";
import { useTheme } from "@/compartilhado/contextos/ThemeContext";
import { Card } from "@/compartilhado/ui/card";
import { Button } from "@/compartilhado/ui/button";
import { Input } from "@/compartilhado/ui/input";
import { Label } from "@/compartilhado/ui/label";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/compartilhado/ui/sheet";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/compartilhado/ui/select";
import { 
    FileText, 
    Download, 
    TrendingUp, 
    Calendar,
    Filter,
    Menu,
    X,
    FileBarChart,
    Receipt,
    PieChart,
    BarChart3,
    LineChart,
    Target,
    CreditCard,
    Tag,
    History,
    DollarSign
} from "lucide-react";

export default function RelatoriosContent() {
    const { theme } = useTheme();
    const [selectedReport, setSelectedReport] = useState('resultados');
    const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
    const [filters, setFilters] = useState({
        dataInicial: '01/07/2025',
        dataFinal: '31/07/2025',
        categorias: 'todas',
        centrosCusto: 'todos',
        contasBancarias: 'principal',
        contatos: 'todos',
        tags: 'todas',
        modosPagamento: 'todos',
        tipoPagamento: 'todos',
        incluirPagos: true,
        incluirNaoPagos: true,
        mostrarPor: 'pagamento'
    });

    const reportTypes = [
        { 
            icon: <FileBarChart size={18} />, 
            label: "Resultados (DRE)", 
            key: "resultados",
            description: "Demonstrativo de resultados do exercício"
        },
        { 
            icon: <Receipt size={18} />, 
            label: "Extrato", 
            key: "extrato",
            description: "Extrato detalhado de movimentações"
        },
        { 
            icon: <PieChart size={18} />, 
            label: "Despesas/Receitas", 
            key: "despesas-receitas",
            description: "Análise de despesas e receitas"
        },
        { 
            icon: <History size={18} />, 
            label: "Histórico", 
            key: "historico",
            description: "Histórico de transações"
        }
    ];

    const expenseReports = [
        { icon: <FileText size={16} />, label: "Por Descrição", key: "por-descricao" },
        { icon: <Calendar size={16} />, label: "Por Período", key: "por-periodo", active: true },
        { icon: <Tag size={16} />, label: "Por Tipo", key: "por-tipo" },
        { icon: <Target size={16} />, label: "Por Categoria", key: "por-categoria" },
        { icon: <DollarSign size={16} />, label: "Por Centro de Custo", key: "por-centro-custo" },
        { icon: <CreditCard size={16} />, label: "Por Modo de Pagamento", key: "por-modo-pagamento" },
        { icon: <Tag size={16} />, label: "Por Marcações (Tags)", key: "por-tags" },
        { icon: <History size={16} />, label: "Histórico", key: "historico-despesas" },
        { icon: <FileText size={16} />, label: "Pago a...", key: "pago-a" }
    ];

    const incomeReports = [
        { icon: <FileText size={16} />, label: "Por Descrição", key: "receita-descricao" },
        { icon: <Calendar size={16} />, label: "Por Período", key: "receita-periodo" },
        { icon: <Target size={16} />, label: "Por Categoria", key: "receita-categoria" },
        { icon: <DollarSign size={16} />, label: "Por Centro de Custo", key: "receita-centro-custo" },
        { icon: <CreditCard size={16} />, label: "Por Modo de Pagamento", key: "receita-modo-pagamento" },
        { icon: <Tag size={16} />, label: "Por Marcações (Tags)", key: "receita-tags" },
        { icon: <History size={16} />, label: "Histórico", key: "historico-receitas" },
        { icon: <Receipt size={16} />, label: "Recebido de...", key: "recebido-de" }
    ];

    const renderEmptyState = () => (
        <div className="flex flex-col items-center justify-center h-64 sm:h-80">
            <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center mb-6 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
                <FileBarChart className={`w-12 h-12 sm:w-16 sm:h-16 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`} />
            </div>
            <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Nenhum resultado encontrado</h3>
            <p className={`text-sm sm:text-base text-center max-w-md ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>Verifique se os filtros informados e tente novamente</p>
        </div>
    );

    const renderFilterSection = () => (
        <div className="space-y-4">
            {/* Datas */}
            <div>
                <Label className={`text-sm font-medium block mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Data inicial</Label>
                <Input
                    type="date"
                    value="2025-07-01"
                    className={`w-full ${
                        theme === 'dark' 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                    }`}
                />
            </div>

            <div>
                <Label className={`text-sm font-medium block mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Data final</Label>
                <Input
                    type="date"
                    value="2025-07-31"
                    className={`w-full ${
                        theme === 'dark' 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                    }`}
                />
            </div>

            <div>
                <Label className={`text-sm font-medium block mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Categorias</Label>
                <Select defaultValue="todas">
                    <SelectTrigger className={`w-full ${
                        theme === 'dark' 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                    }`}>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="todas">Todas</SelectItem>
                        <SelectItem value="alimentacao">Alimentação</SelectItem>
                        <SelectItem value="transporte">Transporte</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label className={`text-sm font-medium block mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Centros de custo</Label>
                <Select defaultValue="todos">
                    <SelectTrigger className={`w-full ${
                        theme === 'dark' 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                    }`}>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="todos">Todos</SelectItem>
                        <SelectItem value="operacional">Operacional</SelectItem>
                        <SelectItem value="administrativo">Administrativo</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label className={`text-sm font-medium block mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Contas bancárias</Label>
                <Select defaultValue="principal">
                    <SelectTrigger className={`w-full ${
                        theme === 'dark' 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                    }`}>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="principal">Conta Principal, Carteira, Carteira</SelectItem>
                        <SelectItem value="poupanca">Poupança</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label className={`text-sm font-medium block mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Contatos</Label>
                <Select defaultValue="todos">
                    <SelectTrigger className={`w-full ${
                        theme === 'dark' 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                    }`}>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="todos">Todos</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label className={`text-sm font-medium block mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Tags / marcações</Label>
                <Select defaultValue="todas">
                    <SelectTrigger className={`w-full ${
                        theme === 'dark' 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                    }`}>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="todas">Todas</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label className={`text-sm font-medium block mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Modos de pagamento</Label>
                <Select defaultValue="todos">
                    <SelectTrigger className={`w-full ${
                        theme === 'dark' 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                    }`}>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="todos">Todos</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label className={`text-sm font-medium block mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Tipo pagamento</Label>
                <Select defaultValue="todos">
                    <SelectTrigger className={`w-full ${
                        theme === 'dark' 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                    }`}>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="todos">Todos</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Opções */}
            <div className="space-y-4 pt-2">
                <div>
                    <Label className={`text-sm font-medium block mb-3 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>Incluir lançamentos</Label>
                    <div className="flex flex-wrap items-center gap-4">
                        <label className="flex items-center gap-2">
                            <input 
                                type="checkbox" 
                                defaultChecked 
                                className={`w-4 h-4 rounded ${
                                    theme === 'dark' ? 'text-blue-600 bg-gray-700 border-gray-600' : 'text-blue-600'
                                }`} 
                            />
                            <span className={`text-sm ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>Pagos</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input 
                                type="checkbox" 
                                defaultChecked 
                                className={`w-4 h-4 rounded ${
                                    theme === 'dark' ? 'text-blue-600 bg-gray-700 border-gray-600' : 'text-blue-600'
                                }`} 
                            />
                            <span className={`text-sm ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>Não pagos</span>
                        </label>
                    </div>
                </div>

                <div>
                    <Label className={`text-sm font-medium block mb-3 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>Mostrar por data de</Label>
                    <div className="flex flex-wrap items-center gap-4">
                        <label className="flex items-center gap-2">
                            <input 
                                type="radio" 
                                name="mostrarPor" 
                                defaultChecked 
                                className={`w-4 h-4 ${
                                    theme === 'dark' ? 'text-blue-600 bg-gray-700 border-gray-600' : 'text-blue-600'
                                }`} 
                            />
                            <span className={`text-sm ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>Pagamento</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input 
                                type="radio" 
                                name="mostrarPor" 
                                className={`w-4 h-4 ${
                                    theme === 'dark' ? 'text-blue-600 bg-gray-700 border-gray-600' : 'text-blue-600'
                                }`} 
                            />
                            <span className={`text-sm ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>Competência</span>
                        </label>
                    </div>
                </div>

                <div className="flex justify-end pt-2">
                    <Button 
                        variant="outline" 
                        size="sm"
                        className={`${
                            theme === 'dark' 
                                ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                        Limpar
                    </Button>
                </div>
            </div>
        </div>
    );

    return (
        <div className={`min-h-screen p-3 sm:p-4 lg:p-6 transition-colors ${
            theme === 'dark' 
                ? 'bg-gray-900 text-white' 
                : 'text-gray-900'
        }`} style={theme === 'light' ? { backgroundColor: 'lab(95 -1.17 -3.31)' } : {}}>
            <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
                    {/* Mobile Filter Button */}
                    <div className="lg:hidden">
                        <div className="flex items-center justify-between mb-4">
                            <h1 className={`text-xl font-bold ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>Relatórios</h1>
                            
                            <Sheet open={isFilterSheetOpen} onOpenChange={setIsFilterSheetOpen}>
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
                                        <Filter className="h-4 w-4" />
                                        Filtros
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
                                                Filtros de Relatório
                                            </SheetTitle>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => setIsFilterSheetOpen(false)}
                                                className="h-6 w-6 p-0"
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </SheetHeader>
                                    
                                    <div className="mt-6">
                                        {renderFilterSection()}
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>

                    {/* Desktop Sidebar */}
                    <div className="hidden lg:block lg:col-span-1 space-y-4">
                        {/* Filtros Card */}
                        <Card className={`p-4 ${
                            theme === 'dark' 
                                ? 'bg-gray-800 border-gray-700' 
                                : 'bg-white border-gray-200 shadow-sm'
                        }`}>
                            <h3 className={`text-lg font-semibold mb-4 ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>Filtros</h3>
                            {renderFilterSection()}
                        </Card>

                        {/* Fluxo de Caixa */}
                        <Card className={`p-4 ${
                            theme === 'dark' 
                                ? 'bg-gray-800 border-gray-700' 
                                : 'bg-white border-gray-200 shadow-sm'
                        }`}>
                            <h3 className={`text-lg font-semibold mb-4 ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>Fluxo de Caixa</h3>
                            <div className="space-y-2">
                                {reportTypes.map((type) => (
                                    <button
                                        key={type.key}
                                        onClick={() => setSelectedReport(type.key)}
                                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                                            selectedReport === type.key
                                                ? "bg-blue-600 text-white shadow-sm"
                                                : theme === 'dark' 
                                                  ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                                                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        }`}
                                    >
                                        {type.icon}
                                        <div>
                                            <div className="font-medium text-sm">{type.label}</div>
                                            <div className={`text-xs ${
                                                selectedReport === type.key 
                                                    ? "text-blue-100" 
                                                    : theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                            }`}>
                                                {type.description}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </Card>

                        {/* Despesas */}
                        <Card className={`p-4 ${
                            theme === 'dark' 
                                ? 'bg-gray-800 border-gray-700' 
                                : 'bg-white border-gray-200 shadow-sm'
                        }`}>
                            <h3 className={`text-lg font-semibold mb-4 ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>Despesas</h3>
                            <div className="space-y-1">
                                {expenseReports.map((report) => (
                                    <button
                                        key={report.key}
                                        className={`w-full flex items-center gap-2 p-2 rounded-lg text-left transition-all duration-200 ${
                                            report.active
                                                ? "bg-red-600 text-white shadow-sm"
                                                : theme === 'dark' 
                                                  ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                                                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        }`}
                                    >
                                        {report.icon}
                                        <span className="font-medium text-sm">{report.label}</span>
                                    </button>
                                ))}
                            </div>
                        </Card>

                        {/* Recebimentos */}
                        <Card className={`p-4 ${
                            theme === 'dark' 
                                ? 'bg-gray-800 border-gray-700' 
                                : 'bg-white border-gray-200 shadow-sm'
                        }`}>
                            <h3 className={`text-lg font-semibold mb-4 ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>Recebimentos</h3>
                            <div className="space-y-1">
                                {incomeReports.map((report) => (
                                    <button
                                        key={report.key}
                                        className={`w-full flex items-center gap-2 p-2 rounded-lg text-left transition-all duration-200 ${
                                            theme === 'dark' 
                                                ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                                                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        }`}
                                    >
                                        {report.icon}
                                        <span className="font-medium text-sm">{report.label}</span>
                                    </button>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Content Area */}
                    <div className="col-span-1 lg:col-span-3">
                        <Card className={`p-4 sm:p-6 ${
                            theme === 'dark' 
                                ? 'bg-gray-800 border-gray-700' 
                                : 'bg-white border-gray-200 shadow-sm'
                        }`}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                                <div>
                                    <h2 className={`text-lg sm:text-xl font-semibold ${
                                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>Despesas por período - 01/07/2025 à 31/07/2025</h2>
                                </div>
                                <Button 
                                    variant="outline" 
                                    size="sm"
                                    className="flex items-center gap-2"
                                >
                                    <Download className="h-4 w-4" />
                                    Exportar
                                </Button>
                            </div>
                            
                            {renderEmptyState()}
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}