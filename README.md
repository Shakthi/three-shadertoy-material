# three-shadertoy-material
A threejs material that helps to make use of ShaderToy shader code on meshes


Usage 
------
```shell
npm install three-shadertoy-material
```
```javascript
var ShaderToyMaterial = require('three-shadertoy-material') // import ShaderToyMaterial from 'three-shadertoy-material' 

geometry = new THREE.PlaneBufferGeometry(1500, 750);

var shadercode = `void mainImage( out vec4 O,  vec2 U ){
    U = 2.* sin (25.*U/iResolution.x);  
    O = .5 + .5* sin( U.x+U.y + vec4(0,2.4,-2.4,0) +iTime);
}`;

material = new ShaderToyMaterial(shadercode);
mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
```

Local testing
-------
```shell
npm run start:dev 
``` 


Sample implementation at https://shakthi.github.io/threejs-shadertoy/dist/

Supported uniforms
---------
```glsl
uniform vec3 iResolution; //viewport resolution (in pixels)
uniform float iTime; //shader playback time (in seconds)
uniform float iTimeDelta; //render time (in seconds)
uniform int iFrame; //shader playback frame
uniform vec4 iMouse; // mouse pixel coords. Faked: Hardcoded center point of the iResolution
uniform vec4 iDate; //(year, month, day, time in seconds)
uniform vec3 iChannelResolution[4]; // channel resolution (in pixels) - Not fully optimised
uniform sampler2D iChannel0..3; // input channel texture2d only

```




How to pass texture inputs to above shader material
----
```javascript
new ShaderToyMaterial(`shader code`,{map:texture});
```
This texture is available via iChannel0, multiple texture can be passed as an array (which are avaible via iChannel0..3)

TODO
-----

- Support for video/cube textures
- Multpass (Buffers) 

Credits
-----
- All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.   
- Sample shader used here is taken from  https://www.shadertoy.com/view/XssBzH



