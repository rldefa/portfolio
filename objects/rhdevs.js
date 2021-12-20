import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

const texture0 = textureLoader.load("../assets/devsLogo/main.jpg");
const texture1 = textureLoader.load("../assets/devsLogo/fe.jpg");
const texture2 = textureLoader.load("../assets/devsLogo/dev.jpg");

const materials = [
  new THREE.MeshBasicMaterial({ map: texture0 }),
  new THREE.MeshBasicMaterial({ map: texture0 }),
  new THREE.MeshBasicMaterial({ map: texture1 }),
  new THREE.MeshBasicMaterial({ map: texture1 }),
  new THREE.MeshBasicMaterial({ map: texture2 }),
  new THREE.MeshBasicMaterial({ map: texture2 }),
];
const faceMaterial = new THREE.MeshFaceMaterial(materials);

export const rhdevs = new THREE.Mesh(
  new THREE.BoxGeometry(5, 5, 5),
  faceMaterial
);
