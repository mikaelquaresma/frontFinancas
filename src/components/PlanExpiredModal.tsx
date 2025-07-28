"use client";

import { useState } from "react";
import { useTheme } from "@/stores/ThemeContext";
import { usePlan } from "@/stores/PlanContext";
import { useTranslation } from "@/hooks/useTranslation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Crown, 
  CheckCircle, 
  Zap, 
  Shield, 
  BarChart3,
  Users,
  ArrowRight
} from "lucide-react";

interface PlanExpiredModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

export default function PlanExpiredModal({ isOpen, onClose }: PlanExpiredModalProps) {
  const { theme } = useTheme();
  const { renewPlan } = usePlan();
  const { t } = useTranslation();
  const [isRenewing, setIsRenewing] = useState(false);

  const handleRenew = async () => {
    setIsRenewing(true);
    
    // Simular processo de renovação
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    renewPlan();
    setIsRenewing(false);
    
    if (onClose) {
      onClose();
    }
  };

  const features = [
    { icon: BarChart3, text: t("plano.recursos.relatorios") },
    { icon: Shield, text: t("plano.recursos.seguranca") },
    { icon: Users, text: t("plano.recursos.suporte") },
    { icon: Zap, text: t("plano.recursos.processamento") }
  ];

  const plans = [
    {
      name: "Pro",
      price: "R$ 29,90",
      period: "/mês",
      popular: true,
      features: [t("plano.pro.recursos.1"), t("plano.pro.recursos.2"), t("plano.pro.recursos.3"), t("plano.pro.recursos.4")]
    },
    {
      name: "Business",
      price: "R$ 79,90", 
      period: "/mês",
      popular: false,
      features: [t("plano.business.recursos.1"), t("plano.business.recursos.2"), t("plano.business.recursos.3"), t("plano.business.recursos.4")]
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`max-w-4xl max-h-[90vh] overflow-y-auto ${
        theme === 'dark' 
          ? 'bg-gray-900 border-gray-700 text-white' 
          : 'bg-white border-gray-200 text-gray-900'
      }`}>
        <DialogHeader className="text-center pb-6">
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
            <Crown className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className={`text-2xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t("plano.expirado.titulo")}
          </DialogTitle>
          <DialogDescription className={`text-base ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t("plano.expirado.descricao")}
          </DialogDescription>
        </DialogHeader>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className={`text-center p-4 rounded-lg border ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <Icon className={`w-8 h-8 mx-auto mb-2 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <p className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6 py-6">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-xl border-2 p-6 ${
              plan.popular 
                ? 'border-blue-500 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20' 
                : theme === 'dark' 
                  ? 'border-gray-700 bg-gray-800' 
                  : 'border-gray-200 bg-white'
            }`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1">
                  {t("plano.mais.popular")}
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className={`text-3xl font-bold ${
                    plan.popular ? 'text-blue-600' : theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={handleRenew}
                disabled={isRenewing}
                className={`w-full ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : theme === 'dark'
                      ? 'bg-gray-700 hover:bg-gray-600 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                {isRenewing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {t("plano.processando")}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    {t("plano.escolher")} {plan.name}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center py-4 border-t ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {t("plano.rodape")}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}