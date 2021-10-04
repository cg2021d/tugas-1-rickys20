function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');

    const dasi = {
        line_color_dasi: [0.340, 0.330, 0.330],
        statis_a: [-0.55,0.06],
        statis_b: [-0.46,0.157],
        statis_c: [-0.504,0.642],
        statis_d: [-0.523,0.69],
        statis_e: [-0.456,0.72],
        statis_f: [-0.459,0.77],
        statis_g: [-0.547,0.819],
        statis_h: [-0.62,0.79],
        statis_i: [-0.62,0.76],
        statis_j: [-0.55,0.685],
        statis_k: [-0.58,0.61],
        statis_l: [-0.646,0.14],
        statis_m: [-0.565,0.785],
        statis_n: [-0.53,0.79],
        statis_o: [-0.48,0.76],
        statis_p: [-0.5,0.72],
        statis_q: [-0.546,0.717],
        statis_r: [-0.595,0.773],
        statis_s: [-0.59,0.48],
        statis_t: [-0.49,0.485],
        
        line_green_color2:[0.760, 1.0, 0.380],
    };


    const dasi_2 = {
        line_color: [0.340, 0.330, 0.330],
        line_a:  [0.07, 0.39],
        line_b:  [0.15, 0.34],
        line_c:  [0.16, 0.42],
        line_d:  [0.356,0.417],
        line_e:  [0.58, 0.4059],
        line_f:  [0.663,0.393],
        line_g:  [0.727,0.406],
        line_h:  [0.748,0.407],
        line_i:  [0.832,0.446],
        line_j:  [0.918,0.406],
        line_k:  [0.936,0.377],
        line_l:  [0.906,0.327],
        line_m:  [0.843,0.324],
        line_n:  [0.777,0.359],
        line_o:  [0.733,0.384],
        line_p:  [0.691,0.37],
        line_q:  [0.55,0.357],
        line_r:  [0.392,0.357],
        line_s:  [0.283,0.35],

        line_green_color:[0.760, 1.0, 0.380],
        line_t:  [0.77,0.398],
        line_u:  [0.83,0.425],
        line_v:  [0.841,0.36],
        line_w:  [0.91,0.363],
        line_x:  [0.9,0.391],
    };

    const vertices = [
        //Dasi tampak depan
        ...dasi.statis_a, ...dasi.line_color_dasi,
        ...dasi.statis_b, ...dasi.line_color_dasi,
        ...dasi.statis_l, ...dasi.line_color_dasi,
        ...dasi.statis_c, ...dasi.line_color_dasi,
        ...dasi.statis_t, ...dasi.line_color_dasi,
        ...dasi.statis_s, ...dasi.line_color_dasi,
        ...dasi.statis_c, ...dasi.line_color_dasi,
        ...dasi.statis_s, ...dasi.line_color_dasi,
        ...dasi.statis_k, ...dasi.line_color_dasi,
        ...dasi.statis_b, ...dasi.line_color_dasi,
        ...dasi.statis_l, ...dasi.line_color_dasi,
        ...dasi.statis_k, ...dasi.line_color_dasi,
        ...dasi.statis_l, ...dasi.line_color_dasi,
        ...dasi.statis_b, ...dasi.line_color_dasi,
        ...dasi.statis_c, ...dasi.line_color_dasi,
        ...dasi.statis_c, ...dasi.line_color_dasi,
        ...dasi.statis_d, ...dasi.line_color_dasi,
        ...dasi.statis_k, ...dasi.line_color_dasi,
        ...dasi.statis_j, ...dasi.line_color_dasi,
        ...dasi.statis_d, ...dasi.line_color_dasi,
        ...dasi.statis_l, ...dasi.line_color_dasi,
        ...dasi.statis_j, ...dasi.line_color_dasi,
        ...dasi.statis_d, ...dasi.line_color_dasi,
        ...dasi.statis_b, ...dasi.line_color_dasi,
        ...dasi.statis_j, ...dasi.line_color_dasi,
        ...dasi.statis_d, ...dasi.line_color_dasi,
        ...dasi.statis_q, ...dasi.line_color_dasi,
        ...dasi.statis_j, ...dasi.line_color_dasi,
        ...dasi.statis_c, ...dasi.line_color_dasi,
        ...dasi.statis_k, ...dasi.line_color_dasi,
        ...dasi.statis_p, ...dasi.line_color_dasi,
        ...dasi.statis_d, ...dasi.line_color_dasi,
        ...dasi.statis_q, ...dasi.line_color_dasi,
        ...dasi.statis_p, ...dasi.line_color_dasi,
        ...dasi.statis_d, ...dasi.line_color_dasi,
        ...dasi.statis_e, ...dasi.line_color_dasi,
        ...dasi.statis_p, ...dasi.line_color_dasi,
        ...dasi.statis_o, ...dasi.line_color_dasi,
        ...dasi.statis_e, ...dasi.line_color_dasi,
        ...dasi.statis_e, ...dasi.line_color_dasi,
        ...dasi.statis_o, ...dasi.line_color_dasi,
        ...dasi.statis_f, ...dasi.line_color_dasi,
        ...dasi.statis_g, ...dasi.line_color_dasi,
        ...dasi.statis_o, ...dasi.line_color_dasi,
        ...dasi.statis_f, ...dasi.line_color_dasi,
        ...dasi.statis_g, ...dasi.line_color_dasi,
        ...dasi.statis_o, ...dasi.line_color_dasi,
        ...dasi.statis_n, ...dasi.line_color_dasi,
        ...dasi.statis_n, ...dasi.line_color_dasi,
        ...dasi.statis_o, ...dasi.line_color_dasi,
        ...dasi.statis_f, ...dasi.line_color_dasi,
        ...dasi.statis_g, ...dasi.line_color_dasi,
        ...dasi.statis_m, ...dasi.line_color_dasi,
        ...dasi.statis_n, ...dasi.line_color_dasi,
        ...dasi.statis_g, ...dasi.line_color_dasi,
        ...dasi.statis_r, ...dasi.line_color_dasi,
        ...dasi.statis_m, ...dasi.line_color_dasi,
        ...dasi.statis_h, ...dasi.line_color_dasi,
        ...dasi.statis_r, ...dasi.line_color_dasi,
        ...dasi.statis_g, ...dasi.line_color_dasi,
        ...dasi.statis_h, ...dasi.line_color_dasi,
        ...dasi.statis_i, ...dasi.line_color_dasi,
        ...dasi.statis_r, ...dasi.line_color_dasi,
        ...dasi.statis_h, ...dasi.line_color_dasi,
        ...dasi.statis_r, ...dasi.line_color_dasi,
        ...dasi.statis_m, ...dasi.line_color_dasi,
        ...dasi.statis_i, ...dasi.line_color_dasi,
        ...dasi.statis_r, ...dasi.line_color_dasi,
        ...dasi.statis_q, ...dasi.line_color_dasi,
        ...dasi.statis_j, ...dasi.line_color_dasi,
        ...dasi.statis_i, ...dasi.line_color_dasi,
        ...dasi.statis_q, ...dasi.line_color_dasi,
        //lubang dasi kiri
        ...dasi.statis_m, ...dasi.line_green_color2,
        ...dasi.statis_r, ...dasi.line_green_color2,
        ...dasi.statis_q, ...dasi.line_green_color2,
        ...dasi.statis_m, ...dasi.line_green_color2,
        ...dasi.statis_q, ...dasi.line_green_color2,
        ...dasi.statis_n, ...dasi.line_green_color2,
        ...dasi.statis_n, ...dasi.line_green_color2,
        ...dasi.statis_q, ...dasi.line_green_color2,
        ...dasi.statis_o, ...dasi.line_green_color2,
        ...dasi.statis_q, ...dasi.line_green_color2,
        ...dasi.statis_p, ...dasi.line_green_color2,
        ...dasi.statis_o, ...dasi.line_green_color2,

        

        // Dasi tampak kanan
        ...dasi_2.line_a, ...dasi_2.line_color,
        ...dasi_2.line_b, ...dasi_2.line_color,
        ...dasi_2.line_c, ...dasi_2.line_color,
        ...dasi_2.line_b, ...dasi_2.line_color,
        ...dasi_2.line_c, ...dasi_2.line_color,
        ...dasi_2.line_d, ...dasi_2.line_color,
        ...dasi_2.line_b, ...dasi_2.line_color,
        ...dasi_2.line_s, ...dasi_2.line_color,
        ...dasi_2.line_d, ...dasi_2.line_color,
        ...dasi_2.line_s, ...dasi_2.line_color,
        ...dasi_2.line_d, ...dasi_2.line_color,
        ...dasi_2.line_r, ...dasi_2.line_color,
        ...dasi_2.line_d, ...dasi_2.line_color,
        ...dasi_2.line_r, ...dasi_2.line_color,
        ...dasi_2.line_q, ...dasi_2.line_color,
        ...dasi_2.line_d, ...dasi_2.line_color,
        ...dasi_2.line_e, ...dasi_2.line_color,
        ...dasi_2.line_q, ...dasi_2.line_color,
        ...dasi_2.line_q, ...dasi_2.line_color,
        ...dasi_2.line_e, ...dasi_2.line_color,
        ...dasi_2.line_p, ...dasi_2.line_color,
        ...dasi_2.line_e, ...dasi_2.line_color,
        ...dasi_2.line_f, ...dasi_2.line_color,
        ...dasi_2.line_p, ...dasi_2.line_color,
        ...dasi_2.line_f, ...dasi_2.line_color,
        ...dasi_2.line_p, ...dasi_2.line_color,
        ...dasi_2.line_o, ...dasi_2.line_color,
        ...dasi_2.line_f, ...dasi_2.line_color,
        ...dasi_2.line_g, ...dasi_2.line_color,
        ...dasi_2.line_o, ...dasi_2.line_color,
        ...dasi_2.line_g, ...dasi_2.line_color,
        ...dasi_2.line_h, ...dasi_2.line_color,
        ...dasi_2.line_o, ...dasi_2.line_color,
        ...dasi_2.line_g, ...dasi_2.line_color,
        ...dasi_2.line_o, ...dasi_2.line_color,
        ...dasi_2.line_n, ...dasi_2.line_color,
        ...dasi_2.line_t, ...dasi_2.line_color,
        ...dasi_2.line_g, ...dasi_2.line_color,
        ...dasi_2.line_n, ...dasi_2.line_color,
        ...dasi_2.line_t, ...dasi_2.line_color,
        ...dasi_2.line_v, ...dasi_2.line_color,
        ...dasi_2.line_m, ...dasi_2.line_color,
        ...dasi_2.line_n, ...dasi_2.line_color,
        ...dasi_2.line_v, ...dasi_2.line_color,
        ...dasi_2.line_m, ...dasi_2.line_color,
        ...dasi_2.line_v, ...dasi_2.line_color,
        ...dasi_2.line_m, ...dasi_2.line_color,
        ...dasi_2.line_l, ...dasi_2.line_color,
        ...dasi_2.line_v, ...dasi_2.line_color,
        ...dasi_2.line_w, ...dasi_2.line_color,
        ...dasi_2.line_l, ...dasi_2.line_color,
        ...dasi_2.line_w, ...dasi_2.line_color,
        ...dasi_2.line_k, ...dasi_2.line_color,
        ...dasi_2.line_l, ...dasi_2.line_color,
        ...dasi_2.line_x, ...dasi_2.line_color,
        ...dasi_2.line_w, ...dasi_2.line_color,
        ...dasi_2.line_k, ...dasi_2.line_color,
        ...dasi_2.line_x, ...dasi_2.line_color,
        ...dasi_2.line_j, ...dasi_2.line_color,
        ...dasi_2.line_k, ...dasi_2.line_color,
        ...dasi_2.line_i, ...dasi_2.line_color,
        ...dasi_2.line_j, ...dasi_2.line_color,
        ...dasi_2.line_x, ...dasi_2.line_color,
        ...dasi_2.line_i, ...dasi_2.line_color,
        ...dasi_2.line_u, ...dasi_2.line_color,
        ...dasi_2.line_x, ...dasi_2.line_color,
        ...dasi_2.line_i, ...dasi_2.line_color,
        ...dasi_2.line_t, ...dasi_2.line_color,
        ...dasi_2.line_u, ...dasi_2.line_color,
        ...dasi_2.line_h, ...dasi_2.line_color,
        ...dasi_2.line_i, ...dasi_2.line_color,
        ...dasi_2.line_t, ...dasi_2.line_color,
        ...dasi_2.line_t, ...dasi_2.line_color,
        ...dasi_2.line_h, ...dasi_2.line_color,
        ...dasi_2.line_o, ...dasi_2.line_color,
        ...dasi_2.line_t, ...dasi_2.line_color,
        ...dasi_2.line_v, ...dasi_2.line_color,
        ...dasi_2.line_n, ...dasi_2.line_color,

        //lubang putih dasi
        ...dasi_2.line_t, ...dasi_2.line_green_color,
        ...dasi_2.line_u, ...dasi_2.line_green_color,
        ...dasi_2.line_v, ...dasi_2.line_green_color,
        ...dasi_2.line_v, ...dasi_2.line_green_color,
        ...dasi_2.line_u, ...dasi_2.line_green_color,
        ...dasi_2.line_x, ...dasi_2.line_green_color,
        ...dasi_2.line_v, ...dasi_2.line_green_color,
        ...dasi_2.line_w, ...dasi_2.line_green_color,
        ...dasi_2.line_x, ...dasi_2.line_green_color,
        
    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard
    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    var speed = 0.0036;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {

        if (vertices[231] < -1.0 || vertices[118] > 1.0) {
            speed = speed * -1;
        }

        // for (let i = 101; i < vertices.length; i += 5) {
        //     vertices[i] = vertices[i] + speed;
        // }
    }


    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0.760, 1.0, 0.380, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 171;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}