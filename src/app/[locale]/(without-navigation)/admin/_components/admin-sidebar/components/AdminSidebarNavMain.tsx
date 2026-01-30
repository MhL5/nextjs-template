"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Link } from "@/components/ui/link";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  BookOpen,
  Bot,
  ChevronRight,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { useTranslations } from "next-intl";

const links = [
  {
    titleTKey: "playground",
    url: "#",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        titleTKey: "history",
        url: "#",
      },
      {
        titleTKey: "starred",
        url: "#",
      },
      {
        titleTKey: "settings",
        url: "#",
      },
    ],
  },
  {
    titleTKey: "models",
    url: "#",
    icon: Bot,
    items: [
      {
        titleTKey: "genesis",
        url: "#",
      },
      {
        titleTKey: "explorer",
        url: "#",
      },
      {
        titleTKey: "quantum",
        url: "#",
      },
    ],
  },
  {
    titleTKey: "documentation",
    url: "#",
    icon: BookOpen,
    items: [
      {
        titleTKey: "introduction",
        url: "#",
      },
      {
        titleTKey: "getStarted",
        url: "#",
      },
      {
        titleTKey: "tutorials",
        url: "#",
      },
      {
        titleTKey: "changelog",
        url: "#",
      },
    ],
  },
  {
    titleTKey: "settings",
    url: "#",
    icon: Settings2,
    items: [
      {
        titleTKey: "general",
        url: "#",
      },
      {
        titleTKey: "team",
        url: "#",
      },
      {
        titleTKey: "billing",
        url: "#",
      },
      {
        titleTKey: "limits",
        url: "#",
      },
    ],
  },
] as const;

export function NavMain() {
  const t = useTranslations(
    "app./[locale]/admin.components.AdminSidebar.NavMain",
  );

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{t("groupLabel")}</SidebarGroupLabel>
      <SidebarMenu>
        {links.map((item) => (
          <Collapsible key={item.titleTKey} asChild>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={item.titleTKey}>
                <Link unStyled href={item.url}>
                  <item.icon />
                  <span>{t(`links.links.${item.titleTKey}`)}</span>
                </Link>
              </SidebarMenuButton>
              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">{t("toggle")}</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.titleTKey}>
                          <SidebarMenuSubButton asChild>
                            <Link unStyled href={subItem.url}>
                              <span>
                                {t(`links.subLinks.${subItem.titleTKey}`)}
                              </span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
