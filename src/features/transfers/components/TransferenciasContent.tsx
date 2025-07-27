"use client";

import { useState } from "react";
import { useTheme } from "@/stores/ThemeContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Search, ArrowUpDown } from "lucide-react";

interface Transferencia {
    id: number;
    account: string;
    service: string;
    amount: number;
    date: string;
    status: 'success' | 'pending' | 'canceled';
    time: string;
    avatar: string;
    type: 'deposit' | 'transfer';
}

const mockTransferencias: Transferencia[] = [
    {
        id: 1,
        account: "Figma Pro Plan",
        service: "Figma",
        amount: -5000,
        date: "2024-12-12",
        status: "success",
        time: "5 min ago",
        avatar: "FP",
        type: "transfer"
    },
    {
        id: 2,
        account: "Youtube Pro P...",
        service: "Youtube",
        amount: -2500,
        date: "2024-12-12",
        status: "pending",
        time: "7 min ago",
        avatar: "YT",
        type: "transfer"
    },
    {
        id: 3,
        account: "1 Year Subscri...",
        service: "Amazon Prime",
        amount: -350,
        date: "2024-12-12",
        status: "canceled",
        time: "5 min ago",
        avatar: "AP",
        type: "transfer"
    },
    {
        id: 4,
        account: "6 Month Subscr...",
        service: "Netflix",
        amount: -200,
        date: "2024-12-12",
        status: "success",
        time: "7 min ago",
        avatar: "NF",
        type: "transfer"
    },
    {
        id: 5,
        account: "1 Year Subscri...",
        service: "Amazon Prime",
        amount: -350,
        date: "2024-12-12",
        status: "canceled",
        time: "5 min ago",
        avatar: "AP",
        type: "transfer"
    },
    {
        id: 6,
        account: "Youtube Pro P...",
        service: "Youtube",
        amount: -2500,
        date: "2024-12-12",
        status: "pending",
        time: "7 min ago",
        avatar: "YT",
        type: "transfer"
    }
];

export default function TransferenciasContent() {
    const { theme } = useTheme();
    const [filter, setFilter] = useState('all');
    const [showAddForm, setShowAddForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [transferencias, setTransferencias] = useState(mockTransferencias);

    // Form states
    const [formData, setFormData] = useState({
        account: '',
        service: '',
        amount: '',
        type: 'transfer' as 'deposit' | 'transfer'
    });

    const filteredTransferencias = transferencias.filter(t => {
        const matchesSearch = t.account.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            t.service.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'all' || 
                            (filter === 'deposit' && t.type === 'deposit') ||
                            (filter === 'transfer' && t.type === 'transfer');
        return matchesSearch && matchesFilter;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'success': return 'bg-green-900 text-green-400';
            case 'pending': return 'bg-orange-900 text-orange-400';
            case 'canceled': return 'bg-red-900 text-red-400';
            default: return 'bg-gray-900 text-gray-400';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'success': return 'Success';
            case 'pending': return 'Pending';
            case 'canceled': return 'Canceled';
            default: return status;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.account || !formData.service || !formData.amount) return;

        const newTransferencia: Transferencia = {
            id: Date.now(),
            account: formData.account,
            service: formData.service,
            amount: formData.type === 'deposit' ? parseFloat(formData.amount) : -parseFloat(formData.amount),
            date: new Date().toISOString().split('T')[0],
            status: 'pending',
            time: 'now',
            avatar: formData.service.substring(0, 2).toUpperCase(),
            type: formData.type
        };

        setTransferencias([newTransferencia, ...transferencias]);
        setFormData({ account: '', service: '', amount: '', type: 'transfer' });
        setShowAddForm(false);
    };

    return (
        <div className={`min-h-screen p-3 sm:p-4 lg:p-6 transition-colors ${
            theme === 'dark' 
                ? 'bg-gray-900 text-white' 
                : 'text-gray-900'
        }`} style={theme === 'light' ? { backgroundColor: 'lab(95 -1.17 -3.31)' } : {}}>
            <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
                

                {/* Cards de Resumo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className={`p-4 ${
                        theme === 'dark' 
                            ? 'bg-gray-800 border-gray-700' 
                            : 'bg-white border-gray-200 shadow-sm'
                    }`}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className={`text-sm ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>Total Transferido</p>
                                <p className={`text-2xl font-bold ${
                                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>R$ 10.950</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <ArrowUpDown className="h-6 w-6 text-blue-600" />
                            </div>
                        </div>
                    </Card>

                    <Card className={`p-4 ${
                        theme === 'dark' 
                            ? 'bg-gray-800 border-gray-700' 
                            : 'bg-white border-gray-200 shadow-sm'
                    }`}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className={`text-sm ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>Pendentes</p>
                                <p className={`text-2xl font-bold ${
                                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>2</p>
                            </div>
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">⏳</span>
                            </div>
                        </div>
                    </Card>

                    <Card className={`p-4 ${
                        theme === 'dark' 
                            ? 'bg-gray-800 border-gray-700' 
                            : 'bg-white border-gray-200 shadow-sm'
                    }`}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className={`text-sm ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>Concluídas</p>
                                <p className={`text-2xl font-bold ${
                                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>4</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">✅</span>
                            </div>
                        </div>
                    </Card>

                    <Card className={`p-4 ${
                        theme === 'dark' 
                            ? 'bg-gray-800 border-gray-700' 
                            : 'bg-white border-gray-200 shadow-sm'
                    }`}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className={`text-sm ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>Canceladas</p>
                                <p className={`text-2xl font-bold ${
                                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>2</p>
                            </div>
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">❌</span>
                            </div>
                        </div>
                    </Card>
                </div>


                {/* Filtros e Busca */}
                <Card className={`p-4 ${
                    theme === 'dark' 
                        ? 'bg-gray-800 border-gray-700' 
                        : 'bg-white border-gray-200 shadow-sm'
                }`}>
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        <div className="flex items-center gap-2 w-full lg:w-auto">
                            <div className="relative flex-1 sm:w-80">
                                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                }`} />
                                <Input
                                    placeholder="Buscar transferências..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className={`pl-10 ${
                                        theme === 'dark' 
                                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                                    }`}
                                />
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2 w-full lg:w-auto">
                            <Select value={filter} onValueChange={setFilter}>
                                <SelectTrigger className={`w-full sm:w-[140px] ${
                                    theme === 'dark' 
                                        ? 'bg-gray-700 border-gray-600 text-white' 
                                        : 'bg-white border-gray-300 text-gray-900'
                                }`}>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className={`${
                                    theme === 'dark' 
                                        ? 'bg-gray-700 border-gray-600' 
                                        : 'bg-white border-gray-200'
                                }`}>
                                    <SelectItem value="all" className={`${
                                        theme === 'dark' 
                                            ? 'text-white hover:bg-gray-600' 
                                            : 'text-gray-900 hover:bg-gray-100'
                                    }`}>Todas</SelectItem>
                                    <SelectItem value="deposit" className={`${
                                        theme === 'dark' 
                                            ? 'text-white hover:bg-gray-600' 
                                            : 'text-gray-900 hover:bg-gray-100'
                                    }`}>Depósitos</SelectItem>
                                    <SelectItem value="transfer" className={`${
                                        theme === 'dark' 
                                            ? 'text-white hover:bg-gray-600' 
                                            : 'text-gray-900 hover:bg-gray-100'
                                    }`}>Transferências</SelectItem>
                                </SelectContent>
                            </Select>
                            
                            <Button 
                                onClick={() => setShowAddForm(true)}
                                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 whitespace-nowrap"
                            >
                                <Plus className="h-4 w-4" />
                                Nova Transferência
                            </Button>
                        </div>
                    </div>
                </Card>

                {/* Formulário de Nova Transferência */}
                {showAddForm && (
                    <Card className={`p-6 ${
                        theme === 'dark' 
                            ? 'bg-gray-800 border-gray-700' 
                            : 'bg-white border-gray-200 shadow-sm'
                    }`}>
                        {/* Header for Desktop */}
                        <div className="hidden sm:flex sm:justify-between sm:items-center mb-4">
                            <h3 className={`text-lg font-semibold ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>Nova Transferência</h3>
                            <div className="flex items-center gap-2">
                                <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => setShowAddForm(false)}
                                    className={`${
                                        theme === 'dark' 
                                            ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-gray-800' 
                                            : 'border-gray-300 text-gray-700 hover:bg-gray-100 bg-white'
                                    }`}
                                >
                                    Cancelar
                                </Button>
                                <Button 
                                    type="submit" 
                                    form="transfer-form"
                                    size="sm"
                                    className="bg-blue-600 hover:bg-blue-700 text-white"
                                >
                                    Adicionar Transferência
                                </Button>
                            </div>
                        </div>

                        {/* Title Only for Mobile */}
                        <div className="sm:hidden mb-4">
                            <h3 className={`text-lg font-semibold ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>Nova Transferência</h3>
                        </div>
                        
                        <form id="transfer-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <Label htmlFor="type" className={`pb-2 ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}>Tipo</Label>
                                <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value as 'deposit' | 'transfer'})}>
                                    <SelectTrigger className={`${
                                        theme === 'dark' 
                                            ? 'bg-gray-700 border-gray-600 text-white' 
                                            : 'bg-white border-gray-300 text-gray-900'
                                    }`}>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className={`${
                                        theme === 'dark' 
                                            ? 'bg-gray-700 border-gray-600' 
                                            : 'bg-white border-gray-200'
                                    }`}>
                                        <SelectItem value="transfer" className={`${
                                            theme === 'dark' 
                                                ? 'text-white hover:bg-gray-600' 
                                                : 'text-gray-900 hover:bg-gray-100'
                                        }`}>Transferência</SelectItem>
                                        <SelectItem value="deposit" className={`${
                                            theme === 'dark' 
                                                ? 'text-white hover:bg-gray-600' 
                                                : 'text-gray-900 hover:bg-gray-100'
                                        }`}>Depósito</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            
                            <div>
                                <Label htmlFor="service" className={`pb-2 ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}>Serviço</Label>
                                <Input
                                    id="service"
                                    value={formData.service}
                                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                                    placeholder="Ex: Netflix, Figma"
                                    className={`${
                                        theme === 'dark' 
                                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                                    }`}
                                />
                            </div>
                            
                            <div>
                                <Label htmlFor="account" className={`pb-2 ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}>Conta/Descrição</Label>
                                <Input
                                    id="account"
                                    value={formData.account}
                                    onChange={(e) => setFormData({...formData, account: e.target.value})}
                                    placeholder="Ex: Plano Pro, Assinatura"
                                    className={`${
                                        theme === 'dark' 
                                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                                    }`}
                                />
                            </div>
                            
                            <div>
                                <Label htmlFor="amount" className={`pb-2 ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}>Valor (R$)</Label>
                                <Input
                                    id="amount"
                                    type="number"
                                    value={formData.amount}
                                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                                    placeholder="0.00"
                                    className={`${
                                        theme === 'dark' 
                                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                                    }`}
                                />
                            </div>
                        </form>

                        {/* Buttons for Mobile */}
                        <div className="sm:hidden flex items-center gap-2 mt-4">
                            <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => setShowAddForm(false)}
                                className={`${
                                    theme === 'dark' 
                                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-gray-800' 
                                        : 'border-gray-300 text-gray-700 hover:bg-gray-100 bg-white'
                                }`}
                            >
                                Cancelar
                            </Button>
                            <Button 
                                type="submit" 
                                form="transfer-form"
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700 text-white"
                            >
                                Adicionar Transferência
                            </Button>
                        </div>
                    </Card>
                )}

                {/* Tabela de Transferências */}
                <Card className={`${
                    theme === 'dark' 
                        ? 'bg-gray-800 border-gray-700' 
                        : 'bg-white border-gray-200 shadow-sm'
                }`}>
                    <div className="p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}">
                        <h3 className={`text-lg font-semibold ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>Histórico de Transferências</h3>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className={`${
                                    theme === 'dark' 
                                        ? 'border-gray-700 hover:bg-gray-750' 
                                        : 'border-gray-200 hover:bg-gray-50'
                                }`}>
                                    <TableHead className={`${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>Conta</TableHead>
                                    <TableHead className={`${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>Valor</TableHead>
                                    <TableHead className={`hidden md:table-cell ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>Data</TableHead>
                                    <TableHead className={`${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>Status</TableHead>
                                    <TableHead className={`hidden lg:table-cell ${
                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                    }`}>Tempo</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredTransferencias.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={5} className={`text-center py-8 ${
                                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            Nenhuma transferência encontrada
                                        </TableCell>
                                    </TableRow>
                                ) : filteredTransferencias.map((transferencia) => (
                                    <TableRow key={transferencia.id} className={`${
                                        theme === 'dark' 
                                            ? 'border-gray-700 hover:bg-gray-750' 
                                            : 'border-gray-200 hover:bg-gray-50'
                                    }`}>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Avatar className="w-8 h-8">
                                                    <AvatarFallback className="bg-blue-600 text-white text-xs">
                                                        {transferencia.avatar}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className={`font-medium text-sm ${
                                                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                                                    }`}>{transferencia.account}</p>
                                                    <p className={`text-xs ${
                                                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                                    }`}>{transferencia.service}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className={`font-semibold text-sm ${
                                                transferencia.amount < 0 ? 'text-red-400' : 'text-green-400'
                                            }`}>
                                                {transferencia.amount < 0 ? '-' : '+'}R${Math.abs(transferencia.amount).toLocaleString('pt-BR')}
                                            </span>
                                        </TableCell>
                                        <TableCell className={`text-sm hidden md:table-cell ${
                                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            {new Date(transferencia.date).toLocaleDateString('pt-BR')}
                                        </TableCell>
                                        <TableCell>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transferencia.status)}`}>
                                                {getStatusText(transferencia.status)}
                                            </span>
                                        </TableCell>
                                        <TableCell className={`text-sm hidden lg:table-cell ${
                                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                            {transferencia.time}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </Card>
            </div>
        </div>
    );
}