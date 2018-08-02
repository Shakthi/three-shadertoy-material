precision highp float;
uniform vec2 iResolution;
varying vec2 vUv;
void  mainImage( out vec4,  vec2 fragCoord );
void main () {
    vec4 outfrag;
    mainImage(outfrag,iResolution*vUv);
    gl_FragColor = outfrag;
}