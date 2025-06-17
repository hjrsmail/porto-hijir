import React from "react";

interface ButtonLinkProps {
    href: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children, icon, className }) => {
    const defaultClass =
        "inline-flex items-center gap-1 px-3 py-2 border-1 border-gray-900 rounded-md max-w-44";

    return (
        <a
            href={href}
            className={`${defaultClass} ${className}`}
        >
            {icon && <span className="size-4 md:size-6">{icon}</span>}
            {children}
        </a>
    );
};

export default ButtonLink;
