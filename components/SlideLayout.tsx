
import React from 'react';

interface SlideLayoutProps {
  children: React.ReactNode;
  active: boolean;
  background?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ children, active, background = "bg-slate-50" }) => {
  return (
    <div 
      className={`absolute inset-0 w-full h-full flex flex-col transition-all duration-700 ease-in-out transform ${
        active ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      } ${background}`}
    >
      <div className="flex-1 w-full overflow-y-auto no-scrollbar relative">
        <div className="min-h-full w-full container mx-auto px-6 py-12 md:px-12 lg:px-24 flex flex-col justify-center items-center">
          <div className="w-full max-w-6xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
