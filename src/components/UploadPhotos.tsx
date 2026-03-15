import Image from '../assets/icons/Image.svg?react';
import PhotoPreview from './PhotoPreview';
import { useId, useState } from 'react';
import { useImgsFile } from './../store/PhotoPreview';
import type { ImgFile } from './../store/PhotoPreview';

export default function UploadPhotos() {
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
      {files.length > 0 ? (
        <PhotoPreview />
      ) : (
        <div
          className={`group bg-background-neutral-tertiary flex flex-col items-center justify-center w-64 h-99  ${isDragActive ? 'is-active border-border-brand-primary border-dashed border-width-m' : 'border-border-neutral-inverse-secondary border-width-s'} gap-l px-l md:w-137 md:h-108 rounded-border-l`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <Image className='text-icon-neutral-disabled w-39 h-39 group-[.is-active]:opacity-50' />
          <p className='group-[.is-active]:text-text-brand-primary group-[.is-active]:body-bold'>
            {isDragActive ? 'Suelta las fotos' : 'Arrastra los archivos aquí'}
          </p>
          <div className='flex flex-col items-center gap-s group-[.is-active]:opacity-50'>
            <label
              className='bg-background-neutral-inverse-primary text-text-neutral-inverse-primary px-m h-9 flex items-center rounded-full cursor-pointer w-fit'
              htmlFor={inputId}
            >
              Seleccionar archivo
            </label>
            <input
              onChange={handleFileChange}
              className='hidden'
              type='file'
              id={inputId}
              accept='image/*'
              multiple
            />
            <p className='text-text-neutral-secondary'>
              Subí tu imagen en formato PNG, JPG, JPEG (máximo 3 imagenes)
            </p>
          </div>
        </div>
      )}
    </>
  );
}
