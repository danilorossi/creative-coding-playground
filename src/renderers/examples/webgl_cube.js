// global.THREE = require('three');

import {
  WebGLRenderer,
  PerspectiveCamera,
  Vector3,
  Scene,
  BoxGeometry,
  Mesh,
  MeshNormalMaterial
} from 'three';

// global.THREE = require('three');

const webGLcube = (payload, canvas) => {

  // Create a renderer
  const renderer = new WebGLRenderer(
    { canvas }
  );


  // WebGL background color
  renderer.setClearColor('hsl(0, 0%, 95%)', 1);

  // Setup a camera, we will update its settings on resize
  const camera = new PerspectiveCamera(45, 1, 0.01, 1000);
  camera.position.set(2, 2, 2);
  camera.lookAt(new Vector3());

  // Setup your scene
  const scene = new Scene();

  // Re-use the same Geometry across all our cubes
  const geometry = new BoxGeometry(1, 1, 1);

  // Basic "unlit" material with no depth
  const material = new MeshNormalMaterial();

  // Create the mesh
  const mesh = new Mesh(geometry, material);

  // Smaller cube
  mesh.scale.setScalar(0.5);

  // Then add the group to the scene
  scene.add(mesh);

  return ({ context, width, height, time, pixelRatio, viewportWidth, viewportHeight }) => {

    renderer.setPixelRatio(pixelRatio);
      // renderer.setSize(viewportWidth, viewportHeight);
    mesh.rotation.y = time * 0.25;
    renderer.render(scene, camera);
  };

}




export const webGLcubeSketchMeta = {
  title: 'WebGL Cube',
  fileName: 'examples/webgl_cube.js',
  settings: {
    animate: true,
    dimensions: [ 1024, 1280 ],
    // Get a WebGL canvas rather than 2D
    context: 'webgl',
    // Turn on MSAA
    attributes: { antialias: true }
  },
  renderer: webGLcube,
};
