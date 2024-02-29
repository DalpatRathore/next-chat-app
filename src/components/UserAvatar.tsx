import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface UserAvatarProps {
  src?: string;
  className?: string;
}
const UserAvatar = ({ src, className }: UserAvatarProps) => {
  return (
    <Avatar className={cn("w-7 h-7 md:w-10 md:h-10", className)}>
      <AvatarImage src={src}></AvatarImage>
      <AvatarFallback>DM</AvatarFallback>
    </Avatar>
  );
};
export default UserAvatar;
