"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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

interface RecentTransactionsProps {
    transactions: Transaction[];
}

export default function RecentTransactions({ transactions }: RecentTransactionsProps) {
    return (
        <Card className="bg-gray-800 border-gray-700 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                <h3 className="text-base sm:text-lg font-semibold text-white">Transacoes Recentes</h3>
                <select className="bg-gray-700 border-gray-600 text-white text-sm rounded px-3 py-1 w-full sm:w-auto">
                    <option>Hoje</option>
                    <option>Esta Semana</option>
                    <option>Este Mes</option>
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-gray-400 text-xs sm:text-sm">
                            <th className="pb-3">Conta</th>
                            <th className="pb-3 hidden sm:table-cell">Valor</th>
                            <th className="pb-3 hidden md:table-cell">Data</th>
                            <th className="pb-3">Status</th>
                            <th className="pb-3 hidden lg:table-cell">Tempo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className="border-t border-gray-700">
                                <td className="py-3 sm:py-4">
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                                            <AvatarFallback className="bg-blue-600 text-white text-xs">
                                                {transaction.avatar}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-white font-medium text-xs sm:text-sm truncate">{transaction.service}</p>
                                            <p className="text-gray-400 text-xs truncate">{transaction.account}</p>
                                            <div className="sm:hidden flex items-center gap-2 mt-1">
                                                <span className={`font-semibold text-xs ${transaction.amount < 0 ? 'text-red-400' : 'text-green-400'}`}>
                                                    {transaction.amount < 0 ? '-' : '+'}R${Math.abs(transaction.amount).toLocaleString('pt-BR')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 sm:py-4 hidden sm:table-cell">
                                    <span className={`font-semibold text-sm ${transaction.amount < 0 ? 'text-red-400' : 'text-green-400'}`}>
                                        {transaction.amount < 0 ? '-' : '+'}R${Math.abs(transaction.amount).toLocaleString('pt-BR')}
                                    </span>
                                </td>
                                <td className="py-3 sm:py-4 text-gray-400 text-xs sm:text-sm hidden md:table-cell">{transaction.date}</td>
                                <td className="py-3 sm:py-4">
                                    <span className={`px-1 sm:px-2 py-1 rounded-full text-xs font-medium ${
                                        transaction.status === 'success' 
                                            ? 'bg-green-900 text-green-400' 
                                            : 'bg-orange-900 text-orange-400'
                                    }`}>
                                        {transaction.status === 'success' ? 'Sucesso' : 'Pendente'}
                                    </span>
                                </td>
                                <td className="py-3 sm:py-4 text-gray-400 text-xs sm:text-sm hidden lg:table-cell">{transaction.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}