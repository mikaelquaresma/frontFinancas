import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Antes desta solução, era um processo da idade das trevas. Tínhamos pessoas trabalhando apenas com despesas em tempo integral, era miserável, não havia integração, tudo era manual.",
      author: "Carlos Silva",
      role: "CFO na TechCorp",
    },
    {
      quote:
        "Esta plataforma transformou nossas operações financeiras. Tudo agora é automatizado e integrado perfeitamente.",
      author: "Ana Oliveira",
      role: "Diretora Financeira na Innovate Inc",
    },
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <Carousel className="w-full max-w-2xl">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <blockquote className="text-lg italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="mt-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}