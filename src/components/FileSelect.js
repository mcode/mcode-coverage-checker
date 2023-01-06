function FileSelect({ files, onChange }) {
  return (
    <label className="text-gray-600 font-bold" htmlFor="dataSourceSelect">
      Current File:
      <select className="bg-background text-gray-600" id="dataSourceSelect" onChange={onChange}>
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
