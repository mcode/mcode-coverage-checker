import { atom, selector } from 'recoil';
import defaultUploadedFiles from './data/DefaultUploadedFiles.json';

const uploadedFilesLookup = atom({
  key: 'uploadedFilesLookup',
  default: defaultUploadedFiles,
});

const uploadedFiles = selector({
  key: 'uploadedFiles',
  get: ({ get }) => {
    const files = get(uploadedFilesLookup);
    return Object.values(files).map((file) => file);
  },
});

export { uploadedFilesLookup, uploadedFiles };
