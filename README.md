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
material = new ShaderToyMaterial("shaderToyCodeSample");
mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
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

```
TODO
-----
- Support for other uniforms
- External textures  (Channels)
- Multpass (Buffers) 

