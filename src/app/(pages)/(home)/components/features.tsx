export default function FeaturesSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Últimas transações
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Transações rápidas em poucos segundos
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-xl">💳</span>
                </div>
                <div>
                  <h3 className="font-semibold">Cartão Visa Gold</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Pagamento processado
                  </p>
                </div>
                <div className="ml-auto text-green-500 font-semibold">
                  R$ 88.200,00
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Features"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </div>
    </section>
  );
}