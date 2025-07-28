"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { usePlan } from "@/stores/PlanContext";
import PlanExpiredModal from "@/components/PlanExpiredModal";

interface PlanGuardProps {
  children: React.ReactNode;
}

export default function PlanGuard({ children }: PlanGuardProps) {
  const { isExpired } = usePlan();
  const router = useRouter();
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isExpired) {
      // PLANO EXPIRADO: Bloquear navegação e mostrar modal
      if (pathname !== "/dashboard") {
        router.push("/dashboard");
      }
      // Mostrar modal após um pequeno delay
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 500);
      
      return () => clearTimeout(timer);
    } else {
      // PLANO ATIVO: Sistema funciona 100% normalmente
      setShowModal(false);
      // Navegação livre para todas as páginas
      // Sidebar habilitada completamente
      // Nenhum bloqueio ou restrição
    }
  }, [isExpired, pathname, router]);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      {children}
      <PlanExpiredModal 
        isOpen={showModal} 
        onClose={handleModalClose}
      />
    </>
  );
}