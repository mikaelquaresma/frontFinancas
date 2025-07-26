"use client";

import WrapperLayout from "@/adaptadores/primarios/apresentacao/componentes/layout";
import { useParams } from "next/navigation";

export default function DashboardPage() {
    const params = useParams();
    const id = params.teste;

    return (
        <WrapperLayout filhos={
            <div>
                <h1>Dashboard ID: {id}</h1>
            </div>
        } />
    );
}
