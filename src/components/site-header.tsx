import { SidebarTrigger } from '@/components/ui/sidebar';
import { SearchDialog } from '@/components/search-dialog';
import { ThemeToggle } from '@/components/theme-toggle';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 w-full shrink-0 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6 lg:px-8">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <div className="hidden font-semibold md:block">Dashboard</div>
      <div className="flex items-center gap-2 sm:gap-4">
        <SearchDialog />
        <ThemeToggle />
      </div>
    </header>
  );
}
