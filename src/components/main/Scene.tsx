import React from 'react';
import { OrbitControls, Bounds, PerspectiveCamera } from '@react-three/drei';
import { Stars } from './Stars';
import { useLoader } from '@react-three/fiber';
import EarthColorMap from '../../assets/earth/color.jpg';
import SunColorMap from '../../assets/sun/color.jpg';
import EarthAtmosphereMap from '../../assets/earth/atmosphere.jpg';
import MoonColorMap from '../../assets/moon/color.jpg';
import MercuryColorMap from '../../assets/mercury/color.jpg';
import VenusColorMap from '../../assets/venus/color.jpg';
import VenusAtmosphereMap from '../../assets/venus/atmosphere.jpg';
import MarsColorMap from '../../assets/mars/color.jpg';
import JupiterColorMap from '../../assets/jupiter/color.jpg';
import UranusColorMap from '../../assets/uranus/color.jpg';
import SaturnColorMap from '../../assets/saturn/color.jpg';
import SaturnRingColorMap from '../../assets/saturn/ring.jpeg';
import NeptuneColorMap from '../../assets/neptune/color.jpg';
import { Texture, TextureLoader } from 'three';
import { SPACE_OBJECTS } from '../../const';
import { SpaceObject } from './SpaceObject';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { SelectToZoom } from './SelectToZoom';
import { DeathStar } from './DeathStar';

export const Scene: React.FC = () => {
  const [
    earthColorMap,
    earthAtmosphereMap,
    sunColorMap,
    moonColorMap,
    mercuryColorMap,
    venusColorMap,
    venusAtmosphereMap,
    marsColorMap,
    jupiterColorMap,
    uranusColorMap,
    saturnColorMap,
    saturnRingColorMap,
    neptuneColorMap,
  ] = useLoader(TextureLoader, [
    EarthColorMap,
    EarthAtmosphereMap,
    SunColorMap,
    MoonColorMap,
    MercuryColorMap,
    VenusColorMap,
    VenusAtmosphereMap,
    MarsColorMap,
    JupiterColorMap,
    UranusColorMap,
    SaturnColorMap,
    SaturnRingColorMap,
    NeptuneColorMap,
  ]);
  const textures: {
    [key: string]: {
      colorMap: Texture;
      atmosphereMap?: Texture;
      ringColorMap?: Texture;
    };
  } = {
    SUN: { colorMap: sunColorMap },
    MERCURY: { colorMap: mercuryColorMap },
    VENUS: { colorMap: venusColorMap, atmosphereMap: venusAtmosphereMap },
    MOON: { colorMap: moonColorMap },
    EARTH: {
      colorMap: earthColorMap,
      atmosphereMap: earthAtmosphereMap,
    },
    MARS: { colorMap: marsColorMap },
    JUPITER: { colorMap: jupiterColorMap },
    SATURN: { colorMap: saturnColorMap, ringColorMap: saturnRingColorMap },
    URANUS: { colorMap: uranusColorMap },
    NEPTUNE: { colorMap: neptuneColorMap },
  };
  return (
    <Bounds clip observe>
      <PerspectiveCamera makeDefault position={[0, 0, 800]} near={0.1} />
      <ambientLight intensity={0.2} />
      <EffectComposer>
        <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
      <OrbitControls
        makeDefault
        minDistance={100}
        enablePan={false}
        zoomSpeed={0.6}
        rotateSpeed={0.4}
      />
      <Stars />
      <SelectToZoom>
        {Object.values(SPACE_OBJECTS).map((spaceObject) => (
          <SpaceObject
            key={spaceObject.key}
            colorMap={textures[spaceObject.key].colorMap}
            atmosphereMap={textures[spaceObject.key].atmosphereMap}
            ringColorMap={textures[spaceObject.key].ringColorMap}
            data={spaceObject}
          />
        ))}
        <DeathStar />
      </SelectToZoom>
    </Bounds>
  );
};
