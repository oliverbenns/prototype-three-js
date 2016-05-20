import THREE from 'three';
import Mountain from './mountain';
import Cloud from './cloud';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.z = 1000;

// MOUNTAIN
const mountain = new Mountain();
const mountainMesh = mountain.createMesh();

// CLOUD
const cloud = new Cloud();
const cloudMesh = cloud.createMesh();

scene.add(mountainMesh);
scene.add(cloudMesh);

// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

function render() {
	requestAnimationFrame(render);

	mountainMesh.rotation.x += 0.02;
	mountainMesh.rotation.y += 0.02;
	cloudMesh.rotation.x -= 0.02;
	cloudMesh.rotation.y -= 0.02;

	renderer.render(scene, camera);
};

render();
