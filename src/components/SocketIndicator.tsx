"use client";

import { useSocket } from "@/providers/SocketProvider";
import { Badge } from "@/components/ui/badge";

const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge variant="outline" className="bg-yellow-600 text-white py-1">
        Fallback: Polling every 1s
      </Badge>
    );
  }
  return (
    <Badge variant="outline" className="bg-green-700 text-white relative py-1">
      Live: Real-time upates
      <span className="absolute top-0 right-0 flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
    </Badge>
  );
};
export default SocketIndicator;
