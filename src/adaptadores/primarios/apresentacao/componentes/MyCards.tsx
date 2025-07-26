"use client";

import { Card } from "@/compartilhado/ui/card";
import { Plus, ArrowUp, ArrowDown, TrendingUp, CreditCard } from "lucide-react";

interface CardData {
    number: string;
    holder: string;
    expiry: string;
}

interface MyCardsProps {
    cardData: CardData;
}

export default function MyCards({ cardData }: MyCardsProps) {
    const actions = [
        { icon: Plus, label: "Add" },
        { icon: ArrowUp, label: "Send" },
        { icon: ArrowDown, label: "Received" },
        { icon: TrendingUp, label: "History" }
    ];

    return (
        <Card className="bg-gradient-to-br from-blue-600 to-purple-700 border-0 p-3 sm:p-4 text-white">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Meus Cartoes</h3>
                <button className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors">
                    <Plus className="h-4 w-4" />
                </button>
            </div>
            
            <div className="space-y-3">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-6 bg-white/20 rounded"></div>
                    <span className="text-lg font-mono tracking-wider">SobraMais</span>
                </div>
                
                <div className="text-lg sm:text-xl font-mono tracking-wider break-all">
                    {cardData.number}
                </div>
                
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-sm opacity-80">{cardData.holder}</p>
                        <p className="text-sm opacity-80">{cardData.expiry}</p>
                    </div>
                    <div className="w-12 h-8 bg-white/20 rounded-md flex items-center justify-center">
                        <CreditCard className="h-5 w-5" />
                    </div>
                </div>
            </div>
            
            {/* Card Actions */}
            <div className="grid grid-cols-2 sm:flex gap-2 mt-3">
                {actions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                        <button 
                            key={index}
                            className="flex-1 bg-white/20 hover:bg-white/30 rounded-lg py-2 px-2 sm:px-3 text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1 sm:gap-2"
                        >
                            <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline">{action.label}</span>
                            <span className="sm:hidden">{action.label.charAt(0)}</span>
                        </button>
                    );
                })}
            </div>
        </Card>
    );
}