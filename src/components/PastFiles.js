import { Icon } from '@iconify/react';
import ReactJson from 'react-json-view';
import { useState } from 'react';

const files = [
  {
    name: 'bundle1.json',
    size: '500 KB',
    dateAdded: '10/10/2022',
    body: {
      resourceType: 'StructureDefinition',
    },
  },
  {
    name: 'bundle2.json',
    size: '500 KB',
    dateAdded: '10/10/2022',
    body: {
      resourceType: 'StructureDefinition',
    },
  },
  {
    name: 'bundle3.json',
    size: '500 KB',
    dateAdded: '10/10/2022',
    body: {
      resourceType: 'StructureDefinition',
    },
  },
];

function PastFiles() {
  const [jsonViewIndexes, setJsonViewIndexes] = useState(new Set());
  // I don't think we'll need this state in prod, pastFiles and setPastFiles
  // should be passed in as props
  const [pastFiles, setPastFiles] = useState(files);

  function toggleView(index) {
    const modifiedViewIndexes = new Set(jsonViewIndexes);
    if (jsonViewIndexes.has(index)) {
      modifiedViewIndexes.delete(index);
    } else {
      modifiedViewIndexes.add(index);
    }
    setJsonViewIndexes(modifiedViewIndexes);
  }

  function handleDelete(index) {
    setPastFiles([...pastFiles.slice(0, index), ...pastFiles.slice(index + 1)]);
  }

  return (
    <>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Past Files</h1>
      <p style={{ fontSize: '15px' }}>These files are included within the longitudinal data</p>
      <table style={{ backgroundColor: '#ECECEC' }} className="w-full table-fixed text-left rounded shadow-md">
        <thead className="text-gray-500 font-thin rounded">
          <tr className="">
            <th scope="col" className="px-6 font-normal py-3">
              Name
            </th>
            <th scope="col" className="font-normal py-3">
              File size
            </th>
            <th scope="col" className="font-normal py-3">
              Date added
            </th>
          </tr>
        </thead>
        <tbody>
          {pastFiles && pastFiles.length > 0 ? (
            pastFiles.map((file, index) => (
              <>
                <tr key={file.name} className="bg-white border-b" style={{ fontSize: '15px' }}>
                  <td className="px-6 text-base">
                    <Icon
                      icon="bi:file-earmark-code"
                      className="text-4xl mr-2 my-2"
                      style={{ color: 'gray', display: 'inline-block' }}
                    />
                    {file.name}
                  </td>
                  <td className="text-gray-500">{file.size}</td>
                  <td className="flex flex-row justify-between items-center my-4 h-full">
                    <div className="text-gray-500">{file.dateAdded}</div>
                    <div className="text-xs">
                      <button
                        onClick={() => toggleView(index)}
                        type="button"
                        className="font-bold text-blue-500 hover:text-blue-600"
                      >
                        {jsonViewIndexes.has(index) ? 'Hide' : 'View'}
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="px-6 font-bold text-red-500 hover:text-red-600"
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                {jsonViewIndexes.has(index) ? (
                  <tr>
                    <td className="px-6" colSpan="3">
                      <ReactJson src={file.body} collapsed={4} />
                    </td>
                  </tr>
                ) : undefined}
              </>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center bg-white italic">
                No past files to display
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default PastFiles;
