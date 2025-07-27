"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type PrimaryColor = '#0060d1' | '#5b1695' | '#ae1877' | '#18a3ae' | '#43ae18' | '#000';
type Language = 'pt-br' | 'en' | 'es';

interface ThemeContextType {
  theme: Theme;
  primaryColor: PrimaryColor;
  language: Language;
  toggleTheme: () => void;
  setPrimaryColor: (color: PrimaryColor) => void;
  setLanguage: (lang: Language) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [primaryColor, setPrimaryColorState] = useState<PrimaryColor>('#0060d1');
  const [language, setLanguageState] = useState<Language>('pt-br');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      const savedColor = localStorage.getItem('primaryColor') as PrimaryColor;
      const savedLanguage = localStorage.getItem('language') as Language;
      
      if (savedTheme) {
        setTheme(savedTheme);
      }
      if (savedColor) {
        setPrimaryColorState(savedColor);
        applyPrimaryColor(savedColor);
      }
      if (savedLanguage) {
        setLanguageState(savedLanguage);
      }
    }
  }, []);

  const applyPrimaryColor = (color: PrimaryColor) => {
    if (typeof window !== 'undefined') {
      // Update CSS custom properties for primary color
      const root = document.documentElement;
      
      // Convert hex to RGB for CSS variables
      const hex = color.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      
      root.style.setProperty('--primary-color', color);
      root.style.setProperty('--primary-rgb', `${r}, ${g}, ${b}`);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  const setPrimaryColor = (color: PrimaryColor) => {
    setPrimaryColorState(color);
    applyPrimaryColor(color);
    if (typeof window !== 'undefined') {
      localStorage.setItem('primaryColor', color);
    }
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, primaryColor, language, toggleTheme, setPrimaryColor, setLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}