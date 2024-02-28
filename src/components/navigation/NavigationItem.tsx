"use client";

import { cn } from "@/lib/utils";
import ActionTooltip from "../ActionTooltip";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

interface NavigationItemProps {
  id: string;
  name: string;
  imageUrl: string;
}
const NavigationItem = ({ id, name, imageUrl }: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();
  const onClick = () => {
    router.push(`/servers/${id}`);
  };
  return (
    <ActionTooltip label={name} side="right" align="center">
      <button onClick={onClick} className="group relative flex items-center">
        <div
          className={cn(
            "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
            params?.serverId !== id && "group-hover:h-[20px]",
            params?.serverId === id ? "h-[36px]" : "h-[8px]"
          )}
        ></div>
        <div
          className={cn(
            "relative flex w-[48px] h-[48px] mx-3 rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden group",
            params?.serverId === id &&
              "bg-primary/10 text-primary rounded-[16px]"
          )}
        >
          <Image fill src={imageUrl} alt="Channel"></Image>
        </div>
      </button>
    </ActionTooltip>
  );
};
export default NavigationItem;
