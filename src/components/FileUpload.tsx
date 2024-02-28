"use client";

import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import { Button } from "./ui/button";
import { X } from "lucide-react";

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
      {/* <UploadButton
        endpoint={endpoint}
        onClientUploadComplete={res => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      /> */}
    </>
  );
};
export default FileUpload;
