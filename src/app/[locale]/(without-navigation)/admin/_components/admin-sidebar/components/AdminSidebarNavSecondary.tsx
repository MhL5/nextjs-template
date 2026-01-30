import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LifeBuoy, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

const links = [
  {
    titleTKey: "support",
    url: "#",
    icon: LifeBuoy,
  },
  {
    titleTKey: "feedback",
    url: "#",
    icon: Send,
  },
] as const;

export function NavSecondary(props: ComponentProps<typeof SidebarGroup>) {
  const t = useTranslations(
    "app./[locale]/admin.components.AdminSidebar.NavSecondary",
  );
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {links.map((item) => (
            <SidebarMenuItem key={item.titleTKey}>
              <SidebarMenuButton asChild size="sm">
                <a href={item.url}>
                  <item.icon />
                  <span>{t(`links.${item.titleTKey}`)}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
