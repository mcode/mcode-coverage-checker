import { atom, selector } from 'recoil';
import defaultUploadedFiles from './data/DefaultUploadedFiles.json';
import { overallSectionId } from './lib/coverageSectionIds';

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

const selectedSectionState = atom({ key: 'selectedSectionState', default: overallSectionId });
const selectedFile = atom({ key: 'selectedFile', default: 'bundle1.json' });

const selectedFileState = selector({
  key: 'selectedFileState',
  get: ({ get }) => {
    const files = get(uploadedFilesLookup);
    const fileNames = Object.values(files).map((file) => file.name);
    if (fileNames.find((file) => file === get(selectedFile))) {
      return get(selectedFile);
    }
    return fileNames[0];
  },
  set: ({ set }, newValue) => set(selectedFile, newValue),
});

export { uploadedFilesLookup, uploadedFiles, selectedSectionState, selectedFileState };
