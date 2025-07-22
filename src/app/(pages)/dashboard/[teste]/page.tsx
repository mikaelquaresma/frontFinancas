"use client";

import LayoutWrapper from "@/components/(layout)/layout";
import { useParams } from "next/navigation";

export default function DashboardPage() {
    const params = useParams();
    const id = params.teste;

    return (
        <LayoutWrapper>
            <div>
                <h1>Dashboard ID: {id}</h1>
            </div>
        </LayoutWrapper>
    );
}
