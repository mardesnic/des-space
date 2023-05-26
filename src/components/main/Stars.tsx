import React from 'react';
import { Stars as DreiStars } from '@react-three/drei';

export const Stars: React.FC = () => {
  return (
    <DreiStars
      radius={300}
      depth={10000}
      count={20000}
      factor={7}
      saturation={0}
      fade={true}
    />
  );
};
