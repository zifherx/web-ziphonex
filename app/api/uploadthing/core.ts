import { stackServerApp } from "@/stack/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .middleware(async ({ req }) => {
      const userConnected = await stackServerApp.getUser();
      if (!userConnected) throw new UploadThingError("No Autorizado");
      return { usuario: userConnected.primaryEmail };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Carga completa:", metadata.usuario);
      console.log("Url del archivo:", file.ufsUrl);
      return { uploadedBy: metadata.usuario, url: file.ufsUrl };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
