import { useTheme } from '@/stores/ThemeContext';
import { ptBR } from '@/locales/pt-br';
import { en } from '@/locales/en';
import { es } from '@/locales/es';

const translations = {
  'pt-br': ptBR,
  'en': en,
  'es': es
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