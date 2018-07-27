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

TODO
-----
- Support for more uniforms. (Only uniforms iTime and iResolution supported for now)
- External textures  (Channels)
- Multpass (Buffer) 

