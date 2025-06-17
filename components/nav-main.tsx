"use client"

import { type Icon } from "@tabler/icons-react"
import Link from "next/link"

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
    items,
}: {
    items: {
        title: string
    url: string
        icon?: Icon
    }[]
}) {
    return (
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    {items.map((item) => {
                        const IconComponent = item.icon;

                        return (
                            <SidebarMenuItem key={item.title}>
                                {/* Jika url === '#' maka bukan link navigasi */}
                                {item.url === "#" ? (
                                    <SidebarMenuButton tooltip={item.title}>
                                        {IconComponent && <IconComponent />}
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                ) : (
                                    <SidebarMenuButton asChild tooltip={item.title}>
                                        <Link href={item.url}>
                                            {IconComponent && <IconComponent />}
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                )}
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
