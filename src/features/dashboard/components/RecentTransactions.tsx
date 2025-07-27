"use client";

import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useTheme } from "@/stores/ThemeContext";

interface Transaction {
    id: number;
    service: string;
    account: string;
    amount: number;
    date: string;
    status: string;
    time: string;
    avatar: string;
}

type FilterType = 'hoje' | 'esta-semana' | 'este-ano';

interface RecentTransactionsProps {
    transactions: Transaction[];
}

export default function RecentTransactions({ transactions }: RecentTransactionsProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState<FilterType>('este-ano');
    const itemsPerPage = 5;
    const { theme } = useTheme();

    const filteredTransactions = useMemo(() => {
        
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];
        
        let filtered = [];
        
        switch (filter) {
            case 'hoje':
                filtered = transactions.filter(t => t.date === todayStr);
                break;
            case 'esta-semana':
                const weekAgo = new Date();
                weekAgo.setDate(today.getDate() - 7);
                const weekAgoStr = weekAgo.toISOString().split('T')[0];
                filtered = transactions.filter(t => t.date >= weekAgoStr && t.date <= todayStr);
                break;
            case 'este-ano':
                const currentYear = today.getFullYear().toString();
                filtered = transactions.filter(t => t.date.startsWith(currentYear));
                break;
            default:
                filtered = transactions;
        }
        return filtered;
    }, [transactions, filter]);

    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

    const handleFilterChange = (value: string) => {
        setFilter(value as FilterType);
        setCurrentPage(1);
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <Card className={`p-3 sm:p-4 ${
            theme === 'dark' 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200 shadow-sm'
        }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-3 sm:gap-0">
                <h3 className={`text-base sm:text-lg font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Transacoes Recentes</h3>
                <Select value={filter} onValueChange={handleFilterChange}>
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
                        <SelectItem value="hoje" className={`${
                            theme === 'dark' 
                                ? 'text-white hover:bg-gray-600' 
                                : 'text-gray-900 hover:bg-gray-100'
                        }`}>Hoje</SelectItem>
                        <SelectItem value="esta-semana" className={`${
                            theme === 'dark' 
                                ? 'text-white hover:bg-gray-600' 
                                : 'text-gray-900 hover:bg-gray-100'
                        }`}>Esta Semana</SelectItem>
                        <SelectItem value="este-ano" className={`${
                            theme === 'dark' 
                                ? 'text-white hover:bg-gray-600' 
                                : 'text-gray-900 hover:bg-gray-100'
                        }`}>Este Ano</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            
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
                            }`}>Conta</TableHead>
                            <TableHead className={`hidden sm:table-cell ${
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
                        {paginatedTransactions.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className={`text-center py-8 ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                    Nenhuma transação encontrada para o período selecionado
                                </TableCell>
                            </TableRow>
                        ) : paginatedTransactions.map((transaction) => (
                            <TableRow key={transaction.id} className={`${
                                theme === 'dark' 
                                    ? 'border-gray-700 hover:bg-gray-750' 
                                    : 'border-gray-200 hover:bg-gray-50'
                            }`}>
                                <TableCell>
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                                            <AvatarFallback className="bg-blue-600 text-white text-xs">
                                                {transaction.avatar}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0 flex-1">
                                            <p className={`font-medium text-xs sm:text-sm truncate ${
                                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                                            }`}>{transaction.service}</p>
                                            <p className={`text-xs truncate ${
                                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                            }`}>{transaction.account}</p>
                                            <div className="sm:hidden flex items-center gap-2 mt-1">
                                                <span className={`font-semibold text-xs ${transaction.amount < 0 ? 'text-red-400' : 'text-green-400'}`}>
                                                    {transaction.amount < 0 ? '-' : '+'}R${Math.abs(transaction.amount).toLocaleString('pt-BR')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">
                                    <span className={`font-semibold text-sm ${transaction.amount < 0 ? 'text-red-400' : 'text-green-400'}`}>
                                        {transaction.amount < 0 ? '-' : '+'}R${Math.abs(transaction.amount).toLocaleString('pt-BR')}
                                    </span>
                                </TableCell>
                                <TableCell className={`text-xs sm:text-sm hidden md:table-cell ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                    {formatDate(transaction.date)}
                                </TableCell>
                                <TableCell>
                                    <span className={`px-1 sm:px-2 py-1 rounded-full text-xs font-medium ${
                                        transaction.status === 'success' 
                                            ? 'bg-green-900 text-green-400' 
                                            : 'bg-orange-900 text-orange-400'
                                    }`}>
                                        {transaction.status === 'success' ? 'Sucesso' : 'Pendente'}
                                    </span>
                                </TableCell>
                                <TableCell className={`text-xs sm:text-sm hidden lg:table-cell ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                    {transaction.time}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
                <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                    Mostrando {startIndex + 1} a {Math.min(startIndex + itemsPerPage, filteredTransactions.length)} de {filteredTransactions.length} resultados
                </p>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`${
                            theme === 'dark' 
                                ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600' 
                                : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                        }`}
                    >
                        <ChevronLeftIcon className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <Button
                                key={page}
                                variant={currentPage === page ? "default" : "outline"}
                                size="sm"
                                onClick={() => setCurrentPage(page)}
                                className={currentPage === page 
                                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                                    : theme === 'dark'
                                        ? "bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                                        : "bg-white border-gray-300 text-gray-900 hover:bg-gray-50"
                                }
                            >
                                {page}
                            </Button>
                        ))}
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`${
                            theme === 'dark' 
                                ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600' 
                                : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
                        }`}
                    >
                        <ChevronRightIcon className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </Card>
    );
}