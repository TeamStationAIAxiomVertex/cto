import Link from 'next/link';
import {
  Folder,
  Home,
  BookOpen,
} from 'lucide-react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarGroup,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import SiteHeader from '@/components/site-header';
import { categories } from '@/lib/data';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <BookOpen className="size-6 text-primary" />
            <h1 className="text-xl font-semibold">TeamStation AI</h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/">
                  <Home />
                  Dashboard
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarGroup>
              <SidebarGroupLabel>Categories</SidebarGroupLabel>
              {categories.map((category) => (
                <SidebarMenuItem key={category.slug}>
                  <SidebarMenuButton asChild size="sm">
                    <Link href={`/category/${category.slug}`}>
                      <Folder className="size-3.5" />
                      {category.name}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarGroup>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <SiteHeader />
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
