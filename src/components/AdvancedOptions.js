import { useState } from 'react';
import { Icon } from '@iconify/react';
import RequestOverlay from './RequestOverlay';

function Advanced() {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [savedHeaders, setSavedHeaders] = useState([]);

  const handleAdvancedOptionsClick = () => {
    setShowAdvancedOptions((prev) => !prev);
  };

  const handleAddClick = () => {
    setOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  const handleSaveHeaders = (headers) => {
    setSavedHeaders((prevHeaders) => [...prevHeaders, ...headers]);
  };

  const handleRemoveHeader = (headerId) => {
    setSavedHeaders((prevHeaders) => prevHeaders.filter((header) => header.id !== headerId));
  };

  return (
    <div>
      <div
        className="flex items-center cursor-pointer pt-1 font"
        role="button"
        tabIndex={0}
        onClick={handleAdvancedOptionsClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handleAdvancedOptionsClick();
          }
        }}
      >
        <p>Advanced Options</p>
        <Icon
          icon="bi:caret-down-fill"
          className="ml-1 mt-1"
          height="12"
          rotate={showAdvancedOptions ? '0deg' : '270deg'}
        />
      </div>
      {showAdvancedOptions && (
        <div>
          <h3 className="font-bold text-lg mt-3">Request Headers</h3>
          <button
            type="button"
            className="bg-white text-black rounded-lg px-24 py-1 flex items-center my-2 shadow-widgit transition hover:bg-[#F1F1F1]"
            onClick={handleAddClick}
          >
            <span className="mr-1 font-semibold">Add</span>
            <Icon icon="ic:round-plus" />
          </button>
          {savedHeaders.length > 0 && //* handles the display and removal of the request headers *//
            savedHeaders.map((header) => (
              <div key={header.id} className="flex justify-between items-center max-w-[15rem]">
                <p className="opacity-50 text-sm font-semibold py-1 mr-2">{`${header.key}: ${header.value}`}</p>
                <button
                  type="button"
                  className="text-red-500 cursor-pointer focus:outline-none"
                  onClick={() => handleRemoveHeader(header.id)}
                >
                  <Icon icon="uil:trash-alt" />
                </button>
              </div>
            ))}
        </div>
      )}
      {overlayVisible && <RequestOverlay onCloseOverlay={handleCloseOverlay} onSaveHeaders={handleSaveHeaders} />}
    </div>
  );
}

export default Advanced;
