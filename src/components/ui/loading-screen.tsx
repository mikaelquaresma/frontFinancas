"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/stores/ThemeContext";

interface LoadingScreenProps {
  isLoading: boolean;
  progress?: number;
  message?: string;
}

export default function LoadingScreen({ isLoading, progress = 0, message }: LoadingScreenProps) {
  const { theme } = useTheme();
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    if (isLoading && progress > currentProgress) {
      const timer = setTimeout(() => {
        setCurrentProgress(progress);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [progress, currentProgress, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      setCurrentProgress(0);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col">
      {/* Progress Bar - Fixed at top */}
      <div className="w-full h-1 bg-gray-200 dark:bg-gray-700">
        <div 
          className="h-full bg-primary-custom transition-all duration-300 ease-out"
          style={{ width: `${Math.min(currentProgress, 100)}%` }}
        />
      </div>

      {/* Overlay */}
      <div 
        className={`flex-1 flex items-center justify-center backdrop-blur-sm ${
          theme === 'dark' 
            ? 'bg-gray-900/80' 
            : 'bg-white/80'
        }`}
      >
        <div className="text-center space-y-4 px-6">
          {/* Spinner */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
              <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-primary-custom border-t-transparent animate-spin"></div>
            </div>
          </div>

          {/* Progress Text */}
          <div className="space-y-2">
            <p className={`text-lg font-medium ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {message || 'Carregando...'}
            </p>
            
            {progress > 0 && (
              <div className="flex items-center justify-center space-x-2">
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {Math.round(currentProgress)}%
                </div>
                <div className={`w-32 h-2 rounded-full ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div 
                    className="h-full bg-primary-custom rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${Math.min(currentProgress, 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* SobraMais Logo */}
          <div className="pt-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-primary-custom rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className={`text-lg font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                SobraMais
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}