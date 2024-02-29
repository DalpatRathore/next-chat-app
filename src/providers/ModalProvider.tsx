"use client";

import { useEffect, useState } from "react";

import CreateServerModal from "@/components/modals/CreateServerModal";
import InviteModal from "@/components/modals/InviteModal";
import EditServerModal from "@/components/modals/EditServerModal";
import MembersModal from "@/components/modals/MembersModal";
import CreateChannelModal from "@/components/modals/CreateChannelModal";
import LeaveServerModal from "@/components/modals/LeaveServerModal";
import DeleteServerModal from "@/components/modals/DeleteServerModal";
import DeleteChannelModal from "@/components/modals/DeleteChannelModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateServerModal></CreateServerModal>
      <InviteModal></InviteModal>
      <EditServerModal></EditServerModal>
      <MembersModal></MembersModal>
      <CreateChannelModal></CreateChannelModal>
      <LeaveServerModal></LeaveServerModal>
      <DeleteServerModal></DeleteServerModal>
      <DeleteChannelModal></DeleteChannelModal>
    </>
  );
};
export default ModalProvider;
