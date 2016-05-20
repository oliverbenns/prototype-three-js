import THREE from 'three';

// Should probably extend something else here.
// Maybe Weird to have geometry and mesh together.
// Look at other three js projects to see how they structure.
export default class Cloud extends THREE.BoxGeometry {
	constructor() {
		super(200, 200, 200);
	}

	createMesh() {
		var material = new THREE.MeshBasicMaterial({
			color: 0xff0000,
			wireframe: true
		});

		return new THREE.Mesh(this, material);
	}
}
