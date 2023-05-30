/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { Icon } from '@iconify/react';
import RequestOverlay from './RequestOverlay';

function Advanced({ requestHeaders, setRequestHeaders }) {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <div>
      <div
        className="flex items-center cursor-pointer pt-1 font"
        role="button"
        tabIndex={0}
        onClick={() => setShowAdvancedOptions((prev) => !prev)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            setShowAdvancedOptions((prev) => !prev);
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
            onClick={() => setOverlayVisible(true)}
          >
            <span className="mr-1 font-semibold">Edit</span>
            <Icon icon="ic:round-plus" />
          </button>
          {requestHeaders.length > 0 &&
            requestHeaders.map(([key, value], idx) => (
              <p key={idx} className="opacity-50 text-sm font-semibold py-1 mr-2">{`${key}: ${value}`}</p>
            ))}
        </div>
      )}
      {overlayVisible && (
        <RequestOverlay
          requestHeaders={requestHeaders}
          setRequestHeaders={setRequestHeaders}
          setOverlayVisible={setOverlayVisible}
        />
      )}
    </div>
  );
}

export default Advanced;
