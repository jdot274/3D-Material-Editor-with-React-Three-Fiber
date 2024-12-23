export interface MaterialNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: {
    label: string;
    params: Record<string, any>;
  };
}

export interface MaterialConnection {
  id: string;
  source: string;
  target: string;
  sourceHandle: string;
  targetHandle: string;
}

export interface MaterialParameter {
  name: string;
  type: 'float' | 'color' | 'vector2' | 'vector3' | 'texture';
  value: any;
  min?: number;
  max?: number;
  step?: number;
}

export interface BSDFParameters {
  baseColor: string;
  subsurfaceColor: string;
  metallic: number;
  specular: number;
  roughness: number;
  specularTint: number;
  anisotropic: number;
  sheen: number;
  sheenTint: number;
  clearcoat: number;
  clearcoatRoughness: number;
  transmission: number;
  ior: number;
  emission: string;
  emissionStrength: number;
  alpha: number;
  normal: number;
}