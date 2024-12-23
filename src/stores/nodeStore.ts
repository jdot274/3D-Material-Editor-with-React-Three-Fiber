import { create } from 'zustand';
import { MaterialNode, MaterialConnection, MaterialParameter } from '../types/material';

interface NodeStore {
  nodes: MaterialNode[];
  edges: MaterialConnection[];
  addNode: (node: MaterialNode) => void;
  updateNodeParams: (nodeId: string, params: Record<string, any>) => void;
  addConnection: (connection: MaterialConnection) => void;
  removeConnection: (connectionId: string) => void;
}

export const useNodeStore = create<NodeStore>((set) => ({
  nodes: [
    {
      id: 'output',
      type: 'outputNode',
      position: { x: 500, y: 200 },
      data: {
        label: 'Material Output',
        params: {
          diffuseColor: '#ffffff',
          metalness: 0.5,
          roughness: 0.5,
          normalStrength: 1.0,
          emissiveIntensity: 0,
          opacity: 1.0
        }
      }
    },
    {
      id: 'albedo',
      type: 'parameterNode',
      position: { x: 100, y: 100 },
      data: {
        label: 'Diffuse Albedo',
        params: {
          color: '#ffffff'
        }
      }
    }
  ],
  edges: [],
  addNode: (node) => set((state) => ({ nodes: [...state.nodes, node] })),
  updateNodeParams: (nodeId, params) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, params: { ...node.data.params, ...params } } }
          : node
      )
    })),
  addConnection: (connection) =>
    set((state) => ({ edges: [...state.edges, connection] })),
  removeConnection: (connectionId) =>
    set((state) => ({
      edges: state.edges.filter((edge) => edge.id !== connectionId)
    }))
}));