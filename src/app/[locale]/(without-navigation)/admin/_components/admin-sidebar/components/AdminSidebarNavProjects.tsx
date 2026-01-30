import { Link } from "@/components/ui/link";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Frame, Map, PieChart } from "lucide-react";
import { useTranslations } from "next-intl";

const links = [
  {
    nameTKey: "designEngineering",
    url: "#",
    icon: Frame,
  },
  {
    nameTKey: "salesMarketing",
    url: "#",
    icon: PieChart,
  },
  {
    nameTKey: "travel",
    url: "#",
    icon: Map,
  },
] as const;

export function NavProjects() {
  const t = useTranslations(
    "app./[locale]/admin.components.AdminSidebar.NavProjects",
  );

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>{t("title")}</SidebarGroupLabel>
      <SidebarMenu>
        {links.map(({ icon: Icon, nameTKey, url }) => (
          <SidebarMenuItem key={nameTKey + url}>
            <SidebarMenuButton asChild>
              <Link unStyled href={url}>
                <Icon />
                <span>{t(`links.${nameTKey}`)}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
