// import React from 'react';
// import { usePathname } from 'next/navigation';

// interface NavLinkProps {
//     href: string;
//     children: React.ReactNode;
// }

// const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
//     const pathname = usePathname();
//     const isActive = pathname === href;

//     const baseClass =
//         'rounded-xl px-2 py-1 text-md font-medium text-black dark:text-white';
//     const activeClass = 'bg-gradient-to-r from-blue-500 to-purple-500';
//     const inactiveClass = 'hover:scale-105 duration-200';

//     return (
//         <a
//             href={href}
//             className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
//             aria-current={isActive ? 'page' : undefined}
//         >
//             {children}
//         </a>
//     );
// };

// export default NavLink;
