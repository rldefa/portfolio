import * as THREE from "three";

const moonTexture = new THREE.TextureLoader().load("./assets/moon.jpeg");
const normalTexture = new THREE.TextureLoader().load("./assets/normal.jpeg");

export const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);
