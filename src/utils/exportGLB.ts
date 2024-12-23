import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter';
import { Scene, Mesh, SphereGeometry, Color, MeshPhysicalMaterial } from 'three';
import type { BSDFParameters } from '../types/material';

export const exportToGLB = (materialProps: BSDFParameters) => {
  const scene = new Scene();
  
  const geometry = new SphereGeometry(1, 64, 64);
  const material = new MeshPhysicalMaterial({
    color: new Color(materialProps.baseColor),
    metalness: materialProps.metallic,
    roughness: materialProps.roughness,
    transmission: materialProps.transmission,
    ior: materialProps.ior,
    clearcoat: materialProps.clearcoat,
    clearcoatRoughness: materialProps.clearcoatRoughness,
    emissive: new Color(materialProps.emission),
    emissiveIntensity: materialProps.emissionStrength,
    transparent: materialProps.alpha < 1,
    opacity: materialProps.alpha,
    normalScale: materialProps.normal,
  });

  const sphere = new Mesh(geometry, material);
  scene.add(sphere);

  const exporter = new GLTFExporter();

  exporter.parse(
    scene,
    (buffer) => {
      const blob = new Blob([buffer as ArrayBuffer], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'material-sphere.glb';
      link.click();
      URL.revokeObjectURL(url);
    },
    (error) => {
      console.error('An error occurred while exporting:', error);
    },
    { binary: true }
  );
};