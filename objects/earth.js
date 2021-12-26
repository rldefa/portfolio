import {
  TextureLoader,
  SphereGeometry,
  Mesh,
  MeshStandardMaterial,
} from "three";

import earthpic from "../assets/earth.jpeg";
import normalmap from "../assets/earth-normal.jpeg";

const earthTexture = new TextureLoader().load(earthpic);
const normalTexture = new TextureLoader().load(normalmap);

export const earth = new Mesh(
  new SphereGeometry(2, 32, 32),
  new MeshStandardMaterial({
    map: earthTexture,
    normalMap: normalTexture,
  })
);
