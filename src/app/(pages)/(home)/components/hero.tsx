import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Soluções de Pagamento Confiáveis
              </h1>
              <p className="text-2xl font-semibold text-primary">R$ 258,90</p>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Todos os seus módulos financeiros em um único aplicativo. Revolucionando o futuro das finanças: 
                Liberando o poder do Fintech.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="w-full sm:w-auto">Comece Agora</Button>
              <Button className="w-full sm:w-auto" variant="outline">
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="https://img.freepik.com/free-photo/3d-character-emerging-from-smartphone_23-2151336670.jpg?t=st=1752990012~exp=1752993612~hmac=af304a069d3574dba29c6903bedd1439aefb380c24b54b3412befa15ba92a4b9&w=996"
              width="550"
            />
          </div>
        </div>
      </div>
    </section>
  );
}