import { AdminSidebar } from "@/app/[locale]/(without-navigation)/admin/_components/admin-sidebar/AdminSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import LocaleSwitcher from "@/i18n/components/LocaleSwitcher";

export default function layout({ children }: LayoutProps<"/[locale]/admin">) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex w-full items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-7"
            />
            <ThemeToggle />
            <LocaleSwitcher className="ms-auto" />
          </div>
        </header>
        <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
