import React from 'react';
import { Handle, Position } from 'reactflow';

interface ParameterNodeProps {
  id: string;
  data: {
    label: string;
    params: Record<string, any>;
  };
}

export const ParameterNode: React.FC<ParameterNodeProps> = ({ id, data }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 min-w-[200px]">
      <div className="text-white font-medium mb-2">{data.label}</div>
      {Object.entries(data.params).map(([key, value]) => (
        <div key={`param-${id}-${key}`} className="mb-2">
          <label className="text-gray-300 text-sm block mb-1">{key}</label>
          {typeof value === 'number' ? (
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={value}
              className="w-full"
              onChange={(e) => {
                // Handle parameter changes
              }}
            />
          ) : (
            <input
              type="color"
              value={value}
              className="w-full h-8"
              onChange={(e) => {
                // Handle parameter changes
              }}
            />
          )}
        </div>
      ))}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output-${Date.now()}`}
        className="w-3 h-3 bg-blue-500"
      />
    </div>
  );
};