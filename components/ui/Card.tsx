import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`
      bg-gray-900/50 border border-gray-800 rounded-xl p-6
      ${hover ? 'hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300' : ''}
      ${className}
    `}
    >
      {children}
    </div>
  );
}
