import THREE from 'three';

// Should probably extend something else here.
// Maybe Weird to have geometry and mesh together.
// Look at other three js projects to see how they structure.
export default class Mountain extends THREE.CylinderGeometry {
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
