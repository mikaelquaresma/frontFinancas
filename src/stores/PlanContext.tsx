"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface PlanContextType {
  daysRemaining: number;
  isExpired: boolean;
  planEndDate: Date;
  planStartDate: Date;
  checkPlanStatus: () => void;
  renewPlan: () => void;
  resetPlan: () => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [planEndDate, setPlanEndDate] = useState<Date>(new Date());
  const [planStartDate, setPlanStartDate] = useState<Date>(new Date());
  const [daysRemaining, setDaysRemaining] = useState<number>(0);
  const [isExpired, setIsExpired] = useState<boolean>(false);

  // Data mock de expiração - usar variável de ambiente ou padrão
  const initializePlan = () => {
    const freePlanDays = parseInt(process.env.NEXT_PUBLIC_FREE_PLAN_DAYS || '30');
    const planStartDateEnv = process.env.NEXT_PUBLIC_PLAN_START_DATE;
    const autoReset = process.env.NEXT_PUBLIC_AUTO_RESET_PLAN === 'true';
    const isDebug = process.env.NEXT_PUBLIC_PLAN_DEBUG === 'true';
    
    let startDate: Date;
    
    // Se auto reset estiver ativado, sempre usar data atual
    if (autoReset) {
      startDate = new Date();
      if (isDebug) {
        console.log('PlanContext: Auto reset ativado, usando data atual como início');
      }
    } else if (planStartDateEnv) {
      // Usar data específica do .env
      startDate = new Date(planStartDateEnv);
      if (isDebug) {
        console.log(`PlanContext: Usando data do .env: ${planStartDateEnv}`);
      }
    } else {
      // Verificar se já existe uma data de início salva
      const savedStartDate = localStorage.getItem('planStartDate');
      if (savedStartDate) {
        startDate = new Date(savedStartDate);
        if (isDebug) {
          console.log(`PlanContext: Usando data salva: ${savedStartDate}`);
        }
      } else {
        startDate = new Date();
        localStorage.setItem('planStartDate', startDate.toISOString());
        if (isDebug) {
          console.log('PlanContext: Primeira execução, salvando data atual como início');
        }
      }
    }
    
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + freePlanDays);
    
    setPlanStartDate(startDate);
    setPlanEndDate(endDate);
    localStorage.setItem('planEndDate', endDate.toISOString());
    
    if (isDebug) {
      console.log(`PlanContext: Plano configurado para ${freePlanDays} dias`);
      console.log(`PlanContext: Data de início: ${startDate.toLocaleDateString('pt-BR')}`);
      console.log(`PlanContext: Data de fim: ${endDate.toLocaleDateString('pt-BR')}`);
    }
  };

  const checkPlanStatus = () => {
    const currentDate = new Date();
    const timeDifference = planEndDate.getTime() - currentDate.getTime();
    const days = Math.ceil(timeDifference / (1000 * 3600 * 24));
    const isDebug = process.env.NEXT_PUBLIC_PLAN_DEBUG === 'true';
    
    const daysLeft = Math.max(0, days);
    const expired = days <= 0;
    
    setDaysRemaining(daysLeft);
    setIsExpired(expired);
    
    if (isDebug && (daysLeft !== daysRemaining || expired !== isExpired)) {
      console.log(`PlanContext: Status atualizado - Dias restantes: ${daysLeft}, Expirado: ${expired}`);
    }
  };

  const renewPlan = () => {
    const freePlanDays = parseInt(process.env.NEXT_PUBLIC_FREE_PLAN_DAYS || '30');
    const isDebug = process.env.NEXT_PUBLIC_PLAN_DEBUG === 'true';
    
    const newStartDate = new Date();
    const newEndDate = new Date();
    newEndDate.setDate(newStartDate.getDate() + freePlanDays);
    
    // Atualizar datas no localStorage
    localStorage.setItem('planStartDate', newStartDate.toISOString());
    localStorage.setItem('planEndDate', newEndDate.toISOString());
    
    setPlanStartDate(newStartDate);
    setPlanEndDate(newEndDate);
    setIsExpired(false);
    checkPlanStatus();
    
    if (isDebug) {
      console.log(`PlanContext: Plano renovado por ${freePlanDays} dias`);
      console.log(`PlanContext: Nova data de fim: ${newEndDate.toLocaleDateString('pt-BR')}`);
    }
  };

  useEffect(() => {
    // Verificar se já existe uma data no localStorage
    const savedEndDate = localStorage.getItem('planEndDate');
    const savedStartDate = localStorage.getItem('planStartDate');
    
    if (savedEndDate && savedStartDate) {
      setPlanEndDate(new Date(savedEndDate));
      setPlanStartDate(new Date(savedStartDate));
    } else {
      initializePlan();
    }
  }, []);

  useEffect(() => {
    checkPlanStatus();
    
    // Verificar status a cada minuto
    const interval = setInterval(checkPlanStatus, 60000);
    
    return () => clearInterval(interval);
  }, [planEndDate]);

  const resetPlan = () => {
    const isDebug = process.env.NEXT_PUBLIC_PLAN_DEBUG === 'true';
    
    // Limpar dados salvos
    localStorage.removeItem('planStartDate');
    localStorage.removeItem('planEndDate');
    
    // Reinicializar plano
    initializePlan();
    
    if (isDebug) {
      console.log('PlanContext: Plano resetado com sucesso');
    }
  };

  return (
    <PlanContext.Provider value={{
      daysRemaining,
      isExpired,
      planEndDate,
      planStartDate,
      checkPlanStatus,
      renewPlan,
      resetPlan
    }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (context === undefined) {
    throw new Error('usePlan must be used within a PlanProvider');
  }
  return context;
}