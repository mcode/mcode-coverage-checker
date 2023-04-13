import { useState } from 'react';
import { Icon } from '@iconify/react';

function Advanced() {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const handleAdvancedOptionsClick = () => {
    setShowAdvancedOptions((prev) => !prev);
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
          <h1 className="opacity-50 text-xs">Placeholder</h1>
        </div>
      )}
    </div>
  );
}
export default Advanced;
