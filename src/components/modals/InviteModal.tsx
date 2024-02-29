"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

import { useModal } from "@/hooks/useModelStore";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { CheckCheck, Copy, Link2, RefreshCw } from "lucide-react";
import useOrigin from "@/hooks/useOrigin";
import { useState } from "react";
import axios from "axios";

const InviteModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();
  const isModalOpen = isOpen && type === "invite";

  const origin = useOrigin();

  const { server } = data;

  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const inviteUrl = `${origin}/invite/${server?.inviteCode}`;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const onNewInviteCode = async () => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `/api/servers/${server?.id}/invite-code`
      );
      onOpen("invite", { server: response.data });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Invite Friends
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <Label className="uppercase text-sm font-bold text-zinc-500 dark:text-secondary/70 flex items-center">
            <Link2 className="mr-1 w-4 h-4"></Link2> Server invite link
          </Label>
          <div className="flex items-center mt-2 gap-x-2">
            <Input
              className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
              value={inviteUrl}
              disabled={isLoading}
            />
            <Button size="icon" onClick={onCopy} disabled={isLoading}>
              {copied ? (
                <CheckCheck className="w-4 h-4"></CheckCheck>
              ) : (
                <Copy className="w-4 h-4"></Copy>
              )}
            </Button>
          </div>
          <div className="flex items-center justify-center mt-5">
            <Button
              onClick={onNewInviteCode}
              disabled={isLoading}
              variant="link"
              size="sm"
              className="text-sm text-zinc-500 shadow-sm"
            >
              Generate a new link
              <RefreshCw className="w-4 h-4 ml-2"></RefreshCw>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default InviteModal;
