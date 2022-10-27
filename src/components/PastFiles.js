import { Icon } from '@iconify/react';

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
  return (
    <>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Past Files</h1>
      <p style={{ fontSize: '12px' }}>These files are included within the longitudinal data</p>
      <table style={{ backgroundColor: '#ECECEC' }} className="w-full table-fixed text-left rounded shadow-md">
        <thead className="text-gray-500 font-thin rounded">
          <tr className="">
            <th className="px-6 font-normal">Name</th>
            <th className="font-normal">File size</th>
            <th className="font-normal">Date added</th>
            {/* <th /> */}
          </tr>
        </thead>
        <tbody>
          {files && files.length > 0 ? (
            files.map((file) => (
              <tr key={file.name} className="bg-white border-b" style={{ fontSize: '15px' }}>
                <td className="px-6">
                  <Icon icon="bi:file-earmark-code" style={{ color: 'gray' }} />
                  {file.name}
                </td>
                <td className="">{file.size}</td>
                <td className="flex flex-row justify-between">
                  <div>{file.dateAdded}</div>
                  <div className="text-xs">
                    <button type="button" className="font-bold text-blue-500">
                      View
                    </button>
                    <button className="px-6 font-bold text-red-500" type="button">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
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
