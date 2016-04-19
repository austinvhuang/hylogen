
var vsSource = [ "attribute vec3 aPosition;"
                 , "varying vec2 uvN;"
                 , "void main() {"
                 , "  gl_Position = vec4(aPosition, 1.0);"
                 , "  uvN = aPosition.xy;"
                 , "}"
               ].join("\n");

var fsHeader= [ "precision mediump float;"
                , "const float pi = 3.141592653589793238462643383;"
                , "uniform float time;"
                , "uniform vec2 mouse;"
                , "uniform vec2 resolution;"
                , "uniform vec4 audio;"
                , "uniform sampler2D backBuffer;"
                , "varying vec2 uvN;"
                , "vec2 uv() {"
                , "  return 0.5 * uvN  + 0.5;"
                , "}"
              ].join("\n");


var initialFsSource = "void main() { \n gl_FragColor = max(min(((1.0e-2 * vec4(((tan(((sqrt((pow((uvN + (-vec2(0.1, 0.0))).x, 2.0) + pow((uvN + (-vec2(0.1, 0.0))).y, 2.0))) * audio.z) * (1.0 * pow((100000.0 / 1.0), ((audio.x + (-0.0)) / (1.0 + (-0.0))))))) * audio.y) * pow(cos(((audio.x * 10.0) * sin(((time * 1.0e-2) + (uvN.x * 100.0))))), 10.0)), ((tan(((sqrt((pow((uvN + (-vec2(0.1, 0.0))).x, 2.0) + pow((uvN + (-vec2(0.1, 0.0))).y, 2.0))) * audio.z) * (1.0 * pow((100000.0 / 1.0), ((audio.x + (-0.0)) / (1.0 + (-0.0))))))) * audio.y) * pow(cos(((audio.x * 10.0) * sin(((time * 1.0e-2) + (uvN.x * 100.0))))), 1.0)), ((tan(((sqrt((pow((uvN + (-vec2(0.1, 0.0))).x, 2.0) + pow((uvN + (-vec2(0.1, 0.0))).y, 2.0))) * audio.z) * (1.0 * pow((100000.0 / 1.0), ((audio.x + (-0.0)) / (1.0 + (-0.0))))))) * audio.y) * pow(cos(((audio.x * 10.0) * sin(((time * 1.0e-2) + (uvN.x * 100.0))))), 0.1)), 1.0)) + (0.99 * texture2D(backBuffer, ((vec2(0.5, 0.5) * (vec2(((cos((((-1.0e-2) * audio.w) * (0.5 * pow((1.0 / 0.5), ((sin(time) + (-(-1.0))) / (1.0 + (-(-1.0)))))))) * ((1.25 * pow((0.81 / 1.25), ((audio.x + (-0.0)) / (1.0 + (-0.0))))) * vec2(abs(vec2(((cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (sin(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y)), ((((-1.0) * sin(((-0.2) * audio.w))) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y))).x), vec2(((cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (sin(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y)), ((((-1.0) * sin(((-0.2) * audio.w))) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y))).y)).x) + (sin((((-1.0e-2) * audio.w) * (0.5 * pow((1.0 / 0.5), ((sin(time) + (-(-1.0))) / (1.0 + (-(-1.0)))))))) * ((1.25 * pow((0.81 / 1.25), ((audio.x + (-0.0)) / (1.0 + (-0.0))))) * vec2(abs(vec2(((cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (sin(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y)), ((((-1.0) * sin(((-0.2) * audio.w))) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y))).x), vec2(((cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (sin(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y)), ((((-1.0) * sin(((-0.2) * audio.w))) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y))).y)).y)), ((((-1.0) * sin((((-1.0e-2) * audio.w) * (0.5 * pow((1.0 / 0.5), ((sin(time) + (-(-1.0))) / (1.0 + (-(-1.0))))))))) * ((1.25 * pow((0.81 / 1.25), ((audio.x + (-0.0)) / (1.0 + (-0.0))))) * vec2(abs(vec2(((cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (sin(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y)), ((((-1.0) * sin(((-0.2) * audio.w))) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y))).x), vec2(((cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (sin(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y)), ((((-1.0) * sin(((-0.2) * audio.w))) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y))).y)).x) + (cos((((-1.0e-2) * audio.w) * (0.5 * pow((1.0 / 0.5), ((sin(time) + (-(-1.0))) / (1.0 + (-(-1.0)))))))) * ((1.25 * pow((0.81 / 1.25), ((audio.x + (-0.0)) / (1.0 + (-0.0))))) * vec2(abs(vec2(((cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (sin(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y)), ((((-1.0) * sin(((-0.2) * audio.w))) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y))).x), vec2(((cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (sin(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y)), ((((-1.0) * sin(((-0.2) * audio.w))) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).x) + (cos(((-0.2) * audio.w)) * ((uvN + vec2((-(1.0e-7 * pow((1.0e-3 / 1.0e-7), ((audio.y + (-0.0)) / (1.0 + (-0.0)))))), 0.0)) + vec2(0.0, 0.25)).y))).y)).y))) + vec2(0.0, (-0.25)))) + vec2(0.5, 0.5))))), vec4(1.0, 1.0, 1.0, 1.0)), vec4(0.0, 0.0, 0.0, 0.0)); \n } ";


function loadProgram (gl, state, vsSource, fsSource) {

  // compileShader :: (gl, source, shaderType) -> Shader
  // throws Error on compilation error

  function compileShader (gl, source, shaderType) {
    //assert(shaderType === gl.FRAGMENT_SHADER || shaderType === g.VERTEXT_SHADER);

    var shader = gl.createShader(shaderType);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);


    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!success) {
      console.log(source);
      throw "could not compile shader:" + gl.getShaderInfoLog(shader);
    }

    return shader;
  };



  var vs = compileShader(gl, vsSource, gl.VERTEX_SHADER);
  var fs = compileShader(gl, fsSource, gl.FRAGMENT_SHADER);


  var program = gl.createProgram();

  gl.attachShader(program, vs);
  gl.attachShader(program, fs);

  gl.linkProgram(program);

  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!success) {
    throw ("program failed to link:" + gl.getProgramInfoLog(program));
  }

  gl.useProgram(program);


  // Create a square as a strip of two triangles.
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([ -1,1,0, 1,1,0, -1,-1,0, 1,-1,0 ]), gl.STATIC_DRAW);


  // Assign attribute aPosition to each of the square's vertices.
  gl.aPosition = gl.getAttribLocation(program, "aPosition");
  gl.enableVertexAttribArray(gl.aPosition);
  gl.vertexAttribPointer(gl.aPosition, 3, gl.FLOAT, false, 0, 0);

  // backBuffer stuff
  function createTarget() {
    var target = {
      texture: gl.createTexture(),
      framebuffer: gl.createFramebuffer()
    };
    // set up framebuffer
    gl.bindTexture( gl.TEXTURE_2D, target.texture);
    gl.texImage2D( gl.TEXTURE_2D, 0,  gl.RGBA, WIDTH, HEIGHT, 0,  gl.RGBA,  gl.UNSIGNED_BYTE, null);

    gl.texParameteri( gl.TEXTURE_2D,  gl.TEXTURE_WRAP_S,  gl.CLAMP_TO_EDGE);
    gl.texParameteri( gl.TEXTURE_2D,  gl.TEXTURE_WRAP_T,  gl.CLAMP_TO_EDGE);

    gl.texParameteri( gl.TEXTURE_2D,  gl.TEXTURE_MAG_FILTER,  gl.NEAREST);
    gl.texParameteri( gl.TEXTURE_2D,  gl.TEXTURE_MIN_FILTER,  gl.NEAREST);

    gl.bindFramebuffer( gl.FRAMEBUFFER, target.framebuffer);
    gl.framebufferTexture2D( gl.FRAMEBUFFER,  gl.COLOR_ATTACHMENT0,  gl.TEXTURE_2D, target.texture, 0);

    // clean up
    gl.bindTexture( gl.TEXTURE_2D, null);
    gl.bindFramebuffer( gl.FRAMEBUFFER, null);

    return target;
  }
  state.fb[0] = createTarget();
  state.fb[1] = createTarget();

  // remember the address within the fragment shader of each of my uniforms variables
  gl.time = gl.getUniformLocation(program, "time");
  gl.mouse = gl.getUniformLocation(program, "mouse");
  gl.audio = gl.getUniformLocation(program, "audio");
  gl.backBuffer = gl.getUniformLocation(program, "backBuffer");

  draw(gl, state);

  if (state.animationFrameRequest === null) {
    state.animationFrameRequest = requestAnimationFrame(function() { animate(gl, state); });
  }
}

function draw (gl, state) {
  gl.uniform1f(gl.time, (new Date().getTime() / 1000 - state.time0));
  gl.uniform2f(gl.mouse, state.mouse.x, state.mouse.y);
  gl.uniform4f(gl.audio, state.audio.low, state.audio.mid, state.audio.upper, state.audio.high);

  gl.uniform1i(gl.backBuffer, 0); // Do I need to check for null?

  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, state.fb[state.bit].texture);
  state.bit = (state.bit + 1) % 2;
  gl.bindFramebuffer( gl.FRAMEBUFFER, state.fb[state.bit].framebuffer);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, state.fb[state.bit].texture);
  gl.bindFramebuffer( gl.FRAMEBUFFER, null);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
};

function animate (gl, state) {
  draw(gl, state);
  state.animationFrameRequest = requestAnimationFrame(function() { animate(gl, state); });
};



function setupState (state, canvas){
  state.animationFrameRequest = null;

  state.bit = 0
  state.fb = [null, null];

  state.time0 = new Date() / 1000;


  function setMouse (event) {
    var r = event.target.getBoundingClientRect();
    state.mouse.x = (event.clientX - r.left) / (r.right - r.left) * 2 -1;
    state.mouse.y = (event.clientY - r.bottom) / (r.top - r.bottom) * 2 - 1;
  };
  /* canvas.onmousedown = (event) => setMouse(event, 1); */
  /* canvas.onmouseup = (event) => setMouse(event, 0); */

  canvas.onmousemove = (setMouse);
  state.mouse = {x: 0, y: 0};


  state.audio = {low: 0.0, mid: 0.0, upper: 0.0, high: 0.0};
  state.audioAgain = null;


  /* function loadMusic() { */
  /* console.log('loading?'); */
  /* var req = new XMLHttpRequest(); */
  /* req.open("GET", "/bobabeach.mp3", true); */
  /* req.responseType ="arraybuffer"; */
  /* req.onload = function(e) { */
  /* console.log(e); */
  /* var audioCtx = new (window.AudioContext || window.webkitAudioContext)(); */
  /* audioCtx.decodeAudioData(req.response, function(buffer) { */
  /* console.log(audioCtx); */
  /* onAccept(audioCtx, buffer); */
  /* }); */
  /* } */
  /* req.send(); */
  /* } */


  function onAccept () {
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    var source = audioCtx.createMediaElementSource(document.getElementById("audio"));
    /* var source = audioCtx.createMediaStreamSource(stream); */
    /* var source = audioCtx.createBufferSource(); */
    /* source.buffer = buffer; */
    var analyser = audioCtx.createAnalyser();
    source.connect(analyser);
    source.connect(audioCtx.destination);

    analyser.fftSize = 512;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);


    function toAudio() {
      state.audioAgain = requestAnimationFrame(toAudio);
      analyser.getByteFrequencyData(dataArray);

      // Taken from The_Force
      var k = 0, f = 0.0;
      var a = 5, b = 11, c = 24, d = bufferLength, i = 0;

      for(; i < a; i++) {
        f += dataArray[i];
      }

      f *= .2; // 1/(a-0)
      f *= .003921569; // 1/255
      state.audio.low = f;

      f = 0.0;
      for(; i < b; i++) {
        f += dataArray[i];
      }

      f *= .166666667; // 1/(b-a)
      f *= .003921569; // 1/255
      state.audio.mid = f;

      f = 0.0;
      for(; i < c; i++) {
        f += dataArray[i];
      }

      f *= .076923077; // 1/(c-b)
      f *= .003921569; // 1/255
      state.audio.upper = f;

      f = 0.0;
      for(; i < d; i++) {
        f += dataArray[i];
      }
      f *= .00204918; // 1/(d-c)
      f *= .003921569; // 1/255
      state.audio.high = f;
    };

    toAudio();
  }
  onAccept();
}




// stateful variables

var canvas = document.getElementById("canvas");
var WIDTH = Math.max(window.innerHeight, window.innerWidth);
var HEIGHT =  Math.max(window.innerHeight, window.innerWidth);
canvas.width = WIDTH;
canvas.height = HEIGHT;

var gl = canvas.getContext("webgl");

var state = {};

setupState(state, canvas);


loadProgram (gl, state,  vsSource, fsHeader + initialFsSource);


function fadeOut(elem) {
  elem.className = "removing";
  window.setTimeout(function() {
    elem.remove();
  }, 5000);
}

var landing = document.getElementById("landing");
var stuff = document.getElementById("stuff");

if (landing) {
  window.setTimeout(function() {
    window.setTimeout(function() {
      fadeOut(landing);
      window.setTimeout(function() {
        stuff.style.opacity = 0.9;
      }, 5000);
    }, 5000);
    var audio = document.getElementById("audio");
    audio.controls = true;
  }, 3000);
}
