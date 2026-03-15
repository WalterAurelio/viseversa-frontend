import Plus from '../assets/icons/Plus.svg?react';
import { usePhotoPreview, useImgsFile } from '../store/PhotoPreview';
import { useEffect, useRef } from 'react';
import type { ImgFile } from '../store/PhotoPreview';

export default function UploadedPhotos() {
  const { files, addFile } = useImgsFile((state) => state);
  const { setPhoto, url } = usePhotoPreview((state) => state);

  // ref de la lista de archivos de imagen
  const imgsRef = useRef<ImgFile[]>(files);
  useEffect(() => {
    const prev = imgsRef.current;
    imgsRef.current = files;
    // Borra las urls de los archivos que fueron eliminados
    prev.forEach((img) => {
      if (!files.includes(img)) {
        URL.revokeObjectURL(img.url);
      }
    });
  }, [files]);

  const handlePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files?.[0];
    if (newFile) {
      const imgFile: ImgFile[] = [
        {
          file: newFile,
          url: URL.createObjectURL(newFile),
        },
      ];
      addFile(imgFile);
    }
  };

  const handleClick = (img: ImgFile) => {
    setPhoto(img.url);
  };

  return (
    <div className='flex px-l py-s w-fit h-fit items-center gap-s md:flex-col'>
      {files?.map(
        (img, index) =>
          img && (
            <img
              key={index}
              src={img.url}
              alt={`Uploaded ${index}`}
              className={`w-16 h-20 md:w-24 md:h-24  object-cover bg-background-neutral-tertiary cursor-pointer ${url == img.url ?'outline-2 outline-border-brand-primary' : 'border-border-neutral-inverse-secondary border-width-s'}`}
              onClick={() => handleClick(img)}
            />
          )
      )}

      {files.length != 3 && (
        <>
          <label
            htmlFor='fileInput'
            className='p-1 h-fit border-width-s border-icon-neutral-tertiary rounded-full cursor-pointer'
          >
            <Plus className='text-icon-neutral-tertiary' />
          </label>
          <input
            onChange={handlePreview}
            className='hidden'
            type='file'
            id='fileInput'
            accept='.png, .jpg, .jpeg'
          />
        </>
      )}
    </div>
  );
}
