"use client";

import { createContext, useContext, ReactNode } from 'react';
import { useLoading } from '@/hooks/useLoading';
import LoadingScreen from '@/components/ui/loading-screen';

interface LoadingContextType {
  isLoading: boolean;
  progress: number;
  message: string;
  startLoading: (message?: string) => void;
  updateProgress: (progress: number, message?: string) => void;
  finishLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const loading = useLoading();

  return (
    <LoadingContext.Provider value={loading}>
      {children}
      <LoadingScreen 
        isLoading={loading.isLoading}
        progress={loading.progress}
        message={loading.message}
      />
    </LoadingContext.Provider>
  );
}

export function useLoadingContext() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoadingContext must be used within a LoadingProvider');
  }
  return context;
}