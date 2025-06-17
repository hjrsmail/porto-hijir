import { AppSidebar } from "@/components/app-sidebar";
import { AppSiteHeader } from "@/components/app-site-header"; // Pastikan impor ini benar
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar";
import { type ReactNode } from 'react';
import type { Metadata } from 'next';


// generateMetadata 
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: {
            default: 'NextJS | Dashboard',
            template: '',
        },
        description: 'Selamat datang di portofolio.',
        // ... 
    };
}

interface AppDashboardLayoutProps {
    children: ReactNode;
}


export default function AppDashboardLayout({ children }: AppDashboardLayoutProps) {
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
                <AppSiteHeader />
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