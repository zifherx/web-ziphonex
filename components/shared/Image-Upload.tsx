/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Loader2, X } from "lucide-react";
import { UploadButton, UploadDropzone } from "@/utils/uploadthing";

import { Button } from "../ui/button";
import { ImageUploadProps } from "@/common/types";

export function ImageUpload({ onChange, disabled = false, onRemove, value, variant = "dropzone" }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleRemove = () => {
    if (onRemove) {
      onRemove();
    } else {
      onChange("");
    }
  };

  if (value) {
    return (
      <div className="relative w-full">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-gray-50">
          <img src={value} alt="Imagen subida" className="h-full w-full object-cover" />
          {!disabled && (
            <Button
              type="button"
              onClick={handleRemove}
              variant="destructive"
              size="icon"
              className="absolute right-2 top-2 h-8 w-8 cursor-pointer"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </Button>
          )}
        </div>
        <p className="mt-2 text-xs text-gray-500 truncate">{value}</p>
      </div>
    );
  }

  if (variant === "button") {
    return (
      <div className="w-full">
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            console.log("RES:", res);
            if (res?.[0].ufsUrl) {
              onChange(res[0].ufsUrl);
              setIsUploading(false);
            }
          }}
          onUploadError={(err: Error) => {
            console.error("Error:", err);
            setIsUploading(false);
          }}
          onUploadBegin={() => {
            setIsUploading(true);
          }}
          appearance={{
            button: "ut-ready:bg-blue-600 ut-uploading:cursor-not-allowed bg-blue-500 ut-uploading:bg-blue-500/50",
            allowedContent: "text-gray-600 text-xs",
          }}
          disabled={disabled || isUploading}
        />
      </div>
    );
  }

  return (
    <div className="w-full">
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("RES:", res);
          if (res?.[0].ufsUrl) {
            onChange(res[0].ufsUrl);
            setIsUploading(false);
          }
        }}
        onUploadError={(err: Error) => {
          console.error("Error:", err);
          setIsUploading(false);
        }}
        onUploadBegin={() => {
          setIsUploading(true);
        }}
        appearance={{
          container: "border-2 border-dashed border-gray-300 hover:border-gray-400",
          uploadIcon: "text-gray-400",
          label: "text-gray-600 hover:text-gray-800",
          allowedContent: "text-gray-500 text-sm",
        }}
        disabled={disabled || isUploading}
      />

      {isUploading && (
        <div className="mt-2 flex items-center justify-center gap-2 text-sm text-gray-600">
          <Loader2 className="h-4 w-4 animate-spin" />
          Subiendo imagen...
        </div>
      )}
    </div>
  );
}
