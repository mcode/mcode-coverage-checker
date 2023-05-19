import { Icon } from '@iconify/react';

export default function RHInput({ onRemove, layerId }) {
  const handleRemove = () => {
    onRemove();
  };

  const clearInputFields = () => {
    const keyInput = document.getElementById(`key-${layerId}`);
    const valueInput = document.getElementById(`value-${layerId}`);
    keyInput.value = '';
    valueInput.value = '';
  };

  return (
    <div className="flex justify-between items-center py-2">
      <input
        type="text"
        className="border border-gray-300 px-2 py-1 rounded-lg focus:outline-none focus:ring focus:border-blue-500 flex-1 mr-2"
        placeholder="e.g. Content-Type"
        id={`key-${layerId}`}
      />
      <input
        type="text"
        className="border border-gray-300 px-2 py-1 rounded-lg focus:outline-none focus:ring focus:border-blue-500 flex-1 ml-2"
        placeholder="e.g. application/json"
        id={`value-${layerId}`}
      />
      <Icon
        icon="uil:trash-alt"
        className="text-2xl ml-4 cursor-pointer"
        onClick={() => {
          handleRemove();
          clearInputFields();
        }}
      />
    </div>
  );
}
