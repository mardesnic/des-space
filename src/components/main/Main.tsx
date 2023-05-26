import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Navbar } from '../layout/Navbar';
import { Scene } from './Scene';
import { styled } from '@mui/system';
import { Loading } from '../layout/Loading';

const CanvasContainer = styled('div')(() => ({
  width: '100vw',
  height: 'calc(100svh - 64px)',
  overflow: 'hidden',
  background: 'black',
  cursor: 'grab',
  '&:active': {
    cursor: 'grabbing',
  },
}));

export const Main: React.FC = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <CanvasContainer>
          <Canvas>
            <Scene />
          </Canvas>
        </CanvasContainer>
      </Suspense>
    </>
  );
};
