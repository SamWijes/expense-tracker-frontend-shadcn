import React from 'react';
import { cn } from "@/lib/utils"; 

export const GradientGlassHeading = ({ children, className }) => {
  return (
     
    <div className={cn(
      // Glass Container
      "inline-block rounded-2xl border border-white/20 bg-white/10 p-6 px-8",
      "shadow-xl/30  backdrop-blur-lg", "text-center",
      className
    )}>
      <h1 className={cn(
        // Gradient Text
        "bg-linear-to-r from-neutral-900 via-neutral-500 to-neutral-900 bg-clip-text",
        "text-transparent text-center font-extrabold tracking-tighter",
        "text-5xl  md:text-5xl lg:text-6xl "
      )}>
        {children}
      </h1>
    </div>
    
  );
};


