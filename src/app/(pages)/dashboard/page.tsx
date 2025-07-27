"use client";

import WrapperLayout from "@/components/layout";
import BalanceCards from "@/features/dashboard/components/BalanceCards";
import TransactionReports from "@/features/dashboard/components/TransactionReports";
import RecentTransactions from "@/features/dashboard/components/RecentTransactions";
import MyCards from "@/features/dashboard/components/MyCards";
import ExpensesChart from "@/features/dashboard/components/ExpensesChart";
import { useTheme, ThemeProvider } from "@/stores/ThemeContext";

const mockData = {
    balance: {
        totalBalance: 10250.00,
        debit: 3500.00,
        credit: 4200.00
    },
    transactionReports: {
        currentValue: 750,
        data: [
            { month: 'Jan', value: 300 },
            { month: 'Fev', value: 400 },
            { month: 'Mar', value: 350 },
            { month: 'Abr', value: 500 },
            { month: 'Mai', value: 450 },
            { month: 'Jun', value: 600 },
            { month: 'Jul', value: 750 },
            { month: 'Ago', value: 650 },
            { month: 'Set', value: 550 },
            { month: 'Out', value: 400 },
            { month: 'Nov', value: 600 },
            { month: 'Dez', value: 700 }
        ]
    },
    recentTransactions: [
        {
            id: 1,
            service: "Plano Figma Pro",
            account: "Figma",
            amount: -5000,
            date: "2025-07-26",
            status: "success",
            time: "5 min atras",
            avatar: "FP"
        },
        {
            id: 2,
            service: "Plano Youtube Pro",
            account: "Youtube",
            amount: -2500,
            date: "2025-07-26",
            status: "pending",
            time: "7 min atras",
            avatar: "YT"
        },
        {
            id: 16,
            service: "Compra Farmácia",
            account: "Mastercard",
            amount: -8750,
            date: "2025-07-26",
            status: "success",
            time: "2 horas atras",
            avatar: "MC"
        },
        {
            id: 17,
            service: "Venda Produto",
            account: "Mercado Pago",
            amount: 12500,
            date: "2025-07-26",
            status: "success",
            time: "3 horas atras",
            avatar: "MP"
        },
        {
            id: 3,
            service: "Transferencia PIX",
            account: "Nubank",
            amount: 3200,
            date: "2025-07-25",
            status: "success",
            time: "1 dia atras",
            avatar: "NB"
        },
        {
            id: 4,
            service: "Assinatura Netflix",
            account: "Netflix",
            amount: -2999,
            date: "2025-07-24",
            status: "success",
            time: "2 dias atras",
            avatar: "NF"
        },
        {
            id: 5,
            service: "Deposito Conta",
            account: "Santander",
            amount: 15000,
            date: "2025-07-23",
            status: "pending",
            time: "3 dias atras",
            avatar: "ST"
        },
        {
            id: 6,
            service: "Compra Supermercado",
            account: "Visa",
            amount: -1850,
            date: "2025-07-22",
            status: "success",
            time: "4 dias atras",
            avatar: "VS"
        },
        {
            id: 7,
            service: "Freelance Projeto",
            account: "PayPal",
            amount: 8500,
            date: "2025-07-21",
            status: "success",
            time: "5 dias atras",
            avatar: "PP"
        },
        {
            id: 8,
            service: "Aluguel Apartamento",
            account: "Caixa",
            amount: -25000,
            date: "2025-07-20",
            status: "success",
            time: "6 dias atras",
            avatar: "CX"
        },
        {
            id: 9,
            service: "Spotify Premium",
            account: "Spotify",
            amount: -1690,
            date: "2025-06-26",
            status: "success",
            time: "1 mes atras",
            avatar: "SP"
        },
        {
            id: 10,
            service: "Dividendos Acoes",
            account: "XP Investimentos",
            amount: 4750,
            date: "2025-06-25",
            status: "success",
            time: "1 mes atras",
            avatar: "XP"
        },
        {
            id: 11,
            service: "Uber Viagem",
            account: "Uber",
            amount: -4350,
            date: "2025-01-15",
            status: "success",
            time: "6 meses atras",
            avatar: "UB"
        },
        {
            id: 12,
            service: "Bonus Empresa",
            account: "Banco do Brasil",
            amount: 50000,
            date: "2025-01-10",
            status: "success",
            time: "6 meses atras",
            avatar: "BB"
        },
        {
            id: 13,
            service: "Amazon Prime",
            account: "Amazon",
            amount: -1499,
            date: "2024-12-26",
            status: "success",
            time: "7 meses atras",
            avatar: "AM"
        },
        {
            id: 14,
            service: "Investimento CDB",
            account: "Itau",
            amount: 75000,
            date: "2024-12-15",
            status: "success",
            time: "7 meses atras",
            avatar: "IT"
        },
        {
            id: 15,
            service: "Plano Saude",
            account: "Unimed",
            amount: -45000,
            date: "2024-11-26",
            status: "success",
            time: "8 meses atras",
            avatar: "UN"
        }
    ],
    expenses: {
        total: 1500,
        categories: [
            { name: "Compras", value: 30, color: "#3B82F6" },
            { name: "Alimentacao", value: 35, color: "#10B981" },
            { name: "Saude", value: 15, color: "#F59E0B" },
            { name: "Transporte", value: 20, color: "#EF4444" }
        ]
    },
    myCards: {
        number: "6219 8610 2888 8075",
        holder: "Marvin McKinney",
        expiry: "12/2026"
    }
};

function DashboardContent() {
    const { theme } = useTheme();
    
    return (
        <WrapperLayout filhos={
            <>
            <div className={`min-h-screen p-3 sm:p-4 lg:p-6 transition-colors ${
                theme === 'dark' 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-900'
            }`} style={theme === 'light' ? { backgroundColor: 'lab(95 -1.17 -3.31)' } : {}}>
                <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                        {/* Left Column */}
                        <div className="lg:col-span-8 space-y-4 sm:space-y-6">
                            {/* Balance Cards */}
                            <BalanceCards data={mockData.balance} />

                            {/* Transaction Reports */}
                            <TransactionReports data={mockData.transactionReports} />

                            {/* Recent Transactions */}
                            <RecentTransactions transactions={mockData.recentTransactions} />
                        </div>

                        {/* Right Column */}
                        <div className="lg:col-span-4 space-y-4 sm:space-y-6">
                            {/* My Cards */}
                            <MyCards cardData={mockData.myCards} />

                            {/* Expenses */}
                            <ExpensesChart data={mockData.expenses} />
                        </div>
                    </div>
                </div>
            </div>
            </>
        } />
    );
}

export default function DashboardPage() {
    return (
        <ThemeProvider>
            <DashboardContent />
        </ThemeProvider>
    );
}