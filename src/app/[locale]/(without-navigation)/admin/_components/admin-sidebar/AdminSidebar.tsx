"use client";

import Logo from "@/components/Logo";
import { Link } from "@/components/ui/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useLocale } from "next-intl";
import * as React from "react";

import { NavProjects } from "./components//AdminSidebarNavProjects";
import { NavSecondary } from "./components//AdminSidebarNavSecondary";
import { NavUser } from "./components//AdminSidebarNavUser";
import { NavMain } from "./components/AdminSidebarNavMain";

export function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const locale = useLocale();
  return (
    <Sidebar
      side={locale === "ar" ? "right" : "left"}
      variant="inset"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="hover:bg-primary/70"
              size="lg"
              asChild
            >
              <Link
                href={{
                  pathname: "/",
                  hash: "#body",
                }}
                unStyled
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg border bg-sidebar-primary text-sidebar-primary-foreground">
                  <Logo className="size-4" />
                </div>
                <div className="grid flex-1 text-start text-sm leading-tight">
                  <span className="truncate font-medium">{"Template"}</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain />
        <NavProjects />
        <NavSecondary className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
