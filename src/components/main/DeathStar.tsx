import { useGLTF } from '@react-three/drei';

export const DeathStar = () => {
  const gltf = useGLTF('assets/death-star/scene.gltf');
  return <primitive object={gltf.scene} position={[7500, 0, 0]} />;
};
