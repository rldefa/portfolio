import {
  TextureLoader,
  SphereGeometry,
  Mesh,
  MeshStandardMaterial,
} from "three";

import moonpic from "../assets/moon.jpeg";
import normalmap from "../assets/normal.jpeg";

const moonTexture = new TextureLoader().load(moonpic);
const normalTexture = new TextureLoader().load(normalmap);

export const moon = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);
