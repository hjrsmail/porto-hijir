'use client'; 

import { usePathname } from 'next/navigation'; 
import { Breadcrumbs } from "./breadcrumbs";
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types'; 

export function AppSiteHeader() {
  const pathname = usePathname();

  // Fungsi untuk menghasilkan breadcrumbs dari pathname
  const generateBreadcrumbs = (path: string): BreadcrumbItemType[] => {
    const pathSegments = path.split('/').filter(segment => segment);
    const breadcrumbs: BreadcrumbItemType[] = []; //Defaultt None Aja yaa

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const title = segment.replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Upperrcaseee
        .join(' ');

      if (segment === 'dashboard') {
        breadcrumbs.push({ title: 'Dashboard', href: currentPath });
      } else if (segment === 'project') {
        breadcrumbs.push({ title: 'Projects', href: currentPath });
      }

      else {
        breadcrumbs.push({ title: title, href: currentPath });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(pathname);

  // console.log("AppSiteHeader generated breadcrumbs:", breadcrumbs);

  return (
    <header className="flex h-[var(--header-height)] shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-[var(--header-height)]">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4" />
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
    </header>
  )
}