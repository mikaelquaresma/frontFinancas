import { useState, useCallback } from 'react';

interface LoadingState {
  isLoading: boolean;
  progress: number;
  message: string;
}

export function useLoading() {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    progress: 0,
    message: 'Carregando...'
  });

  const startLoading = useCallback((message?: string) => {
    setLoadingState({
      isLoading: true,
      progress: 0,
      message: message || 'Carregando...'
    });
  }, []);

  const updateProgress = useCallback((progress: number, message?: string) => {
    setLoadingState(prev => ({
      ...prev,
      progress: Math.min(Math.max(progress, 0), 100),
      message: message || prev.message
    }));
  }, []);

  const finishLoading = useCallback(() => {
    setLoadingState(prev => ({
      ...prev,
      progress: 100
    }));
    
    // Small delay to show 100% before hiding
    setTimeout(() => {
      setLoadingState({
        isLoading: false,
        progress: 0,
        message: 'Carregando...'
      });
    }, 500);
  }, []);

  const stopLoading = useCallback(() => {
    setLoadingState({
      isLoading: false,
      progress: 0,
      message: 'Carregando...'
    });
  }, []);

  return {
    ...loadingState,
    startLoading,
    updateProgress,
    finishLoading,
    stopLoading
  };
}