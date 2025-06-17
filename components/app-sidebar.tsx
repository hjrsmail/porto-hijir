"use client"

import * as React from "react"
import {
   IconArticle,
   IconDashboard,
   IconFolder,
   IconHelp,
   IconSearch,
   IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from "@/components/ui/sidebar"
import NextJSIcon from "./icons/nextjs-icon"
import Link from "next/link"

const data = {
   user: {
      name: "Hijir Ismail",
      email: "hijir634@gmail.com",
      avatar: "",
   },
   navMain: [
      {
         title: "Dashboard",
         url: "/dashboard",
         icon: IconDashboard,
      },
      {
         title: "Projects",
         url: "/projects",
         icon: IconFolder,
      },
      {
         title: "Posts",
         url: "/posts",
         icon: IconArticle,
      },
      
   ],

   navSecondary: [
      {
         title: "Users",
         url: "/users",
         icon: IconUsers,
      },
      {
         title: "Get Help",
         url: "#",
         icon: IconHelp,
      },
      {
         title: "Search",
         url: "#",
         icon: IconSearch,
      },
   ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   return (
      <Sidebar collapsible="offcanvas" {...props}>
         <SidebarHeader>
            <SidebarMenu>
               <SidebarMenuItem>
                  <SidebarMenuButton
                     asChild
                     className="data-[slot=sidebar-menu-button]:!p-1.5">
                     <Link href="#">
                        <NextJSIcon className="!size-8 mr-4" />
                        <span className="text-base font-semibold">MextJS-Backend</span>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
            </SidebarMenu>
         </SidebarHeader>
         <SidebarContent>
            <NavMain items={data.navMain} />
            <NavSecondary items={data.navSecondary} className="mt-auto" />
         </SidebarContent>
         <SidebarFooter>
            <NavUser user={data.user} />
         </SidebarFooter>
      </Sidebar>
   )
}
