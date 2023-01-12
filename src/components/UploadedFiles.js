import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import ReactJson from 'react-json-view';
import { Icon } from '@iconify/react';
import { uploadedFilesLookup, uploadedFiles } from '../recoil_state';

function UploadedFiles() {
  const [parent] = useAutoAnimate();
  const [jsonViewKeys, setJsonViewKeys] = useState(new Set());
  const files = useRecoilValue(uploadedFiles);
  const [filesLookup, setFilesLookup] = useRecoilState(uploadedFilesLookup);

  function toggleView(key) {
    const modifiedViewKeys = new Set(jsonViewKeys);
    if (jsonViewKeys.has(key)) {
      modifiedViewKeys.delete(key);
    } else {
      modifiedViewKeys.add(key);
    }
    setJsonViewKeys(modifiedViewKeys);
  }

  function handleDelete(id) {
    const newFilesLookup = { ...filesLookup };
    delete newFilesLookup[id];
    setFilesLookup(newFilesLookup);
  }

  return (
    <>
      <h1 className="font-bold text-2xl">All Files</h1>
      <p className="text-sm text-gray-600">
        These files can be examined in-depth on the dashboard and are included within the longitudinal views.
      </p>
      <table ref={parent} className="my-2 w-full table-fixed text-left rounded shadow-md bg-gray-100">
        <thead className="text-gray-500 font-thin rounded">
          <tr>
            <th scope="col" className="px-6 font-normal w-3/5 py-3">
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
            files.map((file) => (
              <React.Fragment key={file.id}>
                <tr className="bg-white border-b text-sm">
                  <td className="px-6 text-base">
                    <Icon icon="bi:file-earmark-code" className="text-4xl mr-2 my-2 inline-block text-gray-500" />
                    {file.name}
                  </td>
                  <td className="text-gray-500">{file.size}</td>
                  <td className="flex flex-row justify-between items-center my-4 h-full">
                    <div className="text-gray-500">{file.dateAdded}</div>
                    <div className="text-xs flex flex-wrap justify-end pr-6">
                      <button
                        onClick={() => toggleView(file.id)}
                        type="button"
                        className="m-2 font-bold text-blue-500 hover:text-blue-600"
                      >
                        {jsonViewKeys.has(file.id) ? 'Hide' : 'View'}
                      </button>
                      <button
                        onClick={() => handleDelete(file.id)}
                        className="m-2 font-bold text-red-500 hover:text-red-600"
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                {jsonViewKeys.has(file.id) && (
                  <tr>
                    <td className="px-6" colSpan="3">
                      <ReactJson
                        src={file.body}
                        collapsed={3}
                        groupArraysAfterLength={20}
                        style={{ maxHeight: '400px', overflow: 'auto' }}
                      />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center bg-white italic my-2">
                No past files to display
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default UploadedFiles;
