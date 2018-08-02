(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("three"));
	else if(typeof define === 'function' && define.amd)
		define(["three"], factory);
	else if(typeof exports === 'object')
		exports["ShaderToyMaterial"] = factory(require("three"));
	else
		root["ShaderToyMaterial"] = factory(root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_three__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ShaderToyMaterial.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/comment-regex/index.js":
/*!*********************************************!*\
  !*** ./node_modules/comment-regex/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var comment = module.exports = function () {
	return new RegExp('(?:' + comment.line().source + ')|(?:' + comment.block().source + ')', 'gm');
};

comment.line = function () {
	return /(?:^|\s)\/\/(.+?)$/gm;
};

comment.block = function () {
	return /\/\*([\S\s]*?)\*\//gm;
};


/***/ }),

/***/ "./src/ShaderToyMaterial.js":
/*!**********************************!*\
  !*** ./src/ShaderToyMaterial.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShaderToyMaterial; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shaders_shader_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/shader.vert */ "./src/shaders/shader.vert");
/* harmony import */ var _shaders_shader_vert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shaders_shader_vert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shaders_shader_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/shader.frag */ "./src/shaders/shader.frag");
/* harmony import */ var _shaders_shader_frag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shaders_shader_frag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var comment_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! comment-regex */ "./node_modules/comment-regex/index.js");
/* harmony import */ var comment_regex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(comment_regex__WEBPACK_IMPORTED_MODULE_3__);








class ShaderToyMaterial extends three__WEBPACK_IMPORTED_MODULE_0__["RawShaderMaterial"] {

    constructor(shaderToySample, options_) {

        var options = options_ || {};
        options.aspectRatio = options.aspectRatio || 1500 / 750;
        let width = 1500;
        let hieght = width / options.aspectRatio;
        options.width = width;
        options.hieght = hieght;


        let usedUniforms = ShaderToyMaterial.retriveUsedUniforms(shaderToySample);

        var clock = new three__WEBPACK_IMPORTED_MODULE_0__["Clock"]();
        super({
            vertexShader: _shaders_shader_vert__WEBPACK_IMPORTED_MODULE_1___default.a,
            fragmentShader: "",
        });
        if (usedUniforms.iTime || usedUniforms.iTimeDelta || usedUniforms.iFrame || usedUniforms.iDate) {
            if (usedUniforms.iTime || usedUniforms.iTimeDelta)
                this.clock = clock;
            this.registerUpdate();
        }






        let data = this.createUniformsObject(usedUniforms, options);

        this.uniforms = data.prof;
        var finalfrag = _shaders_shader_frag__WEBPACK_IMPORTED_MODULE_2___default.a + "\n" + data.code + "\n" + shaderToySample;

        this.fragmentShader = finalfrag;


    }

    registerUpdate() {
        setTimeout(() => this.update(), 0);

    }

    update() {
        if (this.uniforms.iTime) {
            this.uniforms.iTime.value = this.clock.getElapsedTime();
        }
        if (this.uniforms.iTimeDelta) {
            this.uniforms.iTimeDelta.value = this.clock.getDelta();
        }
        if (this.uniforms.iFrame) {
            this.uniforms.iFrame.value = this.uniforms.iFrame.value + 1;
        }


        if (this.uniforms.iDate) {
            let dt = new Date;
            let sec = dt.getSeconds() + (60 * dt.getMinutes()) + (60 * 60 * dt.getHours());
            this.uniforms.iDate.value = new three__WEBPACK_IMPORTED_MODULE_0__["Vector4"](
                dt.getFullYear(), dt.getMonth(), dt.getDay(), sec
            );
        }

        if (this.uniforms.iChannelResolution) {

            let checkchannel = (i) => {

                if (this.uniforms["iChannel" + i] && this.uniforms["iChannel" + i].value.image) {

                    this.uniforms.iChannelResolution.value[i] = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](
                        this.uniforms["iChannel" + i].value.image.width,
                        this.uniforms["iChannel" + i].value.image.height);


                }
            }


            for (let index = 0; index < 4; index++) {
                checkchannel(index);
            }


        }


        requestAnimationFrame(() => { this.update() });
    }


    //Returns uniforms need
    static retriveUsedUniforms(shaderToySample) {
        /*
        uniform vec3 iResolution; //Done: viewport resolution (in pixels)
        uniform float iTime; //Done: shader playback time (in seconds)
        uniform float iTimeDelta; //Done: render time (in seconds)
        uniform int iFrame; //Done: shader playback frame

        uniform float iChannelTime[4]; //Wont Do now: channel playback time (in seconds)
        uniform vec3 iChannelResolution[4]; // channel resolution (in pixels)
        uniform vec4 iMouse; // mouse pixel coords. xy: current (if MLB down), zw: click
        uniform samplerXX iChannel0..3; // input channel. XX = 2D/Cube
        uniform vec4 iDate; //Do (year, month, day, time in seconds)
        uniform float iSampleRate; //Wont Do sound sample rate (i.e., 44100)
        
        */
        let commentLessShader = shaderToySample.replace(comment_regex__WEBPACK_IMPORTED_MODULE_3___default()(), "");
        let expectedUniforms = "iTime,iTimeDelta,iResolution,iFrame,iChannelTime[4],iChannelResolution,iChannel0,iChannel1,iChannel2,iChannel3,iDate,iMouse".split(",");
        let existingUniforms = {};
        expectedUniforms.forEach(uniform => {
            if (commentLessShader.includes(uniform))
                existingUniforms[uniform] = true;
        });

        return existingUniforms;
    }


    createUniformsObject(usedUnforms, options) {
        let uniforms = {};
        let uniformsCode = ""

        if (usedUnforms.iResolution) {
            uniforms.iResolution = { value: new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](options.width, options.hieght) }
        }

        if (usedUnforms.iTime) {
            uniforms.iTime = { type: "1f", value: this.clock.getElapsedTime() };
            uniformsCode += "uniform float iTime;\n";
        }
        if (usedUnforms.iDate) {
            uniforms.iDate = { value: new three__WEBPACK_IMPORTED_MODULE_0__["Vector4"]() };
            uniformsCode += "uniform vec4 iDate;\n";
        }

        //uniform vec4 iDate;


        if (usedUnforms.iTimeDelta) {
            uniforms.iTimeDelta = { type: "1f", value: this.clock.getDelta() }
            uniformsCode += "uniform float iTimeDelta;\n";
        }


        if (usedUnforms.iFrame) {
            uniforms.iFrame = { type: "1i", value: 0 }
            uniformsCode += "uniform int iFrame;\n";
        }

        if (usedUnforms.iMouse) {
            uniforms.iMouse = {
                value: new three__WEBPACK_IMPORTED_MODULE_0__["Vector4"](
                    options.width / 2,
                    options.hieght / 2,
                    options.width / 2,
                    options.hieght / 2,
                )
            };
            uniformsCode += "uniform vec4 iMouse;\n";
        }



        let this_ = this;

        if (usedUnforms["iChannelResolution"]) {

            uniforms["iChannelResolution"] = {
                type: "v3v", value: [
                    new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
                    new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
                    new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
                    new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](),
                ]
            };

            uniformsCode += "uniform vec3 iChannelResolution[4];\n";
        }

        function checkchannel(i) {

            if (usedUnforms["iChannel" + i]) {

                let texture = options.map ? options.map : this_.getDefaultTexture();
                texture = (Array.isArray(texture)) ? texture[i] : texture;
                uniforms["iChannel" + i] = { type: "t", value: texture }
                uniformsCode += "uniform sampler2D " + ["iChannel" + i] + ";\n";

            }
        }


        for (let index = 0; index < 4; index++) {
            checkchannel(index);
        }





        return { prof: uniforms, code: uniformsCode };
    }

    getDefaultTexture() {
        if (!ShaderToyMaterial.defaultTexture)
            ShaderToyMaterial.defaultTexture = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]().load("https://threejs.org/examples/textures/UV_Grid_Sm.jpg", () => {
                this.update();
            });

        return ShaderToyMaterial.defaultTexture;

    }


}

/***/ }),

/***/ "./src/shaders/shader.frag":
/*!*********************************!*\
  !*** ./src/shaders/shader.frag ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n#define GLSLIFY 1\nuniform vec2 iResolution;\nuniform float iTime;\nvarying vec2 vUv;\nvoid  mainImage( out vec4,  vec2 fragCoord );\nvoid main () {\n    vec4 outfrag;\n    mainImage(outfrag,iResolution*vUv);\n    gl_FragColor = outfrag;\n}"

/***/ }),

/***/ "./src/shaders/shader.vert":
/*!*********************************!*\
  !*** ./src/shaders/shader.vert ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nvarying vec2 vUv;\nvoid main () {\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    vUv=uv;\n}"

/***/ }),

/***/ "three":
/*!**********************************************************************************!*\
  !*** external {"commonjs":"three","commonjs2":"three","amd":"three","root":"_"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_three__;

/***/ })

/******/ })["default"];
});