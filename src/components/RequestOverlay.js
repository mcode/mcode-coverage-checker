import { useState } from 'react';
import { Icon } from '@iconify/react';
import RHInput from './RequestH_input';

export default function RequestOverlay({ onCloseOverlay, onSaveHeaders }) {
  const [layers, setLayers] = useState([1]);
  const [overlayOpen, setOverlayOpen] = useState(true);
  const [headers] = useState([]);

  const handleAddLayer = () => {
    setLayers((prevLayers) => [...prevLayers, layers.length + 1]);
  };

  const handleRemoveLayer = (layerId) => {
    setLayers((prevLayers) => prevLayers.filter((id) => id !== layerId));
  };

  const handleCloseOverlay = () => {
    setOverlayOpen(false);
    onCloseOverlay();
  };

  const handleSaveHeaders = () => {
    const newHeaders = layers.map((layerId) => {
      const keyInput = document.getElementById(`key-${layerId}`);
      const valueInput = document.getElementById(`value-${layerId}`);
      const key = keyInput.value.trim();
      const value = valueInput.value.trim();
      return { id: layerId, key, value };
    });
    onSaveHeaders(newHeaders);
    handleCloseOverlay();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSaveHeaders();
    }
  };

  if (!overlayOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 z-50">
      <button type="button" className="bg-background p-4 rounded-lg w-[37rem]" onKeyDown={handleKeyDown}>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Key</p>
          <p className="text-lg font-semibold ml-4">Value</p>
          <Icon icon="ic:round-plus" className="text-2xl cursor-pointer" onClick={handleAddLayer} />
        </div>
        <div className="mt-1 mb-4 bg-black bg-opacity-25 h-px rounded" />
        {layers.map((layerId) => (
          <RHInput key={layerId} onRemove={() => handleRemoveLayer(layerId)} layerId={layerId} />
        ))}
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
            onClick={handleCloseOverlay}
          >
            Close
          </button>
        </div>
        {headers.length > 0 && (
          <div className="mt-4">
            <h3 className="font-bold text-lg">Saved Headers:</h3>
            {headers.map((header) => (
              <p key={header.id}>{`${header.key}: ${header.value}`}</p>
            ))}
          </div>
        )}
      </button>
    </div>
  );
}
