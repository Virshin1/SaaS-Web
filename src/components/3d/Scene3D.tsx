import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Shape3D } from './Shape3D';

interface Scene3DProps {
  type: 'torus' | 'cylinder' | 'sphere' | 'pyramid';
  className?: string;
}

export const Scene3D = ({ type, className = '' }: Scene3DProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Shape3D type={type} position={[0, 0, 0]} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};