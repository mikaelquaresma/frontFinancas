export default function HowItWorks() {
  const steps = [
    {
      title: "Configure Sua Conta",
      description: "Crie sua conta em minutos",
      icon: "1",
    },
    {
      title: "Conecte Seus Sistemas",
      description: "Integre com suas ferramentas existentes",
      icon: "2",
    },
    {
      title: "Comece a Aceitar Pagamentos",
      description: "Ative e comece a processar transações",
      icon: "3",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Como funciona
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex flex-col items-center space-y-2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}