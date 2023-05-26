import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Ring, Sphere } from '@react-three/drei';
import { Mesh, Texture } from 'three';
import { ISpaceObject } from '../../types';
import * as THREE from 'three';

interface Props {
  colorMap: Texture;
  data: ISpaceObject;
  atmosphereMap?: Texture;
  ringColorMap?: Texture;
}

export const SpaceObject = ({
  colorMap,
  atmosphereMap,
  ringColorMap,
  data,
}: Props) => {
  const objectRef = useRef<Mesh>(null);
  const atmosphereRef = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);
  const { position, size, lightIntensity, metalness, roughness } = data;
  useFrame(({ clock }) => {
    if (!objectRef.current) {
      return;
    }
    const elapsedTime = clock.getElapsedTime();
    const rotationSpeed = elapsedTime / 20;
    objectRef.current.rotation.y = rotationSpeed;
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = elapsedTime / 30;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = elapsedTime / 30;
    }
  });
  return (
    <>
      {!!atmosphereMap && (
        <Sphere
          ref={atmosphereRef}
          args={[size + 0.1, 128, 128]}
          position={[position.x, position.y, position.z]}
        >
          <meshPhongMaterial
            map={atmosphereMap}
            opacity={0.4}
            depthWrite={true}
            transparent={true}
            side={THREE.DoubleSide}
          />
        </Sphere>
      )}
      {!!lightIntensity && (
        <>
          <pointLight
            color='white'
            position={[position.x + size * 2, position.y, position.z]}
            intensity={lightIntensity}
          />
          <pointLight
            color='white'
            position={[position.x - size * 2, position.y, position.z]}
            intensity={lightIntensity}
          />
          <pointLight
            color='white'
            position={[position.x, position.y + size * 2, position.z]}
            intensity={lightIntensity}
          />
          <pointLight
            color='white'
            position={[position.x, position.y - size * 2, position.z]}
            intensity={lightIntensity}
          />
          <pointLight
            color='white'
            position={[position.x, position.y, position.z + size * 2]}
            intensity={lightIntensity}
          />
          <pointLight
            color='white'
            position={[position.x, position.y, position.z - size * 2]}
            intensity={lightIntensity}
          />
        </>
      )}
      <Sphere
        ref={objectRef}
        args={[size, 128, 128]}
        position={[position.x, position.y, position.z]}
      >
        <meshStandardMaterial
          map={colorMap}
          metalness={metalness}
          roughness={roughness}
        />
      </Sphere>
      {!!ringColorMap && (
        <Ring
          ref={ringRef}
          args={[size * 1.2, size * 2, 64]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[position.x, position.y, position.z]}
        >
          <meshBasicMaterial
            attach='material'
            map={ringColorMap}
            side={THREE.DoubleSide}
          />
        </Ring>
      )}
    </>
  );
};
