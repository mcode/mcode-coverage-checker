function FileSelect({ files, onChange }) {
  return (
    <label className="text-gray-600 font-bold w-full text-right inline-block" htmlFor="dataSourceSelect">
      Current File:
      <select className="bg-background text-gray-600 pl-1" id="dataSourceSelect" onChange={onChange}>
        {files.map((file) => (
          <option value={file.id} key={file.id}>
            {file.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default FileSelect;
