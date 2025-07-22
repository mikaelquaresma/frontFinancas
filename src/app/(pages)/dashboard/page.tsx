"use client";

import LayoutWrapper from "@/components/(layout)/layout";
import { useParams } from "next/navigation";

export default function DashboardPage() {
    const params = useParams();
    const id = params;

    return (
        <LayoutWrapper>
            <div>
                <h1>Dashboard ID:</h1>
            </div>
        </LayoutWrapper>
    );
}
