"use client";

import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Logo } from "@/components/logo";
import { NavConfigs } from "./nav-configs";

// -----------------------------------------------------------------------

export function MainSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="items-center h-12">
            <Logo />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NavConfigs.map((item) => {
                // Check if any child URL matches the current pathname
                const isActive = item.children?.some(
                  (child) => pathname === child.url,
                );

                return (
                  <SidebarMenuItem key={item.title}>
                    {item.children ? (
                      <Collapsible
                        className="group/collapsible"
                        defaultOpen={isActive} // Automatically opens if a child is active
                      >
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton tooltip={item.title}>
                            <item.icon className="size-4" />
                            <span className="font-medium">{item.title}</span>
                            <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.children.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={pathname === subItem.url}
                                >
                                  <a
                                    href={subItem.url}
                                    className="text-zinc-600 dark:text-zinc-400 hover:text-blue-500 data-[active=true]:text-blue-600 dark:data-[active=true]:text-blue-400"
                                  >
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton
                        asChild
                        tooltip={item.title}
                        isActive={pathname === item.url}
                      >
                        <a href={item.url}>
                          <item.icon className="size-4" />
                          <span className="font-medium">{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
