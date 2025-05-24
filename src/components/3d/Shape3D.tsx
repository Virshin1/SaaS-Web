import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus, Cylinder, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

interface Shape3DProps {
  type: 'torus' | 'cylinder' | 'sphere' | 'pyramid';
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color?: string;
}

export const Shape3D = ({ type, position, rotation = [0, 0, 0], scale = 1, color = '#ffffff' }: Shape3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  const shapeProps = {
    ref: meshRef,
    position: position,
    rotation: rotation,
    scale: scale,
  };

  switch (type) {
    case 'torus':
      return (
        <Torus args={[1, 0.4, 16, 32]} {...shapeProps}>
          <meshStandardMaterial color={color} />
        </Torus>
      );
    case 'cylinder':
      return (
        <Cylinder args={[0.5, 0.5, 2, 32]} {...shapeProps}>
          <meshStandardMaterial color={color} />
        </Cylinder>
      );
    case 'sphere':
      return (
        <Sphere args={[1, 32, 32]} {...shapeProps}>
          <meshStandardMaterial color={color} />
        </Sphere>
      );
    case 'pyramid':
      return (
        <Box args={[1, 1, 1]} {...shapeProps}>
          <meshStandardMaterial color={color} />
        </Box>
      );
    default:
      return null;
  }
};