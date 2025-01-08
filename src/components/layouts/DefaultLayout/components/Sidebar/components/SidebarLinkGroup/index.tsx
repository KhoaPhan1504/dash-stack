import { LucideIcon } from 'lucide-react';
import React from 'react';

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
  onClick,
}) => {
  return (
    <>
      <div
        onClick={onClick}
        className={`flex h-50 w-192 cursor-pointer items-center space-x-3 rounded-lg px-4 py-2 ${
          isSelected
            ? 'bg-custom-navbar text-white'
            : 'text-custom-black hover:bg-blue-50 hover:text-blue-600'
        } ${className}`}
      >
        <Icon size={20} />
        <span className="text-sm font-medium">{label}</span>
      </div>
    </>
  );
};
