// app/(dashboard)/layout.tsx (atau lokasi file layout Anda)

import { AppSidebar } from "@/components/app-sidebar";
import { AppSiteHeader } from "@/components/app-site-header";
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar";
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppDashboardLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[]; // generateMetadata tidak bisa mengakses prop ini
}

export default function AppDashboardLayout({ children, breadcrumbs }: AppDashboardLayoutProps) {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 60)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar variant="inset" />
            <SidebarInset>
                {/* <AppSiteHeader breadcrumbs={breadcrumbs} /> */}
                <div className=" flex flex-1 flex-col">
                    <div className=" @container/main flex flex-1 flex-col gap-2">
                        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 ">
                            {children}
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}