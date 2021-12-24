import { TextureLoader, Mesh, MeshBasicMaterial, BoxGeometry } from "three";

import img1 from "../assets/devsLogo/main.jpg";
// import img2 from "../assets/devsLogo/fe.jpg";
import img3 from "../assets/devsLogo/dev.jpg";

const textureLoader = new TextureLoader();

const texture0 = textureLoader.load(img1);
// const texture1 = textureLoader.load(img2);
const texture2 = textureLoader.load(img3);

const materials = [
  new MeshBasicMaterial({ map: texture0 }),
  new MeshBasicMaterial({ map: texture0 }),
  new MeshBasicMaterial({ map: texture2 }),
  new MeshBasicMaterial({ map: texture2 }),
  new MeshBasicMaterial({ map: texture0 }),
  new MeshBasicMaterial({ map: texture0 }),
];

export const rhdevs = new Mesh(new BoxGeometry(5, 5, 5), materials);
