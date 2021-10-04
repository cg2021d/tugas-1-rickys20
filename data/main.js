function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    //definisikan vertex-vertex
    /**
     * A (0.0, 0.5), B (0.5, -0.5), C (-0.5, -0.5)
     */
    var vertices = [
        0.9821812240132,0.3840454451079, //E
        0.9806940133511,0.3773529971284, //F
        0.9806940133511,0.3773529971284,
        0.9788350000235,0.3710323518143, //G
        0.9788350000235,0.3710323518143, //G
        0.9740015653715,0.3647117065003, //H
        0.9740015653715,0.3647117065003, //H
        0.9732579600405,0.3572756531897, //I
        0.9732579600405,0.3572756531897, //I
        0.9691681307196,0.3505832052101, //J
        0.9691681307196,0.3505832052101, //J
        0.9624756827401,0.3442625598961, //K
        0.9624756827401,0.3442625598961, //K
        0.96,0.34, //L
        0.96,0.34, //L
        0.9542960240984,0.3349674932578, //M
        0.9542960240984,0.3349674932578, //M
        0.9472317734533,0.3312494666025, //N
        0.9472317734533,0.3312494666025, //N
        0.937193101484,0.3275314399472, //O
        0.937193101484,0.3275314399472, //O
        0.9238082055248,0.3275314399472, //P
        0.9238082055248,0.3275314399472, //P
        0.9148849415521,0.3275314399472, //Q
        0.9148849415521,0.3275314399472, //Q
        0.9033590589206,0.3282750452783, //R
        0.9033590589206,0.3282750452783, //R
        0.8881151496338,0.3290186506093, //S
        0.8881151496338,0.3290186506093, //S
        0.87844828033,0.3305058612714, //T
        0.87844828033,0.3305058612714, //T
        0.8613453577156,0.3360829012544, //U
        0.8613453577156,0.3360829012544, //U
        0.8379217897871,0.3468651785548, //V
        0.8379217897871,0.3468651785548, //V
        0.8111519978689,0.3598782718484, //W
        0.8111519978689,0.3598782718484, //W
        0.8048313525548,0.3617372851761, //Z
        0.8048313525548,0.3617372851761, //Z
        0.7992543125719,0.3647117065003, //A1
        0.7992543125719,0.3647117065003, //A1
        0.7910746539302,0.367314325159, //b1
        0.7910746539302,0.367314325159, //b1
        0.7802923766298,0.3721477598109, //c1
        0.7802923766298,0.3721477598109, //c1
        0.7732281259847,0.3777247997939, //d1
        0.7732281259847,0.3777247997939, //d1
        0.7646766646775,0.3825582344458, //e1
        0.7646766646775,0.3825582344458, //e1
        0.7557534007047,0.3870198664322, //f1
        0.7557534007047,0.3870198664322, //f1
        0.7483173473941,0.3918533010841, //g1
        0.7483173473941,0.3918533010841, //g1
        0.7313408302522,0.3906534801029,
        0.7313408302522,0.3906534801029,
        0.7075521495846,0.3766601385337,
        0.7075521495846,0.3766601385337,
        0.6737525318672,0.3720681618483,
        0.6737525318672,0.3720681618483,
        0.5735985029428,0.3644292952354,
        0.5735985029428,0.3644292952354,
        0.4530741630507,0.3635805322784,
        0.4530741630507,0.3635805322784,
        0.3673491043951,0.3652780581924,
        0.3673491043951,0.3652780581924,
        0.3987533338036,0.3703706359343,
        0.3987533338036,0.3703706359343,
        0.3130282751479,0.3610342434075,
        0.3130282751479,0.3610342434075,
        0.2247569276213,0.3550929027086,
        0.2247569276213,0.3550929027086,
        0.0813159878906,0.3474540360957,
        0.0813159878906,0.3474540360957,
        0.0346340252563,0.3805557914182,
        0.0346340252563,0.3805557914182,
        0.0023810328908,0.4153550726546,
        0.0023810328908,0.4153550726546,
        0.1118714543421,0.4408179613642,
        0.1118714543421,0.4408179613642,
        0.1246028986969,0.4382716724933,
        0.1246028986969,0.4382716724933,
        0.1848650686429,0.4357253836223,
        0.1848650686429,0.4357253836223,
        0.2503776519133,0.4326631118556,
        0.2503776519133,0.4326631118556,
        0.3003015894344,0.4326631118556,
        0.3003015894344,0.4326631118556,
        0.345994869822,0.430530650873,
        0.345994869822,0.430530650873,
        0.3904518709004,0.4223650792463,
        0.3904518709004,0.4223650792463,
        0.4294651575611,0.4205505077737,
        0.4294651575611,0.4205505077737,
        0.5528560176971,0.4205505077737,
        0.5528560176971,0.4205505077737,
        0.6272534480733,0.4087557932019,
        0.6272534480733,0.4087557932019,
        0.6853197351961,0.4087557932019,
        0.6853197351961,0.4087557932019,
        0.7116310215487,0.4087557932019,
        0.7116310215487,0.4087557932019,
        0.7363006848334,0.4189047217958,
        0.7363006848334,0.4189047217958,
        0.746617027785,0.4189047217958,
        0.746617027785,0.4189047217958,
        0.7116310215487,0.4087557932019,
        0.7116310215487,0.4087557932019,
        0.7363006848334,0.4189047217958,
        0.7363006848334,0.4189047217958,
        0.746617027785,0.4189047217958,
        0.746617027785,0.4189047217958,
        0.7668529312669,0.4181111569353,
        0.7668529312669,0.4181111569353, 
        0.7799467511669,0.4308081944322,
        0.7799467511669,0.4308081944322,
        0.8148636042337,0.4431084494898,
        0.8148636042337,0.4431084494898,
        0.8477965451945,0.4554087045474,
        0.8477965451945,0.4554087045474,
        0.8720859634535,0.4625264966185,
        0.8720859634535,0.4625264966185,
        0.8894915463666,0.4534755935037,
        0.8894915463666,0.4534755935037,
        0.902023566064,0.4522572026997,
        0.902023566064,0.4522572026997,
        0.9446672442011,0.4332851173245,
        0.9446672442011,0.4332851173245,
        0.9640576888337,0.4191078576604,
        0.9640576888337,0.4191078576604,
        0.9666006938984,0.4083000861357,
        0.9666006938984,0.4083000861357,
        0.9821812240132,0.3840454451079, //E

        0.84,0.44,
        0.8357914219206,0.4394656029289,
        0.8357914219206,0.4394656029289,
        0.8325135556391,0.4366920237677,
        0.8325135556391,0.4366920237677,
        0.829992120038,0.432909870366,
        0.829992120038,0.432909870366,
        0.8269663973167,0.4298841476446,
        0.8269663973167,0.4298841476446,
        0.8236885310352,0.4263541378031,
        0.8236885310352,0.4263541378031,
        0.8204106647538,0.4243369893222,
        0.8204106647538,0.4243369893222,
        0.8168806549122,0.4213112666008,
        0.8168806549122,0.4213112666008,
        0.8120899272701,0.4177812567593,
        0.8120899272701,0.4177812567593,
        0.8032649026662,0.4107212370762,
        0.8032649026662,0.4107212370762,
        0.7936834473819,0.4056783658739,
        0.7936834473819,0.4056783658739,
        0.7974656007836,0.4031569302728,
        0.7974656007836,0.4031569302728,
        0.8,0.4,
        0.8,0.4,
        0.8040213333465,0.3966011977099,
        0.8040213333465,0.3966011977099,
        0.8057863382673,0.3918104700678,
        0.8057863382673,0.3918104700678,
        0.809568491669,0.3819768712234,
        0.809568491669,0.3819768712234,
        0.8120899272701,0.3779425742616,
        0.8120899272701,0.3779425742616,
        0.8158720806718,0.3769340000212,
        0.8158720806718,0.3769340000212,
        0.8187292213351,0.3739926449125,
        0.8187292213351,0.3739926449125,
        0.8244119514593,0.3739926449125,
        0.8244119514593,0.3739926449125,
        0.8278621804632,0.372977871676,
        0.8278621804632,0.372977871676,
        0.8349655931184,0.3711512798504,
        0.8349655931184,0.3711512798504,
        0.8440985522465,0.3691217333775,
        0.8440985522465,0.3691217333775,
        0.850238049865,0.3678362558098,
        0.850238049865,0.3678362558098,
        0.8579888371616,0.3659572770712,
        0.8579888371616,0.3659572770712,
        0.8739601564395,0.3643131706749,
        0.8739601564395,0.3643131706749,
        0.8849991565286,0.3652526600442,
        0.8849991565286,0.3652526600442,
        0.8948637949061,0.3659572770712,
        0.8948637949061,0.3659572770712,
        0.904258688599,0.3661921494135,
        0.904258688599,0.3661921494135,
        0.9143581993188,0.3659572770712,
        0.9143581993188,0.3659572770712,
        0.9251623270656,0.3654875323865,
        0.9251623270656,0.3654875323865,
        0.9326782420198,0.3650177877019,
        0.9326782420198,0.3650177877019,
        0.9413685186857,0.363608553648,
        0.9413685186857,0.363608553648,
        0.9521726464325,0.3645480430173,
        0.9521726464325,0.3645480430173,
        0.9535784681334,0.3728130676579,
        0.9535784681334,0.3728130676579,
        0.951997788071,0.3799261279388,
        0.951997788071,0.3799261279388,
        0.9527881281022,0.3873026348968,
        0.9527881281022,0.3873026348968,
        0.9527881281022,0.3933619084694,
        0.9527881281022,0.3933619084694,
        0.9490998746232,0.3959963752401,
        0.9490998746232,0.3959963752401,
        0.9195938467913,0.4131204092497,
        0.9195938467913,0.4131204092497,
        0.8937760724384,0.425238956395,
        0.8937760724384,0.425238956395,
        0.8695389781479,0.4341961434154,
        0.8695389781479,0.4341961434154,
        0.8484632439822,0.4399919703109,
        0.8484632439822,0.4399919703109,
        0.84,0.44 

        // H=(0.9740015653715,0.3647117065003)I=(0.9732579600405,0.3572756531897)J=(0.9691681307196,0.3505832052101)
        // K=(0.9624756827401,0.3442625598961)L=(0.96,0.34)M=(0.9542960240984,0.3349674932578)N=(0.9472317734533,0.3312494666025)
        // O=(0.937193101484,0.3275314399472)P=(0.9238082055248,0.3275314399472)Q=(0.9148849415521,0.3275314399472)
        // R=(0.9033590589206,0.3282750452783)S=(0.8881151496338,0.3290186506093)T=(0.87844828033,0.3305058612714)
        // U=(0.8613453577156,0.3360829012544)V=(0.8379217897871,0.3468651785548)W=(0.8111519978689,0.3598782718484)
        // Z=(0.8048313525548,0.3617372851761)A_{1}=(0.7992543125719,0.3647117065003)B_{1}=(0.7910746539302,0.367314325159)
        // C_{1}=(0.7802923766298,0.3721477598109)D_{1}=(0.7732281259847,0.3777247997939)E_{1}=(0.7646766646775,0.3825582344458)
        // F_{1}=(0.7557534007047,0.3870198664322)G_{1}=(0.7483173473941,0.3918533010841)
        //H_{1}=(0.84,0.44)I_{1}=(0.8357914219206,0.4394656029289)
        // J_{1}=(0.8325135556391,0.4366920237677)K_{1}=(0.829992120038,0.432909870366)L_{1}=(0.8269663973167,0.4298841476446)
        // M_{1}=(0.8236885310352,0.4263541378031)N_{1}=(0.8204106647538,0.4243369893222)O_{1}=(0.8168806549122,0.4213112666008)
        // P_{1}=(0.8120899272701,0.4177812567593)Q_{1}=(0.8032649026662,0.4107212370762)R_{1}=(0.7936834473819,0.4056783658739)
        // S_{1}=(0.7974656007836,0.4031569302728)T_{1}=(0.8,0.4)U_{1}=(0.8040213333465,0.3966011977099)V_{1}=(0.8057863382673,0.3918104700678)
        // W_{1}=(0.809568491669,0.3819768712234)Z_{1}=(0.8120899272701,0.3779425742616)A_{2}=(0.8158720806718,0.3769340000212)
        // B_{2}=(0.8187292213351,0.3739926449125)C_{2}=(0.8244119514593,0.3739926449125)D_{2}=(0.8278621804632,0.372977871676)
        // E_{2}=(0.8349655931184,0.3711512798504)F_{2}=(0.8440985522465,0.3691217333775)G_{2}=(0.850238049865,0.3678362558098)
        // H_{2}=(0.8579888371616,0.3659572770712)I_{2}=(0.8739601564395,0.3643131706749)J_{2}=(0.8849991565286,0.3652526600442)
        // K_{2}=(0.8948637949061,0.3659572770712)L_{2}=(0.904258688599,0.3661921494135)M_{2}=(0.9143581993188,0.3659572770712)
        // N_{2}=(0.9251623270656,0.3654875323865)O_{2}=(0.9326782420198,0.3650177877019)P_{2}=(0.9413685186857,0.363608553648)
        // Q_{2}=(0.9521726464325,0.3645480430173)
        //R_{2}=(0.8484632439822,0.4399919703109)S_{2}=(0.8695389781479,0.4341961434154)
        // T_{2}=(0.8937760724384,0.425238956395)U_{2}=(0.9195938467913,0.4131204092497)V_{2}=(0.9490998746232,0.3959963752401)
        // W_{2}=(0.9527881281022,0.3933619084694)Z_{2}=(0.9527881281022,0.3873026348968)A_{3}=(0.951997788071,0.3799261279388)
        // B_{3}=(0.9535784681334,0.3728130676579)
        //C_{3}=(0.9666006938984,0.4083000861357)D_{3}=(0.9640576888337,0.4191078576604)
        // E_{3}=(0.9427600214175,0.4286441266527)F_{3}=(0.9446672442011,0.4332851173245)G_{3}=(0.902023566064,0.4522572026997)
        // H_{3}=(0.8894915463666,0.4534755935037)I_{3}=(0.8720859634535,0.4625264966185)J_{3}=(0.8477965451945,0.4554087045474)
        // K_{3}=(0.8148636042337,0.4431084494898)L_{3}=(0.7799467511669,0.4308081944322)M_{3}=(0.7668529312669,0.4181111569533)
        // N_{3}=(0.746617027785,0.4189047217958)O_{3}=(0.7363006848334,0.4189047217958)P_{3}=(0.7116310215487,0.4087557932019)
        // Q_{3}=(0.6853197351961,0.4087557932019)R_{3}=(0.6272534480733,0.4087557932019)S_{3}=(0.5528560176971,0.4205505077737)
        // T_{3}=(0.4294651575611,0.4205505077737)U_{3}=(0.3904518709004,0.4223650792463)V_{3}=(0.345994869822,0.430530650873)
        // W_{3}=(0.3003015894344,0.4326631118556)Z_{3}=(0.2503776519133,0.4326631118556)A_{4}=(0.1848650686429,0.4357253836223)
        // B_{4}=(0.1246028986969,0.4382716724933)C_{4}=(0.1118714543421,0.4408179613642)D_{4}=(0.0023810328908,0.4153550726546)
        // E_{4}=(0.0813159878906,0.3474540360957)F_{4}=(0.0346340252563,0.3805557914182)G_{4}=(0.2247569276213,0.3550929027086)
        // H_{4}=(0.3130282751479,0.3610342434075)I_{4}=(0.3987533338036,0.3703706359343)J_{4}=(0.3673491043951,0.3652780581924)
        // K_{4}=(0.4530741630507,0.3635805322784)L_{4}=(0.5735985029428,0.3644292952354)M_{4}=(0.6737525318672,0.3720681618483)
        // N_{4}=(0.7075521495846,0.3766601385337)O_{4}=(0.7313408302522,0.3906534801029)
    ];

    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertextShaderCode =`
    attribute vec2 a_Position;
    void main(){
        gl_Position = vec4(a_Position, 0.0, 1.0);
        gl_PointSize = 20.0;
    }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertextShaderCode);
    gl.compileShader(vertexShader);

    //definisi fragment
    var fragmentShaderCode = `
    void main(){
        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
    }
    `;

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    var aPosition = gl.getAttribLocation(shaderProgram, "a_Position");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(1.0, 1.0, 1.0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    
    // gl.drawArrays(gl.POINTS, 0, 3); //titik
    gl.drawArrays(gl.LINES, 0, 218); //garis (a ke b), (b ke c), (c ke a)
    // gl.drawArrays(gl.LINE_LOOP, 0, 3); //garis loop (3 garis saja)
    // gl.drawArrays(gl.LINE_STRIP, 0,3);
    // gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
    // gl.drawArrays(gl.TRIAGLE_FAN, 0,4);
    // gl.drawArrays(gl.TRIANGLES, 0, 4);
}