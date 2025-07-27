import { useTheme } from '@/stores/ThemeContext';

const translations = {
  'pt-br': {
    // Navegação
    'dashboard': 'Dashboard',
    'transferencias': 'Transferências',
    'relatorios': 'Relatórios',
    'configuracoes': 'Configurações',
    'sair': 'Sair',
    
    // Menu Lateral
    'menu.inicio': 'Início',
    'menu.contas': 'Contas',
    'menu.transacoes': 'Transações',
    'menu.relatorios': 'Relatórios',
    'menu.despesas': 'Despesas',
    'menu.notificacoes': 'Notificações',
    'menu.mensagens': 'Mensagens',
    'menu.configuracoes': 'Configurações',
    'menu.ajuda': 'Ajuda',
    
    // Barra de Navegação
    'nav.inicio': 'Início',
    'nav.transferencias': 'Transferências',
    'nav.relatorios': 'Relatórios',
    'nav.configuracoes': 'Configurações',
    'nav.transferencias.subtitulo': 'Gerencie suas transferências e depósitos',
    'nav.relatorios.subtitulo': 'Análise detalhada de receitas e despesas',
    'nav.configuracoes.subtitulo': 'Personalize sua experiência no SobraMais',
    
    // Página Inicial
    'inicio.hero.titulo': 'A REVOLUÇÃO FINANCEIRA',
    'inicio.hero.subtitulo': 'CHEGOU AO BRASIL',
    'inicio.hero.descricao': 'Transforme sua vida financeira com tecnologia de ponta e segurança bancária.',
    'inicio.hero.botao': 'Começar Agora',
    'inicio.hero.selo': '✨ Melhor Solução Financeira',
    'inicio.hero.sobra': 'SOBRA MELHOR',
    
    // Recursos
    'inicio.recursos.titulo': 'PROTEJA SEUS INVESTIMENTOS COM',
    'inicio.recursos.subtitulo': 'PRECISÃO EMOCIONANTE',
    'inicio.recursos.seguranca.titulo': 'Segurança Máxima',
    'inicio.recursos.seguranca.descricao': 'Protegemos seus dados com criptografia de nível bancário e autenticação em duas etapas.',
    'inicio.recursos.analise.titulo': 'Análise Inteligente',
    'inicio.recursos.analise.descricao': 'Relatórios detalhados e insights para otimizar seus investimentos e gastos.',
    'inicio.recursos.crescimento.titulo': 'Crescimento Real',
    'inicio.recursos.crescimento.descricao': 'Veja seu dinheiro crescer com nossas estratégias personalizadas de investimento.',
    
    // Configurações
    'config.perfil': 'Perfil',
    'config.aparencia': 'Aparência',
    'config.conta': 'Conta',
    'config.privacidade': 'Privacidade',
    'config.cobranca': 'Cobrança',
    'config.conectores': 'Conectores',
    'config.tema': 'Tema',
    'config.modo.escuro': 'Modo escuro',
    'config.modo.escuro.descricao': 'Ativar tema escuro da interface',
    'config.cor.primaria': 'Cor Primária',
    'config.cor.primaria.descricao': 'Escolha a cor principal do sistema',
    'config.idioma': 'Idioma',
    'config.idioma.descricao': 'Idioma da interface',
    
    // Cores
    'cores.azul': 'Azul (Padrão)',
    'cores.roxo': 'Roxo',
    'cores.rosa': 'Rosa',
    'cores.ciano': 'Ciano',
    'cores.verde': 'Verde',
    'cores.preto': 'Preto',
    
    // Idiomas
    'idioma.pt-br': 'Português (Brasil)',
    'idioma.en': 'English',
    'idioma.es': 'Español',
    
    // Dashboard
    'dashboard.bem.vindo': 'Bem-vindo de volta',
    'dashboard.saldo.total': 'Saldo Total',
    'dashboard.receita': 'Receita',
    'dashboard.gastos': 'Gastos',
    'dashboard.transacoes.recentes': 'Transações Recentes',
    'dashboard.meus.cartoes': 'Meus Cartões',
    
    // Transferências
    'transferencias.titulo': 'Transferências',
    'transferencias.total': 'Total Transferido',
    
    // Relatórios
    'relatorios.titulo': 'Relatórios',
    
    // Comum
    'comum.salvar': 'Salvar',
    'comum.cancelar': 'Cancelar',
    'comum.editar': 'Editar',
    'comum.excluir': 'Excluir',
    'comum.fechar': 'Fechar',
    'comum.carregando': 'Carregando...',

  },
  
  'en': {
    // Navigation
    'dashboard': 'Dashboard',
    'transfers': 'Transfers',
    'reports': 'Reports',
    'settings': 'Settings',
    'logout': 'Logout',
    
    // Sidebar
    'sidebar.home': 'Home',
    'sidebar.accounts': 'Accounts',
    'sidebar.transactions': 'Transactions',
    'sidebar.reports': 'Reports',
    'sidebar.expenses': 'Expenses',
    'sidebar.notifications': 'Notifications',
    'sidebar.messages': 'Messages',
    'sidebar.settings': 'Settings',
    'sidebar.help': 'Help',
    
    // Navbar
    'navbar.home': 'Home',
    'navbar.transfers': 'Transfers',
    'navbar.reports': 'Reports',
    'navbar.settings': 'Settings',
    'navbar.transfers.subtitle': 'Manage your transfers and deposits',
    'navbar.reports.subtitle': 'Detailed analysis of income and expenses',
    'navbar.settings.subtitle': 'Customize your SobraMais experience',
    
    // Home Page
    'home.hero.title': 'THE FINANCIAL REVOLUTION',
    'home.hero.subtitle': 'HAS ARRIVED IN BRAZIL',
    'home.hero.description': 'Transform your financial life with cutting-edge technology and banking security.',
    'home.hero.cta': 'Get Started',
    'home.hero.badge': '✨ Best Financial Solution',
    'home.hero.sobra': 'SOBRA BETTER',
    
    // Features
    'home.features.title': 'PROTECT YOUR INVESTMENTS WITH',
    'home.features.subtitle': 'EXCITING PRECISION',
    'home.features.security.title': 'Maximum Security',
    'home.features.security.desc': 'We protect your data with bank-level encryption and two-factor authentication.',
    'home.features.analytics.title': 'Smart Analytics',
    'home.features.analytics.desc': 'Detailed reports and insights to optimize your investments and expenses.',
    'home.features.growth.title': 'Real Growth',
    'home.features.growth.desc': 'Watch your money grow with our personalized investment strategies.',
    
    // Settings
    'settings.profile': 'Profile',
    'settings.appearance': 'Appearance',
    'settings.account': 'Account',
    'settings.privacy': 'Privacy',
    'settings.billing': 'Billing',
    'settings.connectors': 'Connectors',
    'settings.theme': 'Theme',
    'settings.darkMode': 'Dark mode',
    'settings.darkModeDesc': 'Enable dark theme for the interface',
    'settings.primaryColor': 'Primary Color',
    'settings.primaryColorDesc': 'Choose the main system color',
    'settings.language': 'Language',
    'settings.languageDesc': 'Interface language',
    
    // Colors
    'colors.blue': 'Blue (Default)',
    'colors.purple': 'Purple',
    'colors.pink': 'Pink',
    'colors.cyan': 'Cyan',
    'colors.green': 'Green',
    'colors.black': 'Black',
    
    // Languages
    'lang.pt-br': 'Português (Brasil)',
    'lang.en': 'English',
    'lang.es': 'Español',
    
    // Dashboard
    'dashboard.welcome': 'Welcome back',
    'dashboard.balance': 'Total Balance',
    'dashboard.income': 'Income',
    'dashboard.expenses': 'Expenses',
    'dashboard.recentTransactions': 'Recent Transactions',
    'dashboard.myCards': 'My Cards',
    
    // Transfers
    'transfers.title': 'Transfers',
    'transfers.totalTransferred': 'Total Transferred',
    
    // Reports
    'reports.title': 'Reports',
    
    // Common
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.close': 'Close',
    'common.loading': 'Loading...',
  },
  
  'es': {
    // Navigation
    'dashboard': 'Panel',
    'transfers': 'Transferencias',
    'reports': 'Informes',
    'settings': 'Configuración',
    'logout': 'Cerrar sesión',
    
    // Sidebar
    'sidebar.home': 'Inicio',
    'sidebar.accounts': 'Cuentas',
    'sidebar.transactions': 'Transacciones',
    'sidebar.reports': 'Informes',
    'sidebar.expenses': 'Gastos',
    'sidebar.notifications': 'Notificaciones',
    'sidebar.messages': 'Mensajes',
    'sidebar.settings': 'Configuración',
    'sidebar.help': 'Ayuda',
    
    // Navbar
    'navbar.home': 'Inicio',
    'navbar.transfers': 'Transferencias',
    'navbar.reports': 'Informes',
    'navbar.settings': 'Configuración',
    'navbar.transfers.subtitle': 'Gestiona tus transferencias y depósitos',
    'navbar.reports.subtitle': 'Análisis detallado de ingresos y gastos',
    'navbar.settings.subtitle': 'Personaliza tu experiencia SobraMais',
    
    // Home Page
    'home.hero.title': 'LA REVOLUCIÓN FINANCIERA',
    'home.hero.subtitle': 'HA LLEGADO A BRASIL',
    'home.hero.description': 'Transforma tu vida financiera con tecnología de vanguardia y seguridad bancaria.',
    'home.hero.cta': 'Comenzar',
    'home.hero.badge': '✨ Mejor Solución Financiera',
    'home.hero.sobra': 'SOBRA MEJOR',
    
    // Features
    'home.features.title': 'PROTEGE TUS INVERSIONES CON',
    'home.features.subtitle': 'PRECISIÓN EMOCIONANTE',
    'home.features.security.title': 'Seguridad Máxima',
    'home.features.security.desc': 'Protegemos tus datos con encriptación de nivel bancario y autenticación de dos factores.',
    'home.features.analytics.title': 'Análisis Inteligente',
    'home.features.analytics.desc': 'Informes detallados e insights para optimizar tus inversiones y gastos.',
    'home.features.growth.title': 'Crecimiento Real',
    'home.features.growth.desc': 'Ve tu dinero crecer con nuestras estrategias de inversión personalizadas.',
    
    // Settings
    'settings.profile': 'Perfil',
    'settings.appearance': 'Apariencia',
    'settings.account': 'Cuenta',
    'settings.privacy': 'Privacidad',
    'settings.billing': 'Facturación',
    'settings.connectors': 'Conectores',
    'settings.theme': 'Tema',
    'settings.darkMode': 'Modo oscuro',
    'settings.darkModeDesc': 'Activar tema oscuro para la interfaz',
    'settings.primaryColor': 'Color Primario',
    'settings.primaryColorDesc': 'Elige el color principal del sistema',
    'settings.language': 'Idioma',
    'settings.languageDesc': 'Idioma de la interfaz',
    
    // Colors
    'colors.blue': 'Azul (Predeterminado)',
    'colors.purple': 'Morado',
    'colors.pink': 'Rosa',
    'colors.cyan': 'Cian',
    'colors.green': 'Verde',
    'colors.black': 'Negro',
    
    // Languages
    'lang.pt-br': 'Português (Brasil)',
    'lang.en': 'English',
    'lang.es': 'Español',
    
    // Dashboard
    'dashboard.welcome': 'Bienvenido de vuelta',
    'dashboard.balance': 'Saldo Total',
    'dashboard.income': 'Ingresos',
    'dashboard.expenses': 'Gastos',
    'dashboard.recentTransactions': 'Transacciones Recientes',
    'dashboard.myCards': 'Mis Tarjetas',
    
    // Transfers
    'transfers.title': 'Transferencias',
    'transfers.totalTransferred': 'Total Transferido',
    
    // Reports
    'reports.title': 'Informes',
    
    // Common
    'common.save': 'Guardar',
    'common.cancel': 'Cancelar',
    'common.edit': 'Editar',
    'common.delete': 'Eliminar',
    'common.close': 'Cerrar',
    'common.loading': 'Cargando...',
  }
};

export function useTranslation() {
  const { language } = useTheme();
  
  const t = (key: string): string => {
    const langTranslations = translations[language] as Record<string, string>;
    const fallbackTranslations = translations['pt-br'] as Record<string, string>;
    return langTranslations?.[key] || fallbackTranslations[key] || key;
  };
  
  return { t };
}