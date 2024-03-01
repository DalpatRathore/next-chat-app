import { Hash, Menu } from "lucide-react";
import MobileToggle from "../MobileToggle";
import UserAvatar from "../UserAvatar";
import SocketIndicator from "@/components/SocketIndicator";

interface ChatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
}

const ChatHeader = ({ serverId, name, type, imageUrl }: ChatHeaderProps) => {
  return (
    <div className="flex items-center text-md font-semibold px-3 h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
      <MobileToggle serverId={serverId}></MobileToggle>
      {type === "channel" && (
        <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 ml-2 mr-1"></Hash>
      )}
      {type === "conversation" && (
        <UserAvatar
          src={imageUrl}
          className="w-8 h-8 md:w-10 md:h-10 mr-2"
        ></UserAvatar>
      )}
      <p className="font-semibold text-md text-black dark:text-white">{name}</p>
      <div className="ml-auto flex items-center">
        <SocketIndicator></SocketIndicator>
      </div>
    </div>
  );
};
export default ChatHeader;
