import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const state = false;
  return (
    <main className="flex items-center justify-center">
      <h1 className={cn("text-6xl", state && "text-sm")}>Dalpat Rathore</h1>
      <UserButton afterSignOutUrl="/"></UserButton>
      <ThemeToggle></ThemeToggle>
    </main>
  );
}
