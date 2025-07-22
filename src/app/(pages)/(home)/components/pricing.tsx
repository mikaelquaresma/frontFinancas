import { Card } from "@/components/ui/card";

export default function PricingSection() {
  const plans = [
    {
      name: "Inicial",
      price: "Grátis",
      features: ["Recursos básicos", "Transações limitadas", "Suporte por email"],
      recommended: false,
    },
    {
      name: "Negócios",
      price: "R$ 89",
      features: [
        "Recursos avançados",
        "Transações ilimitadas",
        "Suporte prioritário",
      ],
      recommended: true,
    },
    {
      name: "Empresarial",
      price: "Personalizado",
      features: [
        "Todos os recursos",
        "Transações ilimitadas",
        "Gerente de conta dedicado",
      ],
      recommended: false,
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Planos Flexíveis
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            Escolha o melhor plano para o seu cartão.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`p-6 ${plan.recommended ? "border-2 border-primary" : ""}`}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="text-3xl font-bold">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="text-gray-500">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-2 rounded-md ${plan.recommended ? "bg-primary text-white" : "bg-gray-100 dark:bg-gray-800"}`}
                  >
                    Comece Agora
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}