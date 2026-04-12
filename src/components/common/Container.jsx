import React from 'react';

/**
 * Standard content container to ensure perfect horizontal alignment
 * and consistent responsive gutter across all sections.
 */
export const Container = ({ children, className = "", ...props }) => {
  return (
    <div 
      className={`mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
