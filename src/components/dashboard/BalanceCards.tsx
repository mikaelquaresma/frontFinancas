"use client";

import { Card } from "@/components/ui/card";
import { MoreVertical, ArrowUp, ArrowDown } from "lucide-react";

interface BalanceData {
    totalBalance: number;
    debit: number;
    credit: number;
}

interface BalanceCardsProps {
    data: BalanceData;
}

export default function BalanceCards({ data }: BalanceCardsProps) {
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
                    <Card key={index} className="bg-gray-800 border-gray-700 p-3 sm:p-4">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-gray-400 text-sm">{card.title}</span>
                            <MoreVertical className="h-4 w-4 text-gray-400" />
                        </div>
                        <div className="text-lg sm:text-xl font-bold text-white mb-1 break-words">
                            R${card.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                        <div className="flex items-center text-sm">
                            <Icon className={`h-3 w-3 mr-1 ${card.isPositive ? 'text-green-400' : 'text-red-400'}`} />
                            <span className={card.isPositive ? 'text-green-400' : 'text-red-400'}>
                                {card.trend}
                            </span>
                        </div>
                        <span className="text-gray-400 text-xs">{card.period}</span>
                    </Card>
                );
            })}
        </div>
    );
}