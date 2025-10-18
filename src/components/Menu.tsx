"use client";
import React from "react";

interface MenuProps {
  activeSection: string | null;
  onSectionClick: (sectionId: string) => void;
}

const Menu: React.FC<MenuProps> = ({ activeSection, onSectionClick }) => {
  const menuItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Background", id: "background" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="flex items-center gap-4 -mt-8 mb-9">
      <div className="flex-1 h-px bg-gradient-to-r from-[#04F7A4] to-transparent"></div>
      
      <nav className="flex flex-wrap justify-end gap-3">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => onSectionClick(item.id)}
              className={`group relative flex items-center gap-3 px-3 py-2 rounded-xl transition-colors border ${
                isActive
                  ? "border-[#04F7A4] bg-[#04F7A4]/20 bg-black text-white"
                  : "border-white/10 bg-black text-white/90 hover:text-white hover:border-[#04F7A4]/40 hover:bg-[#04F7A4]/10"
              }`}
            >
              <span className="font-medium">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Menu;
