import { TextureLoader, Mesh, MeshBasicMaterial, PlaneGeometry } from "three";
import portrait from "../assets/portrait.jpeg";

const textureLoader = new TextureLoader();

const myPhoto = textureLoader.load(portrait);

const geometry = new PlaneGeometry(5, 5);
const material = new MeshBasicMaterial({ map: myPhoto });
export const selfPhoto = new Mesh(geometry, material);
