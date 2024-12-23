import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  NodeTypes,
  EdgeTypes,
  Connection,
  Edge
} from 'reactflow';
import 'reactflow/dist/style.css';
import { ParameterNode } from './nodes/ParameterNode';
import { OutputNode } from './nodes/OutputNode';
import { useNodeStore } from '../stores/nodeStore';

const nodeTypes: NodeTypes = {
  parameterNode: ParameterNode,
  outputNode: OutputNode,
};

export const NodeEditor: React.FC = () => {
  const { nodes, edges, addConnection, removeConnection } = useNodeStore();

  const onConnect = useCallback(
    (params: Connection) => {
      const connectionId = `edge-${params.source}-${params.target}-${Date.now()}`;
      addConnection({
        id: connectionId,
        ...params,
      } as Edge);
    },
    [addConnection]
  );

  const onEdgeRemove = useCallback(
    (edge: Edge) => {
      removeConnection(edge.id);
    },
    [removeConnection]
  );

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onEdgesDelete={onEdgeRemove}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};