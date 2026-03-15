import UploadedPhotos from './UploadedPhotos';
import { usePhotoPreview, useImgsFile } from '../store/PhotoPreview';
import X from '../assets/icons/X.svg?react';

export default function PhotoPreview() {
  const actualPhoto = usePhotoPreview((state) => state.url);
  const setPhoto = usePhotoPreview((state) => state.setPhoto);
  const { files, setFiles } = useImgsFile((state) => state);

  const handleDelete = () => {
    const targetUrl = actualPhoto || files[0]?.url;
    if (!targetUrl) return;

    const newFiles = files.filter((f) => f.url !== targetUrl);
    setFiles(newFiles);

    // Se actualiza la foto de la preview a la primera disponible
    if (targetUrl === actualPhoto) {
      setPhoto(newFiles[0]?.url ?? '');
    }
  };

  return (
    <div className='flex flex-col items-center gap-l md:flex-row'>
      <div className='relative h-99 w-64 md:w-137 md:h-108 flex justify-center border-width-m border-border-neutral-inverse-secondary rounded-border-l'>
        <X
          className='text-text-neutral-primary absolute top-2 right-2 cursor-pointer'
          onClick={() => handleDelete()}
        />
        <img
          className='bg-background-neutral-primary object-cover md:object-contain w-full h-full rounded-border-l'
          src={actualPhoto ? actualPhoto : files[0].url}
          alt=''
        />
      </div>
      <UploadedPhotos />
    </div>
  );
}
