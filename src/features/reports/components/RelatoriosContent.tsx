"use client";

import { useState, useMemo } from "react";
import { useTheme } from "@/stores/ThemeContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DatePicker } from "@/components/ui/date-picker";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { 
    FileText, 
    Download, 
    Calendar,
    Filter,
    X,
    Receipt,
    PieChart,
    Target,
    CreditCard,
    Tag,
    History,
    DollarSign,
    TrendingUp,
    AlertTriangle,
    BarChart3
} from "lucide-react";
import {
    ResponsiveContainer,
    PieChart as RechartsPieChart,
    Cell,
    Pie,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area,
    AreaChart
} from "recharts";

// Dados mockados para demonstração
const mockExpenseData = [
    { name: 'Alimentação', value: 2400, color: '#8884d8' },
    { name: 'Transporte', value: 1800, color: '#82ca9d' },
    { name: 'Moradia', value: 3200, color: '#ffc658' },
    { name: 'Saúde', value: 800, color: '#ff7c7c' },
    { name: 'Educação', value: 1200, color: '#8dd1e1' },
    { name: 'Lazer', value: 600, color: '#d084d0' }
];

const mockMonthlyComparison = [
    { month: 'Jan', receitas: 5000, despesas: 3800, diferenca: 1200 },
    { month: 'Fev', receitas: 5200, despesas: 4100, diferenca: 1100 },
    { month: 'Mar', receitas: 4800, despesas: 4200, diferenca: 600 },
    { month: 'Abr', receitas: 5400, despesas: 3900, diferenca: 1500 },
    { month: 'Mai', receitas: 5100, despesas: 4300, diferenca: 800 },
    { month: 'Jun', receitas: 5300, despesas: 4500, diferenca: 800 },
    { month: 'Jul', receitas: 5600, despesas: 4700, diferenca: 900 }
];

const mockForecastData = [
    { month: 'Ago', predicted: 4800, trend: 'up' },
    { month: 'Set', predicted: 5200, trend: 'up' },
    { month: 'Out', predicted: 4900, trend: 'down' },
    { month: 'Nov', predicted: 5400, trend: 'up' },
    { month: 'Dez', predicted: 5800, trend: 'up' }
];

const mockAlerts = [
    {
        id: 1,
        type: 'warning',
        category: 'Alimentação',
        message: 'Gastos com alimentação 15% acima da média dos últimos 3 meses',
        amount: 2400,
        limit: 2100
    },
    {
        id: 2,
        type: 'danger',
        category: 'Transporte',
        message: 'Meta mensal de gastos com transporte ultrapassada',
        amount: 1800,
        limit: 1500
    }
];

export default function RelatoriosContent() {
    const { theme } = useTheme();
    const [selectedReport, setSelectedReport] = useState('gastos-categoria');
    const [isFilterSheetOpen, setIsFilterSheetOpen] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState('mensal');
    const [filters, setFilters] = useState({
        dataInicial: new Date(2025, 6, 1), // 01/07/2025
        dataFinal: new Date(2025, 6, 31), // 31/07/2025
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

    const totalExpenses = useMemo(() => 
        mockExpenseData.reduce((acc, item) => acc + item.value, 0), 
        []
    );

    const reportTypes = [
        { 
            icon: <PieChart size={18} />, 
            label: "Gastos por Categoria", 
            key: "gastos-categoria",
            description: "Distribuição de gastos por categoria"
        },
        { 
            icon: <TrendingUp size={18} />, 
            label: "Previsões", 
            key: "previsoes",
            description: "Previsões de gastos futuros"
        },
        { 
            icon: <BarChart3 size={18} />, 
            label: "Comparativo", 
            key: "comparativo",
            description: "Comparativo mensal e anual"
        },
        { 
            icon: <AlertTriangle size={18} />, 
            label: "Alertas", 
            key: "alertas",
            description: "Alertas de gastos excessivos"
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

    const renderExpensesByCategory = () => (
        <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className={`p-4 ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-blue-50 border-blue-200'
                }`}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-sm font-medium ${
                                theme === 'dark' ? 'text-gray-300' : 'text-blue-600'
                            }`}>Total de Gastos</p>
                            <p className={`text-2xl font-bold ${
                                theme === 'dark' ? 'text-white' : 'text-blue-900'
                            }`}>R$ {totalExpenses.toLocaleString('pt-BR')}</p>
                        </div>
                        <DollarSign className={`h-8 w-8 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-blue-500'
                        }`} />
                    </div>
                </Card>
                
                <Card className={`p-4 ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-green-50 border-green-200'
                }`}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-sm font-medium ${
                                theme === 'dark' ? 'text-gray-300' : 'text-green-600'
                            }`}>Maior Categoria</p>
                            <p className={`text-2xl font-bold ${
                                theme === 'dark' ? 'text-white' : 'text-green-900'
                            }`}>Moradia</p>
                        </div>
                        <Target className={`h-8 w-8 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-green-500'
                        }`} />
                    </div>
                </Card>
                
                <Card className={`p-4 ${
                    theme === 'dark' ? 'bg-gray-700 border-gray-600' : 'bg-purple-50 border-purple-200'
                }`}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-sm font-medium ${
                                theme === 'dark' ? 'text-gray-300' : 'text-purple-600'
                            }`}>Categorias Ativas</p>
                            <p className={`text-2xl font-bold ${
                                theme === 'dark' ? 'text-white' : 'text-purple-900'
                            }`}>{mockExpenseData.length}</p>
                        </div>
                        <PieChart className={`h-8 w-8 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-purple-500'
                        }`} />
                    </div>
                </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pie Chart */}
                <Card className={`p-6 ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                    <h3 className={`text-lg font-semibold mb-4 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Distribuição por Categoria</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <RechartsPieChart>
                            <Pie
                                data={mockExpenseData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {mockExpenseData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value) => `R$ ${value.toLocaleString('pt-BR')}`} />
                        </RechartsPieChart>
                    </ResponsiveContainer>
                </Card>

                {/* Bar Chart */}
                <Card className={`p-6 ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                    <h3 className={`text-lg font-semibold mb-4 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Gastos por Categoria</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={mockExpenseData}>
                            <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                            <XAxis 
                                dataKey="name" 
                                stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
                                fontSize={12}
                                angle={-45}
                                textAnchor="end"
                                height={80}
                            />
                            <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                            <Tooltip 
                                formatter={(value) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Valor']}
                                contentStyle={{
                                    backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                                    border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
                                    borderRadius: '8px'
                                }}
                            />
                            <Bar dataKey="value" fill={theme === 'dark' ? '#6366f1' : '#3b82f6'} radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
            </div>

            {/* Data Grid */}
            <Card className={`p-3 sm:p-4 ${
                theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200 shadow-sm'
            }`}>
                <h3 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Detalhamento por Categoria</h3>
                
                <div className={`rounded-md border ${
                    theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                }`}>
                    <Table>
                        <TableHeader>
                            <TableRow className={`${
                                theme === 'dark' 
                                    ? 'border-gray-700 hover:bg-gray-750' 
                                    : 'border-gray-200 hover:bg-gray-50'
                            }`}>
                                <TableHead className={`${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>Categoria</TableHead>
                                <TableHead className={`text-right ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>Valor</TableHead>
                                <TableHead className={`text-right hidden sm:table-cell ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>% do Total</TableHead>
                                <TableHead className={`text-right hidden md:table-cell ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>vs Mês Anterior</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {mockExpenseData.map((item, index) => {
                                const percentage = ((item.value / totalExpenses) * 100).toFixed(1);
                                const previousMonth = Math.round(item.value * (0.8 + Math.random() * 0.4));
                                const variation = ((item.value - previousMonth) / previousMonth * 100).toFixed(1);
                                const isPositive = parseFloat(variation) > 0;
                                
                                return (
                                    <TableRow key={index} className={`${
                                        theme === 'dark' 
                                            ? 'border-gray-700 hover:bg-gray-750' 
                                            : 'border-gray-200 hover:bg-gray-50'
                                    }`}>
                                        <TableCell>
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <div 
                                                    className="w-3 h-3 sm:w-4 sm:h-4 rounded-full flex-shrink-0" 
                                                    style={{ backgroundColor: item.color }}
                                                />
                                                <div className="min-w-0 flex-1">
                                                    <p className={`font-medium text-xs sm:text-sm truncate ${
                                                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                                                    }`}>{item.name}</p>
                                                    <div className="sm:hidden flex items-center gap-2 mt-1">
                                                        <span className={`text-xs font-semibold ${
                                                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                                                        }`}>
                                                            R$ {item.value.toLocaleString('pt-BR')}
                                                        </span>
                                                        <span className={`text-xs ${
                                                            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                                        }`}>({percentage}%)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell text-right">
                                            <span className={`font-semibold text-sm ${
                                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                                            }`}>
                                                R$ {item.value.toLocaleString('pt-BR')}
                                            </span>
                                        </TableCell>
                                        <TableCell className={`text-right text-xs sm:text-sm hidden sm:table-cell ${
                                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            {percentage}%
                                        </TableCell>
                                        <TableCell className={`text-right text-xs sm:text-sm hidden md:table-cell font-medium ${
                                            isPositive 
                                                ? 'text-red-400' 
                                                : 'text-green-400'
                                        }`}>
                                            {isPositive ? '+' : ''}{variation}%
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {/* Total Row */}
                            <TableRow className={`border-t-2 ${
                                theme === 'dark' 
                                    ? 'border-gray-600 bg-gray-750' 
                                    : 'border-gray-300 bg-gray-50'
                            }`}>
                                <TableCell className={`font-bold ${
                                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-500 rounded-full flex-shrink-0" />
                                        <div className="min-w-0 flex-1">
                                            <p className="font-bold text-xs sm:text-sm truncate">Total</p>
                                            <div className="sm:hidden mt-1">
                                                <span className="text-xs font-bold">
                                                    R$ {totalExpenses.toLocaleString('pt-BR')}
                                                </span>
                                                <span className={`text-xs ml-2 ${
                                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                                }`}>(100%)</span>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className={`hidden sm:table-cell text-right font-bold text-sm ${
                                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>
                                    R$ {totalExpenses.toLocaleString('pt-BR')}
                                </TableCell>
                                <TableCell className={`text-right font-bold text-xs sm:text-sm hidden sm:table-cell ${
                                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>
                                    100%
                                </TableCell>
                                <TableCell className="hidden md:table-cell"></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </div>
    );

    const renderForecast = () => (
        <div className="space-y-6">
            <Card className={`p-6 ${
                theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
                <h3 className={`text-lg font-semibold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Previsão de Gastos - Próximos 5 Meses</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={mockForecastData}>
                        <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                        <XAxis 
                            dataKey="month" 
                            stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
                        />
                        <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                        <Tooltip 
                            formatter={(value) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Previsão']}
                            contentStyle={{
                                backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                                border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
                                borderRadius: '8px'
                            }}
                        />
                        <Area 
                            type="monotone" 
                            dataKey="predicted" 
                            stroke={theme === 'dark' ? '#10b981' : '#059669'} 
                            fill={theme === 'dark' ? '#065f46' : '#a7f3d0'}
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </Card>
        </div>
    );

    const renderComparison = () => (
        <div className="space-y-6">
            {/* Period Selector */}
            <div className="flex items-center gap-4">
                <Label className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Período:</Label>
                <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                    <SelectTrigger className={`w-[180px] ${
                        theme === 'dark' 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300'
                    }`}>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="mensal">Mensal</SelectItem>
                        <SelectItem value="anual">Anual</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Card className={`p-6 ${
                theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
                <h3 className={`text-lg font-semibold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Comparativo {selectedPeriod === 'mensal' ? 'Mensal' : 'Anual'} - Receitas vs Despesas</h3>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={mockMonthlyComparison}>
                        <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                        <XAxis 
                            dataKey="month" 
                            stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
                        />
                        <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                        <Tooltip 
                            formatter={(value, name) => [
                                `R$ ${value.toLocaleString('pt-BR')}`, 
                                name === 'receitas' ? 'Receitas' : name === 'despesas' ? 'Despesas' : 'Diferença'
                            ]}
                            contentStyle={{
                                backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                                border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
                                borderRadius: '8px'
                            }}
                        />
                        <Legend />
                        <Bar dataKey="receitas" fill="#10b981" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="despesas" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </Card>
        </div>
    );

    const renderAlerts = () => (
        <div className="space-y-4">
            {mockAlerts.map((alert) => (
                <Alert key={alert.id} className={`${
                    alert.type === 'danger' 
                        ? theme === 'dark' ? 'border-red-600 bg-red-900/20' : 'border-red-200 bg-red-50'
                        : theme === 'dark' ? 'border-yellow-600 bg-yellow-900/20' : 'border-yellow-200 bg-yellow-50'
                }`}>
                    <AlertTriangle className={`h-4 w-4 ${
                        alert.type === 'danger' ? 'text-red-500' : 'text-yellow-500'
                    }`} />
                    <AlertDescription>
                        <div className="space-y-2">
                            <p className={`font-medium ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>{alert.category}</p>
                            <p className={`text-sm ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>{alert.message}</p>
                            <div className="flex items-center gap-4 mt-2">
                                <span className={`text-sm ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                }`}>Gasto atual: R$ {alert.amount.toLocaleString('pt-BR')}</span>
                                <span className={`text-sm ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                }`}>Limite: R$ {alert.limit.toLocaleString('pt-BR')}</span>
                            </div>
                            <Progress 
                                value={(alert.amount / alert.limit) * 100} 
                                className="h-2 mt-2"
                            />
                        </div>
                    </AlertDescription>
                </Alert>
            ))}
        </div>
    );

    const renderContent = () => {
        switch (selectedReport) {
            case 'gastos-categoria':
                return renderExpensesByCategory();
            case 'previsoes':
                return renderForecast();
            case 'comparativo':
                return renderComparison();
            case 'alertas':
                return renderAlerts();
            default:
                return renderExpensesByCategory();
        }
    };

    const getReportTitle = () => {
        const report = reportTypes.find(r => r.key === selectedReport);
        return report ? report.label : 'Relatório';
    };

    const renderFilterSection = () => (
        <div className="space-y-4">
            {/* Datas */}
            <div>
                <Label className={`text-sm font-medium block mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Data inicial</Label>
                <DatePicker
                    date={filters.dataInicial}
                    onDateChange={(date) => setFilters(prev => ({ ...prev, dataInicial: date || new Date() }))}
                    placeholder="Selecione a data inicial"
                    className={`w-full ${
                        theme === 'dark' 
                            ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600' 
                            : 'bg-white border-gray-300 hover:bg-gray-50'
                    }`}
                />
            </div>

            <div>
                <Label className={`text-sm font-medium block mb-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Data final</Label>
                <DatePicker
                    date={filters.dataFinal}
                    onDateChange={(date) => setFilters(prev => ({ ...prev, dataFinal: date || new Date() }))}
                    placeholder="Selecione a data final"
                    className={`w-full ${
                        theme === 'dark' 
                            ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600' 
                            : 'bg-white border-gray-300 hover:bg-gray-50'
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
                            <Checkbox 
                                defaultChecked 
                                className={`${
                                    theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                                }`} 
                            />
                            <span className={`text-sm ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>Pagos</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <Checkbox 
                                defaultChecked 
                                className={`${
                                    theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
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
                    <RadioGroup defaultValue="pagamento" className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                            <RadioGroupItem 
                                value="pagamento" 
                                id="pagamento"
                                className={`${
                                    theme === 'dark' ? 'border-gray-600 text-primary-custom' : 'border-gray-300 text-primary-custom'
                                }`}
                            />
                            <Label 
                                htmlFor="pagamento"
                                className={`text-sm cursor-pointer ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}
                            >
                                Pagamento
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <RadioGroupItem 
                                value="competencia" 
                                id="competencia"
                                className={`${
                                    theme === 'dark' ? 'border-gray-600 text-primary-custom' : 'border-gray-300 text-primary-custom'
                                }`}
                            />
                            <Label 
                                htmlFor="competencia"
                                className={`text-sm cursor-pointer ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}
                            >
                                Competência
                            </Label>
                        </div>
                    </RadioGroup>
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

                        {/* Analytics Reports */}
                        <Card className={`p-4 ${
                            theme === 'dark' 
                                ? 'bg-gray-800 border-gray-700' 
                                : 'bg-white border-gray-200 shadow-sm'
                        }`}>
                            <h3 className={`text-lg font-semibold mb-4 ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>Relatórios Analytics</h3>
                            <div className="space-y-2">
                                {reportTypes.map((type) => (
                                    <button
                                        key={type.key}
                                        onClick={() => setSelectedReport(type.key)}
                                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-200 ${
                                            selectedReport === type.key
                                                ? "bg-primary-custom text-white shadow-sm"
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
                                    }`}>{getReportTitle()}</h2>
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
                            
                            {renderContent()}
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}