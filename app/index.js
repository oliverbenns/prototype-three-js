import THREE from 'three';

// Should probably extend something else here.
// Maybe Weird to have geometry and mesh together.
class Mountain extends THREE.CylinderGeometry {
	constructor() {
		super(0, 30, 80, 4, 1, true); // Need to know what these params are + what pass into instance (position only / different sizing?)
	}

	createMesh() {
		var material = new THREE.MeshBasicMaterial({
			color: 0x00ff00,
			wireframe: true
		});

		return new THREE.Mesh(this, material);
	}
}

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.z = 1000;

// MOUNTAIN
const mountain = new Mountain();
const mountainMesh = mountain.createMesh();

scene.add(mountainMesh);

// RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

function render() {
	requestAnimationFrame(render);


	mountainMesh.rotation.x += 0.02;
	mountainMesh.rotation.y += 0.02;

	renderer.render(scene, camera);
};

render();
