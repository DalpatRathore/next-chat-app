"use client";

import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import { Button } from "./ui/button";
import { FileIcon, X } from "lucide-react";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}
const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const fileType = value?.split(".").pop();
  if (value && fileType !== "pdf") {
    return (
      <div className="relative w-20 h-20">
        <Image
          fill
          src={value}
          alt="Upload"
          className="rounded-full shadow-md"
        ></Image>
        <Button
          type="button"
          variant="destructive"
          size="icon"
          className=" w-6 h-6 rounded-full absolute top-0 -right-1 shadow-md"
          onClick={() => onChange("")}
        >
          <X className="w-3 h-3"></X>
        </Button>
      </div>
    );
  }
  if (value && fileType === "pdf") {
    return (
      <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
        <FileIcon className="w-10 h-10 fill-indigo-200 stroke-indigo-400"></FileIcon>

        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          {value}
        </a>
        <Button
          type="button"
          variant="destructive"
          size="icon"
          className=" w-6 h-6 rounded-full absolute -top-2 -right-2 shadow-md"
          onClick={() => onChange("")}
        >
          <X className="w-3 h-3"></X>
        </Button>
      </div>
    );
  }
  return (
    <>
      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={res => {
          // Do something with the response
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          console.log(`ERROR! ${error.message}`);
        }}
      ></UploadDropzone>
    </>
  );
};
export default FileUpload;
