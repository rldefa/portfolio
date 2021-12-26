import "./style.css";
import "./navbar.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// 3D Models
import { moon } from "./objects/moon.js";
import { earth } from "./objects/earth.js";
import { rhdevs } from "./objects/rhdevs.js";
import { selfPhoto } from "./objects/portrait.js";
import { nus } from "./objects/nus.js";
import { hwachong } from "./objects/hwachong";

import spacebg from "./assets/milky-way.jpeg";

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

// Lights

// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(0, 1, 15);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(400).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load(spacebg);
scene.background = spaceTexture;

// Avatar

scene.add(rhdevs);

rhdevs.position.x = -8;
rhdevs.position.y = 2;
rhdevs.position.z = 40;

// Earth and Moon

scene.add(earth);
scene.add(moon);

earth.position.x = -10;
earth.position.y = -8;
earth.position.z = 70;

// Portrait

scene.add(selfPhoto);

selfPhoto.position.x = 5;
selfPhoto.position.z = 80;

scene.add(nus);

nus.position.x = 4;
nus.position.y = -2;
nus.position.z = 15;

scene.add(hwachong);

hwachong.position.x = -4;
hwachong.position.y = 3;
hwachong.position.z = 4;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  const tiltDistance = 840;

  if (t + tiltDistance > 0) {
    camera.rotation.x = (tiltDistance + t) * 0.001;
  } else {
    camera.rotation.x = 0;
  }

  camera.position.z = 90 + (t + tiltDistance) * 0.01;

  earthAnimation(t);
}

function earthAnimation(t) {
  moon.position.x = earth.position.x + 7 * Math.sin(t / 300);
  moon.position.y = earth.position.y - 1 * Math.sin(t / 300);
  moon.position.z = earth.position.z - 7 * Math.cos(t / 300);
}

function handleScroll() {
  moveCamera();
}

document.body.onscroll = handleScroll;
handleScroll();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  moon.rotation.y += 0.01;

  earth.rotation.y += 0.01;

  rhdevs.rotation.x += rhdevs.rotation.x > 0.3 ? -0.002 : 0.002;
  rhdevs.rotation.y += 0.005;
  rhdevs.rotation.z += rhdevs.rotation.z > 0.5 ? -0.002 : 0.002;

  // controls.update();

  renderer.render(scene, camera);
}

animate();
