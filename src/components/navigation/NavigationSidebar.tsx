import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import NavigationAction from "./NavigationAction";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import NavigationItem from "./NavigationItem";
import { ThemeToggle } from "../ThemeToggle";
import { UserButton } from "@clerk/nextjs";

const NavigationSidebar = async () => {
  const profile = await currentProfile();
  if (!profile) {
    return redirect("/");
  }
  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  return (
    <div className="space-y-4 flex flex-col items-center h-full w-full text-primary dark:bg-[#1E1F22] py-3">
      <NavigationAction></NavigationAction>
      <Separator className="h-[2px] w-10 bg-zinc-300 dark:bg-zinc-700 rounded-md mx-auto"></Separator>
      <ScrollArea className="w-full flex-1">
        {servers.map(server => (
          <div className="mb-4" key={server.id}>
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            ></NavigationItem>
          </div>
        ))}
      </ScrollArea>
      <div className="flex flex-col items-center mt-auto pb-3 gap-y-4">
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "w-[40px] h-[40px]",
            },
          }}
        ></UserButton>
        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
};
export default NavigationSidebar;
