import { create } from 'zustand';
import type { BSDFParameters } from '../types/material';

interface MaterialStore {
  materialProps: BSDFParameters;
  updateMaterial: (props: Partial<BSDFParameters>) => void;
}

export const useMaterialStore = create<MaterialStore>((set) => ({
  materialProps: {
    baseColor: '#ffffff',
    subsurfaceColor: '#ffffff',
    metallic: 0,
    specular: 0.5,
    roughness: 0.5,
    specularTint: 0,
    anisotropic: 0,
    sheen: 0,
    sheenTint: 0,
    clearcoat: 0,
    clearcoatRoughness: 0,
    transmission: 0,
    ior: 1.45,
    emission: '#000000',
    emissionStrength: 0,
    alpha: 1,
    normal: 1,
  },
  updateMaterial: (props) =>
    set((state) => ({
      materialProps: { ...state.materialProps, ...props },
    })),
}));