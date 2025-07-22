export default function FooterSection() {
  return (
    <footer className="py-12 bg-gray-900 text-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Endereço</h3>
            <p className="text-gray-400">
              Av. Paulista, 1000<br />
              São Paulo - SP<br />
              CEP: 01310-100
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Contato</h3>
            <p className="text-gray-400">
              Email: contato@fintech.com.br<br />
              Telefone: (11) 9999-9999
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-1 text-gray-400">
              <li>Termos de Serviço</li>
              <li>Política de Privacidade</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Acompanhe</h3>
            <p className="text-gray-400">
              Mantenha-se atualizado com as últimas novidades
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2023 Fintech Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}