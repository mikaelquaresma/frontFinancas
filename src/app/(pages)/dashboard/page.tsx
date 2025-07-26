"use client";

import LayoutWrapper from "@/components/(layout)/layout";
import BalanceCards from "@/components/dashboard/BalanceCards";
import TransactionReports from "@/components/dashboard/TransactionReports";
import RecentTransactions from "@/components/dashboard/RecentTransactions";
import MyCards from "@/components/dashboard/MyCards";
import ExpensesChart from "@/components/dashboard/ExpensesChart";

const mockData = {
    balance: {
        totalBalance: 10250.00,
        debit: 3500.00,
        credit: 4200.00
    },
    transactionReports: {
        currentValue: 750,
        data: [300, 400, 350, 500, 450, 600, 750, 650, 550, 400, 600, 700]
    },
    recentTransactions: [
        {
            id: 1,
            service: "Plano Figma Pro",
            account: "Figma",
            amount: -5000,
            date: "19 Dez, 2024",
            status: "success",
            time: "5 min atras",
            avatar: "FP"
        },
        {
            id: 2,
            service: "Plano Youtube Pro",
            account: "Youtube",
            amount: -2500,
            date: "12 Dez, 2024",
            status: "pending",
            time: "7 min atras",
            avatar: "YT"
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

export default function DashboardPage() {
    return (
        <LayoutWrapper>
            <div className="min-h-screen text-white p-3 sm:p-4 lg:p-6" style={{ backgroundColor: 'lab(5 0.05 -4.54)' }}>
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
        </LayoutWrapper>
    );
}