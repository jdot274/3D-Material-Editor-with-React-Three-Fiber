import { useRef } from 'react';
import { Mesh, Color } from 'three';
import { useMaterialStore } from '../stores/materialStore';

export const Sphere = () => {
  const meshRef = useRef<Mesh>(null);
  const materialProps = useMaterialStore((state) => state.materialProps);

  const materialParameters = {
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
  };

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial {...materialParameters} />
    </mesh>
  );
};