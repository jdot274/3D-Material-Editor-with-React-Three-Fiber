import React from 'react';
import { MaterialEditor } from './components/MaterialEditor';
import { Viewport } from './components/Viewport';
import { NodeEditor } from './components/NodeEditor';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      <div className="flex-1 relative">
        <Viewport />
      </div>
      <div className="w-1/2 flex flex-col">
        <div className="h-1/2 border-l border-gray-700">
          <NodeEditor />
        </div>
        <div className="h-1/2 p-6 bg-gray-800 border-l border-t border-gray-700 overflow-y-auto">
          <MaterialEditor />
        </div>
      </div>
    </div>
  );
}

export default App;