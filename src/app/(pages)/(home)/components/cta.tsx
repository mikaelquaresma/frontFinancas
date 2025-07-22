import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            É fácil começar
          </h2>
          <p className="max-w-[600px] text-primary-foreground/90 md:text-xl">
            Baixe o app para explorar o mundo das finanças de forma moderna e eficiente.
          </p>
          <Button variant="secondary" className="mt-4">
            Baixar Agora
          </Button>
        </div>
      </div>
    </section>
  );
}