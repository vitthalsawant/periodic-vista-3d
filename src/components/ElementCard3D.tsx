
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import { Element, categoryColors } from '@/data/elements';
import * as THREE from 'three';

interface ElementCard3DProps {
  element: Element;
  isActive: boolean;
  onClick: () => void;
}

// Component that renders the actual 3D element card
const Card = ({ element, isActive, onClick }: ElementCard3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  const color = categoryColors[element.category] || '#888';
  
  // Convert hex color to THREE.Color
  const threeColor = new THREE.Color(color);
  
  // Handle automatic rotation
  useFrame((state, delta) => {
    if (meshRef.current && !isActive && !hovered) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });
  
  // Hover effect for desktop
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [hovered]);
  
  return (
    <group
      onClick={onClick}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <RoundedBox
        ref={meshRef}
        args={[2, 2, 0.2]} // width, height, depth
        radius={0.1}
        smoothness={4}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial 
          color={threeColor} 
          metalness={0.5}
          roughness={0.2}
          emissive={threeColor}
          emissiveIntensity={hovered || isActive ? 0.4 : 0.1}
        />
      </RoundedBox>
      
      <Text
        position={[0, 0.5, 0.11]}
        fontSize={0.6}
        color="white"
        font="/fonts/Inter-Bold.woff"
        anchorX="center"
        anchorY="middle"
      >
        {element.symbol}
      </Text>
      
      <Text
        position={[0, -0.3, 0.11]}
        fontSize={0.2}
        color="white"
        font="/fonts/Inter-Regular.woff"
        anchorX="center"
        anchorY="middle"
      >
        {element.name}
      </Text>
      
      <Text
        position={[-0.8, 0.8, 0.11]}
        fontSize={0.2}
        color="white"
        font="/fonts/Inter-Regular.woff"
        anchorX="center"
        anchorY="middle"
      >
        {element.atomicNumber}
      </Text>
    </group>
  );
};

// Wrapper component that sets up the Three.js canvas
const ElementCard3D = ({ element, isActive, onClick }: ElementCard3DProps) => {
  return (
    <div className="w-full h-full min-h-[140px]">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Card element={element} isActive={isActive} onClick={onClick} />
      </Canvas>
    </div>
  );
};

export default ElementCard3D;
