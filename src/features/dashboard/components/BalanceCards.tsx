"use client";

import { Card } from "@/components/ui/card";
import { MoreVertical, ArrowUp, ArrowDown, CreditCard, Wallet } from "lucide-react";
import { useTheme } from "@/stores/ThemeContext";

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
            trendIcon: ArrowUp,
            mainIcon: Wallet
        },
        {
            title: "Débito",
            value: data.debit,
            trend: "+2.1% maior que",
            period: "Mes Passado",
            isPositive: false,
            trendIcon: ArrowDown,
            mainIcon: ArrowDown
        },
        {
            title: "Crédito",
            value: data.credit,
            trend: "+3% aumento em",
            period: "Mes Passado",
            isPositive: true,
            trendIcon: ArrowUp,
            mainIcon: CreditCard
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {cards.map((card, index) => {
                const TrendIcon = card.trendIcon;
                const MainIcon = card.mainIcon;
                return (
                    <Card key={index} className={`relative overflow-hidden p-3 sm:p-4 transition-all duration-300 hover:shadow-lg group ${
                        theme === 'dark' 
                            ? 'bg-gray-800 border-gray-700 hover:border-gray-600 hover:bg-gray-750' 
                            : 'bg-white border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50'
                    }`}>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className={`w-32 h-32 rounded-full ${
                                theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'
                            } -top-16 -right-16 absolute`}></div>
                        </div>
                        
                        {/* Header */}
                        <div className="relative flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <div className={`p-1.5 rounded-lg transition-transform group-hover:scale-110 ${
                                    theme === 'dark' 
                                        ? 'bg-gray-700 border border-gray-600' 
                                        : 'bg-gray-100 border border-gray-200'
                                }`}>
                                    <MainIcon className={`h-4 w-4 ${
                                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                    }`} />
                                </div>
                                <span className={`text-xs sm:text-sm font-medium ${
                                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    {card.title}
                                </span>
                            </div>
                            <MoreVertical className={`h-3 w-3 sm:h-4 sm:w-4 cursor-pointer transition-colors ${
                                theme === 'dark' 
                                    ? 'text-gray-400 hover:text-gray-300' 
                                    : 'text-gray-500 hover:text-gray-700'
                            }`} />
                        </div>
                        
                        {/* Value */}
                        <div className={`text-xl sm:text-2xl font-bold mb-2 break-words ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                            R$ {card.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                        
                        {/* Trend */}
                        <div className="flex items-center gap-1 mb-1">
                            <TrendIcon className={`h-3 w-3 ${
                                card.isPositive ? 'text-green-500' : 'text-red-500'
                            }`} />
                            <span className={`text-xs font-medium ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>{card.trend}</span>
                        </div>
                        
                        {/* Period */}
                        <div className={`text-xs ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                            {card.period}
                        </div>
                    </Card>
                );
            })}
        </div>
    );
}