import React from 'react';

interface TooltipProps {
  selectedText: string;
  onSave: () => void;
}

const Tooltip: React.FC<TooltipProps> = ({ selectedText, onSave }) => {
  console.log('Tooltip', selectedText);
  return (
    <div className="tooltip bg-gray-800 text-white p-2 rounded shadow-lg">
      <p>Save this text?</p>
      <button
        onClick={onSave}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default Tooltip;