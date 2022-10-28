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

  function toggleView(index) {
    const modifiedViewIndexes = new Set(jsonViewIndexes);
    if (jsonViewIndexes.has(index)) {
      modifiedViewIndexes.delete(index);
    } else {
      modifiedViewIndexes.add(index);
    }
    setJsonViewIndexes(modifiedViewIndexes);
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
          {files && files.length > 0 ? (
            files.map((file, index) => (
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
                  <td className="">{file.size}</td>
                  <td className="flex flex-row justify-between items-center my-2 h-full">
                    <div>{file.dateAdded}</div>
                    <div className="text-xs">
                      <button onClick={() => toggleView(index)} type="button" className="font-bold text-blue-500">
                        {jsonViewIndexes.has(index) ? 'Hide' : 'View'}
                      </button>
                      <button className="px-6 font-bold text-red-500" type="button">
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
            <td colSpan="3" className="text-center">
              No past files to display
            </td>
          )}
        </tbody>
      </table>
    </>
  );
}

export default PastFiles;
