/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function RequestOverlay({ requestHeaders, setRequestHeaders, setOverlayVisible }) {
  const [editedRequestHeaders, setEditedRequestHeaders] = useState([...requestHeaders]);

  function addHeader() {
    const modifiedHeadersArr = [...editedRequestHeaders];
    modifiedHeadersArr.push(['', '']);
    setEditedRequestHeaders(modifiedHeadersArr);
  }

  function removeHeader(idx) {
    const modifiedHeadersArr = [...editedRequestHeaders];
    modifiedHeadersArr.splice(idx, 1);
    setEditedRequestHeaders(modifiedHeadersArr);
  }

  function handleKeyChange(e) {
    // Update relevant tuple
    const { value } = e.target;
    const changedSetIdx = e.target.id.replace('key-', '');
    const changedSet = [...editedRequestHeaders[changedSetIdx]];
    changedSet[0] = value;

    // Update request headers prop
    const modifiedHeadersArr = [...editedRequestHeaders];
    modifiedHeadersArr.splice(changedSetIdx, 1, changedSet);
    setEditedRequestHeaders(modifiedHeadersArr);
  }

  function handleValueChange(e) {
    // Update relevant tuple
    const { value } = e.target;
    const changedSetIdx = e.target.id.replace('value-', '');
    const changedSet = [...editedRequestHeaders[changedSetIdx]];
    changedSet[1] = value;

    // Update request headers prop
    const modifiedHeadersArr = [...editedRequestHeaders];
    modifiedHeadersArr.splice(changedSetIdx, 1, changedSet);
    setEditedRequestHeaders(modifiedHeadersArr);
  }

  function handleSaveHeaders() {
    setRequestHeaders(editedRequestHeaders);
    setOverlayVisible(false);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSaveHeaders();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50">
      <button type="button" className="bg-background p-4 rounded-lg w-[37rem]" onKeyDown={handleKeyDown}>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Key</p>
          <p className="text-lg font-semibold ml-4">Value</p>
          <Icon
            icon="ic:round-plus"
            className="text-2xl cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              addHeader();
            }}
          />
        </div>
        <div className="mt-1 mb-4 bg-black bg-opacity-25 h-px rounded" />
        {editedRequestHeaders.length > 0 ? (
          editedRequestHeaders.map(([key, value], idx) => (
            <div key={`headerfield-${idx}`} className="flex justify-between items-center py-2">
              <input
                type="text"
                className="border border-gray-300 px-2 py-1 rounded-lg focus:outline-none focus:ring focus:border-blue-500 flex-1 mr-2"
                placeholder="e.g. Content-Type"
                id={`key-${idx}`}
                value={key || ''}
                onChange={handleKeyChange}
              />
              <input
                type="text"
                className="border border-gray-300 px-2 py-1 rounded-lg focus:outline-none focus:ring focus:border-blue-500 flex-1 ml-2"
                placeholder="e.g. application/json"
                id={`value-${idx}`}
                value={value || ''}
                onChange={handleValueChange}
              />
              <Icon
                icon="uil:trash-alt"
                className="text-2xl ml-4 cursor-pointer"
                onClick={() => {
                  removeHeader(idx);
                }}
              />
            </div>
          ))
        ) : (
          <p>No request headers added</p>
        )}
        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="bg-blue-500 hover:opacity-90 transition text-white px-4 py-2 rounded-lg mr-4"
            onClick={handleSaveHeaders}
          >
            Save Headers
          </button>
          <button
            type="button"
            className="bg-gray-300 hover:opacity-70 transition text-gray-700 px-4 py-2 rounded-lg"
            onClick={() => setOverlayVisible(false)}
          >
            Close
          </button>
        </div>
      </button>
    </div>
  );
}
