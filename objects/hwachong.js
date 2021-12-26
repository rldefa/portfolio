import { TextureLoader, Mesh, MeshBasicMaterial, PlaneGeometry } from "three";
import hwachongLogo from "../assets/hwachong.png";

const textureLoader = new TextureLoader();

const hwachongTexture = textureLoader.load(hwachongLogo);

const geometry = new PlaneGeometry(1, 1);
const material = new MeshBasicMaterial({ map: hwachongTexture });
export const hwachong = new Mesh(geometry, material);
