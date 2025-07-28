"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function LoadingSpinner() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div className="h-full bg-primary-custom" 
           style={{ 
             background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)',
             animation: 'loading 1.5s ease-in-out infinite'
           }} />
      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}