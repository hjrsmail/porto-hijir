import React from 'react';
import AppNavbar from '@/components/app-navbar';
import AppFooter from '@/components/app-footer';

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="font-merriweather bg-gray-100 dark:bg-gradient-to-tr from-gray-950 to-darkk">
            <AppNavbar />
            <div id="main-content" className="mx-auto w-screen max-w-screen-2xl ">
                {children}
            </div>
            <AppFooter />
        </div>
    );
}

