import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Sphere } from './Sphere';

export const Viewport = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Sphere />
        <OrbitControls />
      </Canvas>
    </div>
  );
};