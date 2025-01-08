import { LucideIcon } from 'lucide-react';
import React from 'react'

interface SidebarLinkGroupProps {
  Icon: LucideIcon;
  label: string;
  className?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const SidebarLinkGroup: React.FC<SidebarLinkGroupProps> = ({ 
  Icon, 
  label, 
  className,
  isSelected,
  onClick
}) => {
  return (
    <>
      <div 
        onClick={onClick}
        className={`flex items-center h-50 w-192 space-x-3 px-4 py-2 rounded-lg cursor-pointer 
          ${isSelected 
            ? 'bg-custom-navbar text-white' 
            : 'hover:bg-blue-50 text-custom-black hover:text-blue-600'
          } ${className}`}
        >
        <Icon size={20} />
        <span className="text-sm font-medium">{label}</span>
      </div>
    </>
  )
}
