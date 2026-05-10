import { create } from 'zustand';

export type ImgFile = {
  file: File;
  url: string;
};

type ImgsFileActions = {
  setFiles: (newFiles: ImgFile[]) => void;
  addFile: (newImgFile: ImgFile[]) => void;
};

export const useImgsFile = create<{ files: ImgFile[] } & ImgsFileActions>()(
  (set) => ({
    files: [],
    setFiles: (newFiles: ImgFile[]) => set(() => ({ files: newFiles })),
    addFile: (newImgFile: ImgFile[]) =>
      set((state) => {
        const filteredNewFiles = newImgFile.filter((newFile) => {
          return !state.files.some(
            (existingFile) =>
              existingFile.file.name === newFile.file.name &&
              existingFile.file.size === newFile.file.size &&
              existingFile.file.lastModified === newFile.file.lastModified
          );
        })
        filteredNewFiles.splice(4, filteredNewFiles.length - 1);
        return { files: [...state.files, ...filteredNewFiles] };
      }),
  })
);
