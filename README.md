# three-shadertoy-material
A threejs material that helps to make use of ShaderToy shader code on meshes


Usage 
------
```shell
npm install three-shadertoy-material
```
```javascript

    geometry = new THREE.PlaneBufferGeometry(1500, 750);
    material = new ShaderToyMaterial("shaderToyCodeSample");
    mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
```
