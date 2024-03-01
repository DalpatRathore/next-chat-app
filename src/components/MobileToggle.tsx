import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import NavigationSidebar from "@/components/navigation/NavigationSidebar";
import ServerSidebar from "@/components/server/ServerSidebar";

const MobileToggle = ({ serverId }: { serverId: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu></Menu>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 flex gap-0">
        <div className="w-[72px]">
          <NavigationSidebar></NavigationSidebar>
        </div>
        <ServerSidebar serverId={serverId}></ServerSidebar>
      </SheetContent>
    </Sheet>
  );
};
export default MobileToggle;
