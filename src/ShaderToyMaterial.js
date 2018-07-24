import * as THREE from 'three';

import vert from './shaders/shader.vert';
import frag from './shaders/shader.frag';


export default class ShaderToyMaterial extends THREE.RawShaderMaterial {

    constructor(shaderToySample, options_) {
        var options = options_ || {};
        options.aspectRatio = options.aspectRatio || 1500 / 750;
        let width = 1500;
        let hieght = width / options.aspectRatio;
        var finalfrag = frag + "\n" + shaderToySample;
        var clock = new THREE.Clock();
        super({
            vertexShader: vert,
            fragmentShader: finalfrag,
            uniforms: {
                iTime: { type: "1f", value: clock.getElapsedTime() },
                iResolution: { value: new THREE.Vector2(width, hieght) }

            }
        });

        this.clock = clock;
        this.registerUpdate();

    }

    registerUpdate() {
        this.update();
    }

    update() {
        this.uniforms.iTime.value = this.clock.getElapsedTime();
        requestAnimationFrame(() => { this.update() });
    }



}