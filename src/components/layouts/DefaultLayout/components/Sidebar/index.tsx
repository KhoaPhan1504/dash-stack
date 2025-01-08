import React, { useState } from 'react'
import { mainNavItems, optionsNavItems, pageNavItems } from '../../../../../data/SidebarData';
import { SidebarLinkGroup } from './components';
import LogoStack from '../../../../../assets/svgs/Logo.svg';


export const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState<string>(mainNavItems[0].label);

  const handleItemClick = (label: string) => {
    setSelectedItem(label);
  };
  
  return (
    <>
      <div className="w-[240px] h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="h-81 flex justify-center ">
        <img src={LogoStack} alt="" />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="space-y-1 px-6">
          {mainNavItems.map((item, index) => (
            <SidebarLinkGroup
              key={index}
              Icon={item.icon}
              label={item.label}
              isSelected={selectedItem === item.label}
              onClick={() => handleItemClick(item.label)}
            />
          ))}
        </div>

        <div className="mt-8 px-6">
          <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            PAGES
          </h2>
          <div className="mt-4 space-y-1">
            {pageNavItems.map((item, index) => (
              <SidebarLinkGroup 
                key={index} 
                Icon={item.icon} 
                label={item.label} 
                isSelected={selectedItem === item.label}
                onClick={() => handleItemClick(item.label)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-gray-200 px-6">
        {optionsNavItems.map((item, index) => (
          <SidebarLinkGroup 
            key={index} 
            Icon={item.icon} 
            label={item.label} 
            isSelected={selectedItem === item.label}
            onClick={() => handleItemClick(item.label)}
          />
        ))}
      </div>
    </div>
    </>
  )
}
