var socket = io();

var side = 30;

function setup() {
    createCanvas(50 * side, 50 * side);
    background("pink");
}

function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            var obj = matrix[y][x];
            if (obj == 0){
                fill("grey")
            }
            else if (obj == 1) {
                fill("green");
            }
            else if (obj == 2) {
                fill("yellow");
            }
            else if (obj == 3) {
                fill("red");
            }
            else if (obj == 4) {
                fill("blue");
            }
            rect(x * side, y * side, side, side);
        }
    }
}

        socket.on('send matrix', nkarel)
 


function kill() {
    socket.emit("kill")
}
function addGrass() {
    socket.emit("add grass")
}
function addGrassEater() {
    socket.emit("add grassEater")
}

function addGuardian() {
    socket.emit("add addGuardian")
}
function addTrab() {
    socket.emit("add addTrab")
}






// function generator(matLen, gr, grEat, gDain, trap) {
//     let matrix = [];
//     for (let i = 0; i < matLen; i++) {
//         matrix[i] = [];
//         for (let j = 0; j < matLen; j++) {
//             matrix[i][j] = 0;
//         }
//     }
//     for (let i = 0; i < gr; i++) {
//         let x = Math.floor(Math.random() * matLen);
//         let y = Math.floor(Math.random() * matLen);
//         if (matrix[x][y] == 0) {
//             matrix[x][y] = 1;
//         }
//     }
//     for (let i = 0; i < grEat; i++) {
//         let x = Math.floor(Math.random() * matLen);
//         let y = Math.floor(Math.random() * matLen);
//         if (matrix[x][y] == 0) {
//             matrix[x][y] = 2;
//         }
//     }

//     for (let i = 0; i < gDain; i++) {
//         let x = Math.floor(Math.random() * matLen);
//         let y = Math.floor(Math.random() * matLen);
//         if (matrix[x][y] == 0) {
//             matrix[x][y] = 3;
//         }
//     }
//     for (let i = 0; i < trap; i++) {
//         let x = Math.floor(Math.random() * matLen);
//         let y = Math.floor(Math.random() * matLen);
//         if (matrix[x][y] == 0) {
//             matrix[x][y] = 4;
//         }
//     }

//     return matrix;
// }

// let side = 30;

// let matrix = generator(30, 600, 50, 15, 15);


// var grassArr = []
// var grassEaterArr = []
// let GuardianArr = []
// var trapArr = []
// this.power2 = Math.floor(Math.random() * 10 + 10);

// function setup() {
//     frameRate(4);
//     createCanvas(matrix[0].length * side, matrix.length * side);
//     background('#acacac');
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 let gr = new Grass(x, y)
//                 grassArr.push(gr)
//             } else if (matrix[y][x] == 2) {
//                 let gr = new GrassEater(x, y)
//                 grassEaterArr.push(gr)
//             }
//             else if (matrix[y][x] == 3) {
//                 let gr = new Guardian(x, y)
//                 GuardianArr.push(gr)
//             }
//             else if (matrix[y][x] == 4) {
//                 var tr = new Trap(x, y)
//                 trapArr.push(tr)
//             }
//         }
//     }

// }


// function draw() {

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 fill("#8FC349");
//             } else if (matrix[y][x] == 2) {
//                 fill("#F29224");
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
//             }
//             else if (matrix[y][x] == 3) {
//                 fill("#F5D800");
//             }
//             else if (matrix[y][x] == 4) {
//                 fill("#000000");
//             }

//             rect(x * side, y * side, side, side);
  
//         }
//     }
//     for (var i in grassArr) {
//         grassArr[i].mul();
//     }
//     for (var i in grassEaterArr) {
//         grassEaterArr[i].eat();
//     }
//     for (var i in GuardianArr) {
//         GuardianArr[i].eat();
//     }
// }


