export default function PartnersSection() {
  const partners = [
    { name: "Stripe", logo: "/images/partners/stripe.svg" },
    { name: "PayPal", logo: "/images/partners/paypal.svg" },
    { name: "Google Pay", logo: "/images/partners/gpay.svg" },
    { name: "Skrill", logo: "/images/partners/skrill.svg" },
    { name: "Pineapple", logo: "/images/partners/pineapple.svg" },
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-lg font-semibold text-gray-500 dark:text-gray-400">
            Alguns dos nossos Parceiros/Afiliados
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}