import { TextureLoader, Mesh, MeshBasicMaterial, PlaneGeometry } from "three";
import nusLogo from "../assets/nus.png";

const textureLoader = new TextureLoader();

const nusTexture = textureLoader.load(nusLogo);

const geometry = new PlaneGeometry(1, 1.3);
const material = new MeshBasicMaterial({ map: nusTexture });
export const nus = new Mesh(geometry, material);
