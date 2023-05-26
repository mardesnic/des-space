import { ISpaceObjects, SPACE_OBJECT_KEY } from './types';

export const EMAIL = 'marin.desnica@gmail.com';
export const GITHUB = 'https://github.com/mardesnic';
export const TWITTER = 'https://twitter.com/daisho13th';
export const WEBSITE = 'https://mardesnic.github.io/';
export const NAME = 'Marin Desnica';
export const APP_NAME = `<Space />`;

export const SPACE_OBJECTS: ISpaceObjects = {
  SUN: {
    key: SPACE_OBJECT_KEY.SUN,
    position: {
      x: -9000,
      y: 0,
      z: 0,
    },
    size: 3268,
    lightIntensity: 2,
  },
  MERCURY: {
    key: SPACE_OBJECT_KEY.MERCURY,
    position: {
      x: -2000,
      y: 0,
      z: 0,
    },
    size: 26,
    metalness: 1.2,
    roughness: 0.8,
  },
  VENUS: {
    key: SPACE_OBJECT_KEY.VENUS,
    position: {
      x: -1000,
      y: 0,
      z: 0,
    },
    size: 28,
    metalness: 1.2,
    roughness: 0.8,
  },
  MOON: {
    key: SPACE_OBJECT_KEY.MOON,
    position: {
      x: -50,
      y: 0,
      z: 0,
    },
    size: 8,
    metalness: 1.2,
    roughness: 0.8,
  },
  EARTH: {
    key: SPACE_OBJECT_KEY.EARTH,
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    size: 30,
    metalness: 1.2,
    roughness: 0.8,
  },
  MARS: {
    key: SPACE_OBJECT_KEY.MARS,
    position: {
      x: 1000,
      y: 0,
      z: 0,
    },
    size: 26,
    metalness: 1.2,
    roughness: 0.8,
  },
  JUPITER: {
    key: SPACE_OBJECT_KEY.JUPITER,
    position: {
      x: 2000,
      y: 0,
      z: 0,
    },
    size: 328,
    metalness: 1.2,
    roughness: 0.9,
  },
  SATURN: {
    key: SPACE_OBJECT_KEY.SATURN,
    position: {
      x: 3500,
      y: 0,
      z: 0,
    },
    size: 273,
    metalness: 1.2,
    roughness: 0.9,
  },
  URANUS: {
    key: SPACE_OBJECT_KEY.URANUS,
    position: {
      x: 5000,
      y: 0,
      z: 0,
    },
    size: 119,
    metalness: 1.2,
    roughness: 0.8,
  },
  NEPTUNE: {
    key: SPACE_OBJECT_KEY.NEPTUNE,
    position: {
      x: 6000,
      y: 0,
      z: 0,
    },
    size: 115,
    metalness: 1.2,
    roughness: 0.8,
  },
};

export const SUN = {
  position: {
    x: 320,
    y: 0,
    z: 0,
  },
  size: 40,
};
