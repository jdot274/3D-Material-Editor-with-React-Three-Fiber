import React from 'react';
import { Handle, Position } from 'reactflow';

interface OutputNodeProps {
  id: string;
  data: {
    label: string;
    params: {
      diffuseColor: string;
      metalness: number;
      roughness: number;
      normalStrength: number;
      emissiveIntensity: number;
      opacity: number;
    };
  };
}

export const OutputNode: React.FC<OutputNodeProps> = ({ id, data }) => {
  return (
    <div className="bg-purple-900 rounded-lg p-4 min-w-[250px]">
      <div className="text-white font-medium mb-4">{data.label}</div>
      <div className="space-y-3">
        {[
          { id: 'diffuse', color: 'bg-red-500' },
          { id: 'metalness', color: 'bg-blue-500' },
          { id: 'roughness', color: 'bg-green-500' },
          { id: 'normal', color: 'bg-yellow-500' },
          { id: 'emissive', color: 'bg-orange-500' },
          { id: 'opacity', color: 'bg-purple-500' }
        ].map((handle) => (
          <Handle
            key={`handle-${id}-${handle.id}`}
            type="target"
            position={Position.Left}
            id={`${id}-${handle.id}`}
            className={`w-3 h-3 ${handle.color}`}
          />
        ))}
      </div>
    </div>
  );
};