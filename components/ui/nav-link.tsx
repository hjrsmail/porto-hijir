import React from 'react';

interface NavLinkProps {
    targetId: string;
    children: React.ReactNode;
    activeId: string;
}

const NavLink: React.FC<NavLinkProps> = ({ targetId, children, activeId }) => {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    const isActive = targetId === activeId;

    return (
        <button
            onClick={() => scrollToSection(targetId)}
            className={`rounded-xl px-2 py-1 text-md font-medium duration-200 ${isActive
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'text-black dark:text-white hover:scale-105'
                }`}
        >
            {children}
        </button>
    );
};

export default NavLink;