import Image from "../assets/icons/Image.svg?react";
import PhotoPreview from "./PhotoPreview";
import { useId, useState } from "react";
import { useImgsFile } from "../store/FileUploads";
import type { ImgFile } from "../store/FileUploads";
import PaperClip from "../assets/icons/Paperclip.svg?react";

export default function FileUpload() {
  const inputId = useId();
  const { files, addFile } = useImgsFile((state) => state);
  const [isDragActive, setIsDragActive] = useState(false);

  const createFiles = (newFiles: FileList) => {
    const imgFiles: ImgFile[] = Array.from(newFiles).map((f) => {
      return {
        file: f,
        url: URL.createObjectURL(f)
      };
    });
    addFile(imgFiles);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) createFiles(event.target.files);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const { dataTransfer } = event;
    if (dataTransfer.types.includes("Files")) {
      const { files } = dataTransfer;
      if (files.length > 0) {
        createFiles(files);
      }
    }
    setIsDragActive(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragActive(true);
  };
  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const { currentTarget, relatedTarget } = event;

    // Solo resetea si el mouse está saliendo del elemento principal
    if (!currentTarget.contains(relatedTarget as Node)) {
      setIsDragActive(false);
    }
  };

  return (
    <>
      <div
        className={`group relative flex flex-col items-center justify-between border-width-m border-dashed bg-neutral-tertiary ${isDragActive ? "is-active border-brand-primary" : "border-neutral-inverse-secondary"} h-[508px]rounded-border-l w-[288px] gap-l overflow-hidden rounded-border-m p-xl px-l lg:w-87`}
        {...(files.length < 4
          ? {
              onDrop: handleDrop,
              onDragOver: handleDragOver,
              onDragLeave: handleDragLeave
            }
          : {})}
      >
        {/* Fondo decorativo */}
        <div className="absolute -top-50 z-0 flex aspect-square w-100 items-center justify-center rounded-full bg-brand-tertiary">
          <div className="flex aspect-square w-[266.67px] items-center justify-center rounded-full bg-neutral-primary">
            <div className="aspect-square w-[133.33px] rounded-full bg-brand-tertiary"></div>
          </div>
        </div>

        {/* Elementos internos */}
        <div className="flex flex-col items-center gap-l">
          {files.length > 0 ? (
            <PhotoPreview />
          ) : (
            <div className="z-10 flex h-63.75 w-60 items-center justify-center rounded-border-l bg-neutral-disabled lg:w-75">
              <Image className="text-neutral-primary group-[.is-active]:opacity-25" />
            </div>
          )}
          <p className="group-[.is-active]:label h-8 group-[.is-active]:text-brand-primary">{isDragActive ? "Suelta la imagen" : "Arrastra las imagenes aquí"}</p>
          <div className="flex flex-col items-center gap-s group-[.is-active]:opacity-25">
            <label className="flex h-9 w-fit cursor-pointer items-center gap-s rounded-full bg-neutral-inverse-primary px-m text-neutral-inverse-primary" htmlFor={inputId}>
              Seleccionar archivos <PaperClip />
            </label>
            <input onChange={handleFileChange} className="hidden" type="file" id={inputId} accept="image/*" multiple disabled={files.length == 4 ? true : undefined} />
          </div>
        </div>
        <p className="w-42 caption-default text-neutral-secondary group-[.is-active]:opacity-25 lg:w-52">Subí tu imagen en formato PNG, JPG, JPEG (máximo 4 imagenes)</p>
      </div>
    </>
  );
}
