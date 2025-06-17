"use client"; // Ini HARUS ADA di sini juga!

import { PageProvider } from "@/components/context/page-context"; // Import PageProvider yang sudah di-`use client`
import type { SharedData } from "@/types"; // Pastikan SharedData di-import

interface PageProviderWrapperProps {
    children: React.ReactNode;
    sharedData: SharedData;
}

export function PageProviderWrapper({ children, sharedData }: PageProviderWrapperProps) {
    return (
        <PageProvider value={{ props: sharedData }}>
            {children}
        </PageProvider>
    );
}