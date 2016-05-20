import THREE from 'three';

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.z = 1000;

// CUBE
var geometry = new THREE.BoxGeometry(200, 200, 200);
var material = new THREE.MeshBasicMaterial({
	color: 0x00ff00,
	wireframe: true
});

var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// RENDERER
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

function render() {
	requestAnimationFrame(render);

	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;

	renderer.render(scene, camera);
};

render();
