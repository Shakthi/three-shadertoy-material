
var THREE = require("three");
var ShaderToyMaterial  = require("../src/ShaderToyMaterial").default;
var sampleShader  = require("./sample.txt");

var camera, scene, renderer;
var geometry, material, mesh;
 
init();
animate();
 
function init() {
 
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;
 
    scene = new THREE.Scene();
 
    geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
    material = new ShaderToyMaterial(
        `void mainImage( out vec4 O,  vec2 U ){
            U = 2.* sin (25.*U/iResolution.x);  
            O = .5 + .5* sin( U.x+U.y + vec4(0,2.4,-2.4,0) +iTime);
        }`
    ); 
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
 
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
 
}
 
function animate() {
 
    requestAnimationFrame( animate );
 
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
 
    renderer.render( scene, camera );
 
}

