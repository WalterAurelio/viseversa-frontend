import Image from '../assets/icons/Image.svg?react';
import PhotoPreview from './PhotoPreview';
import { useId, useState } from 'react';
import { useImgsFile } from '../store/FileUploads';
import type { ImgFile } from '../store/FileUploads';
import PaperClip from '../assets/icons/Paperclip.svg?react';

export default function FileUpload() {
  const inputId = useId();
  const { files, addFile } = useImgsFile((state) => state);
  const [isDragActive, setIsDragActive] = useState(false);

  const createFiles = (newFiles: FileList) => {
    const imgFiles: ImgFile[] = Array.from(newFiles).map((f) => {
      return {
        file: f,
        url: URL.createObjectURL(f),
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
    if (dataTransfer.types.includes('Files')) {
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
        className={`relative group bg-neutral-tertiary flex flex-col items-center justify-between border-dashed border-width-m ${isDragActive ? 'is-active border-brand-primary' : 'border-neutral-inverse-secondary'} p-xl gap-l px-l w-[288px] lg:w-87 h-[508px]rounded-border-l overflow-hidden rounded-border-m`}
        {...(files.length < 4 ? {
          onDrop: handleDrop,
          onDragOver: handleDragOver,
          onDragLeave: handleDragLeave,
        } : {})}
      >
        {/* Fondo decorativo */}
        <div className='absolute -top-50 flex items-center justify-center bg-brand-tertiary w-100 aspect-square rounded-full z-0'>
          <div className='flex items-center justify-center bg-neutral-primary w-[266.67px] rounded-full aspect-square'>
            <div className='bg-brand-tertiary w-[133.33px] aspect-square rounded-full'></div>
          </div>
        </div>

        {/* Elementos internos */}
        <div className='flex flex-col items-center gap-l'>
          {files.length > 0 ? (
            <PhotoPreview />
          ) : (
            <div className='flex items-center justify-center rounded-border-l z-10 w-60 lg:w-75 h-63.75 bg-neutral-disabled'>
              <Image className='text-neutral-primary group-[.is-active]:opacity-25' />
            </div>
          )}
          <p className='h-8 group-[.is-active]:text-brand-primary group-[.is-active]:label'>
            {isDragActive ? 'Suelta la imagen' : 'Arrastra las imagenes aquí'}
          </p>
          <div className='flex flex-col items-center gap-s group-[.is-active]:opacity-25'>
            <label
              className='bg-neutral-inverse-primary text-neutral-inverse-primary px-m h-9 flex items-center rounded-full cursor-pointer w-fit gap-s'
              htmlFor={inputId}
            >
              Seleccionar archivos <PaperClip />
            </label>
            <input
              onChange={handleFileChange}
              className='hidden'
              type='file'
              id={inputId}
              accept='image/*'
              multiple
              disabled={files.length == 4 ? true : undefined}
            />
          </div>
        </div>
        <p className='text-neutral-secondary w-42 lg:w-52 caption group-[.is-active]:opacity-25'>
          Subí tu imagen en formato PNG, JPG, JPEG (máximo 4 imagenes)
        </p>
      </div>
    </>
  );
}
