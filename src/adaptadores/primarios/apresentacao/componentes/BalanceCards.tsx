"use client";

import { Card } from "@/compartilhado/ui/card";
import { MoreVertical, ArrowUp, ArrowDown } from "lucide-react";
import { useTheme } from "@/compartilhado/contextos/ThemeContext";

interface BalanceData {
    totalBalance: number;
    debit: number;
    credit: number;
}

interface BalanceCardsProps {
    data: BalanceData;
}

export default function BalanceCards({ data }: BalanceCardsProps) {
    const { theme } = useTheme();
    
    const cards = [
        {
            title: "Saldo Total",
            value: data.totalBalance,
            trend: "+2.1% maior que",
            period: "Mes Passado",
            isPositive: true,
            icon: ArrowUp
        },
        {
            title: "Debito",
            value: data.debit,
            trend: "+2.1% maior que",
            period: "Mes Passado",
            isPositive: false,
            icon: ArrowDown
        },
        {
            title: "Credito",
            value: data.credit,
            trend: "+3% aumento em",
            period: "Mes Passado",
            isPositive: true,
            icon: ArrowUp
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                    <Card key={index} className={`p-3 sm:p-4 ${
                        theme === 'dark' 
                            ? 'bg-gray-800 border-gray-700' 
                            : 'bg-white border-gray-200 shadow-sm'
                    }`}>
                        <div className="flex items-center justify-between mb-1">
                            <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                {card.title}
                            </span>
                            <MoreVertical className={`h-4 w-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
                        </div>
                        <div className={`text-lg sm:text-xl font-bold mb-1 break-words ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                            R${card.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                        <div className="flex items-center text-sm">
                            <Icon className={`h-3 w-3 mr-1 ${card.isPositive ? 'text-green-400' : 'text-red-400'}`} />
                            <span className={card.isPositive ? 'text-green-400' : 'text-red-400'}>
                                {card.trend}
                            </span>
                        </div>
                        <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                            {card.period}
                        </span>
                    </Card>
                );
            })}
        </div>
    );
}