export enum SPACE_OBJECT_KEY {
  SUN = 'SUN',
  MERCURY = 'MERCURY',
  VENUS = 'VENUS',
  EARTH = 'EARTH',
  MOON = 'MOON',
  MARS = 'MARS',
  JUPITER = 'JUPITER',
  SATURN = 'SATURN',
  URANUS = 'URANUS',
  NEPTUNE = 'NEPTUNE',
}
export type ISpaceObject = {
  key: SPACE_OBJECT_KEY;
  size: number;
  position: {
    x: number;
    y: number;
    z: number;
  };
  metalness?: number;
  roughness?: number;
  lightIntensity?: number;
};
export type ISpaceObjects = { [key: string]: ISpaceObject };
