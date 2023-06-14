import { useRecoilValue } from 'recoil';
import { selectedFileState } from '../recoil_state';

function FileSelect({ files, onChange }) {
  const selectedFile = useRecoilValue(selectedFileState);

  return (
    <label className="text-gray-600 font-bold w-full text-right inline-block" htmlFor="dataSourceSelect">
      Current File:
      <select className="w-48 bg-background text-gray-600 pl-1" id="dataSourceSelect" onChange={onChange}>
        {files.map((file) => (
          <option value={file.id} key={file.id} selected={file.name === selectedFile}>
            {file.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default FileSelect;
