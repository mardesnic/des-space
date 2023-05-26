import { useBounds } from '@react-three/drei';

export const SelectToZoom = ({ children }: { children: React.ReactNode }) => {
  const api = useBounds();
  return (
    <group
      onClick={(e) => (
        e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).clip().fit()
      )}
    >
      {children}
    </group>
  );
};
