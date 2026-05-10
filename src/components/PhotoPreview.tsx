import { useImgsFile } from '../store/FileUploads';
import X from '../assets/icons/X.svg?react';

export default function PhotoPreview() {
  const { files, setFiles } = useImgsFile((state) => state);

  const gridStyle =
    {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-rows-2 grid-cols-2',
      4: 'grid-rows-2 grid-cols-2',
    }[files.length] ?? 'grid-cols-1';

  const handleDelete = (e: React.MouseEvent<SVGElement>) => {
    const targetElem = e.target as HTMLInputElement;
    const wrapper = targetElem.closest('div');

    const newFiles = files.filter((f) => f.url !== wrapper?.id);
    setFiles(newFiles);
  };

  return (
    <div className={`h-63.75 w-60 lg:w-75 grid gap-s ${gridStyle}`}>
      {files.map((f, index) => {
        return (
          <div
            key={f.url}
            id={f.url}
            className={`relative max-h-63.75 ${files.length == 1 ? 'w-60 lg:w-75' : ''}${
              files.length === 3 && index === 0 ? 'row-span-2' : ''
            }`}
          >
            <X
              className='text-neutral-inverse-primary rounded-full bg-neutral-inverse-primary absolute top-2 right-2 cursor-pointer p-xs'
              onClick={(e) => handleDelete(e)}
            />
            <img
              className='bg-neutral-primary object-cover rounded-border-l h-full w-full'
              src={f.url}
              alt=''
            />
          </div>
        );
      })}
    </div>
  );
}
