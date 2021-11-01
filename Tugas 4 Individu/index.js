import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/GLTFLoader.js";

/** @type {THREE.PerspectiveCamera} */
let camera;
/** @type {THREE.Scene} */
let scene;
/** @type {THREE.WebGLRenderer} */
let renderer;

let count = 0,
  cubeCamera1,
  cubeCamera2,
  cubeRenderTarget1,
  cubeRenderTarget2;

(function init() {
  // set up three.js scene
  scene = new THREE.Scene();
  const color = 0xffffff; // white
  const near = 1;
  const far = 50;
  scene.fog = new THREE.Fog(color, near, far);

  //lights
  const ambientLight = new THREE.AmbientLight("white", 0.6);
  scene.add(ambientLight);

  // const axesHelper = new THREE.AxesHelper( 15 );
  // scene.add( axesHelper );
  
  const directionalLight = new THREE.DirectionalLight("white", 0.8);
  directionalLight.position.set(-10, 40, -100);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  // let lightHelper = new THREE.DirectionalLightHelper(directionalLight, 2, 0x000000);
  // scene.add(lightHelper);
  

  // Camera
  camera = new THREE.PerspectiveCamera(75, 2, 0.1, 100);
  camera.position.x = 5;
  camera.position.y = 5;
  camera.position.z = 15;

  //#region  //*=========== Skybox ===========
  const loader = new THREE.TextureLoader();
  const texture = loader.load("./img/img1.jpg", () => {
    const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
    rt.fromEquirectangularTexture(renderer, texture);
    scene.background = rt.texture;
  });
  //#region  //*=========== Skybox ===========

  //#region  //*=========== Plane ===========
  const floorMaterial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
    map: new THREE.TextureLoader().load("./img/pattern.png"),
  });
  const wallMaterial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
    map: new THREE.TextureLoader().load("./img/vertical.jpg"),
  });

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 15, 100, 100),
    floorMaterial
  );
  // floor.castShadow = true;
  floor.receiveShadow = true;
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -3;
  scene.add(floor);

  const wall = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 7.5, 100, 100),
    wallMaterial
  );
  wall.receiveShadow = true;
  wall.rotation.y = -Math.PI / 2;
  wall.position.x = -7.5;
  wall.position.y = 0.75;
  scene.add(wall);
  //#endregion  //*======== Plane ===========

  //#region  //*=========== Torus ===========
  const Texture = new THREE.TextureLoader().load("img/vertical.jpg");
  const Geometry = new THREE.TorusGeometry( .5, .25, 8, 100 );
  const Material = new THREE.MeshPhongMaterial({
    color: 0xFFD700,
    map: Texture,
  });
  const torus = new THREE.Mesh(Geometry, Material);
  torus.castShadow = true;
  torus.receiveShadow = true;
  torus.position.set(0, 1, 0);
  scene.add(torus);
  //#endregion  //*======== Torus ===========

  //#region  //*=========== School Desk ===========
  const schoolDesk = new GLTFLoader();
  schoolDesk.load("assets/models/schoolDesk/SchoolDesk_01_1k.gltf", (gltf) => {
    gltf.scene.traverse(function (node) {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        node.position.set(-3, -3, -2);
        node.scale.set(3, 2, 3);
      }
    });
    scene.add(gltf.scene);
  });
  //#endregion  //*======== School Desk ===========

  //#region  //*=========== Rubix Cube ===========
  const rubixCube = new GLTFLoader();
  rubixCube.load(
    "assets/models/rubix_cube/scene.gltf",
    (gltf) => {
      gltf.scene.traverse(function (node) {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
          node.position.set(-2, -2.5, 3);
          node.scale.set(1, 1, 1);
        }
      });
      scene.add(gltf.scene);
    }
  );
  //#endregion  //*======== Rubix Cube ===========


  //#region  //*=========== Reflective ===========
  cubeRenderTarget1 = new THREE.WebGLCubeRenderTarget(256, {
    format: THREE.RGBFormat,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
    encoding: THREE.sRGBEncoding,
  });

  cubeCamera1 = new THREE.CubeCamera(1, 1000, cubeRenderTarget1);

  cubeRenderTarget2 = new THREE.WebGLCubeRenderTarget(256, {
    format: THREE.RGBFormat,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
    encoding: THREE.sRGBEncoding,
  });

  cubeCamera2 = new THREE.CubeCamera(1, 1000, cubeRenderTarget2);

  const refGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const refMaterial = new THREE.MeshBasicMaterial({
    envMap: cubeRenderTarget2.texture,
    combine: THREE.MultiplyOperation,
    reflectivity: 1,
  });
  const reflective = new THREE.Mesh(refGeometry, refMaterial);

  reflective.castShadow = true;
  reflective.receiveShadow = true;

  reflective.position.set(0, -0.35, 0);
  scene.add(reflective);
  //#endregion  //*======== Reflective ===========

  // Render
  renderer = new THREE.WebGLRenderer({ antialias: true });

  //#region  //*=========== OrbitControls ===========
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;
  //#endregion  //*======== OrbitControls ===========

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);

  function animation() {
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    torus.rotation.z += 0.01;

    if (count % 2 === 0) {
      cubeCamera1.update(renderer, scene);
    } else {
      cubeCamera2.update(renderer, scene);
    }

    count++;
    // lightHelper.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animation);
  }
  animation();
})();