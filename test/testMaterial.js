
var THREE = require("three");
var ShaderToyMaterial  = require("../src/ShaderToyMaterial").default;
// var sampleShader  = require("./sample.txt");

var camera, scene, renderer;
var geometry, material, mesh;
 var texture;
init();
animate();
 
function init() {
 
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;
 
    scene = new THREE.Scene();
 
    geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
    texture = new THREE.TextureLoader().load( 'test/52d2a8f514c4fd2d9866587f4d7b2a5bfa1a11a0e772077d7682deb8b3b517e5.jpg' );
    material = new ShaderToyMaterial(
        `void mainImage( out vec4 fragColor, in vec2 fragCoord )
        {
            vec2 uv = fragCoord.xy / iResolution.xy;
        //	uv.y = -uv.y;
            
            uv.y += (cos((uv.y + (iTime * 0.04)) * 45.0) * 0.0019) +
                (cos((uv.y + (iTime * 0.1)) * 10.0) * 0.002);
        
            uv.x += (sin((uv.y + (iTime * 0.07)) * 15.0) * 0.0029) +
                (sin((uv.y + (iTime * 0.1)) * 15.0) * 0.002);
                
        
            vec4 texColor = texture(iChannel0,uv);
            fragColor = texColor;
        }`,{map:texture}
    ); 
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
 
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
 
}
 
function animate() {
 
    requestAnimationFrame( animate );
` 
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.02;
` 
    renderer.render( scene, camera );
 
}

