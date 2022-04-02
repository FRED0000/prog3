// let power1
// let power3

// power1 = Math.floor(Math.random() * 10 + 2);
// power3 = Math.floor(Math.random() * 10);

// class Grass {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;

//         this.multiply = 0;

//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];

//     }
//     chooseCell(character) {


//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {


//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;

//     }

//     mul() {
//         this.multiply++;
//         var emptyCells = this.chooseCell(0);
//         var newCell = random(emptyCells);

//         if (newCell && this.multiply >= 10) {
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = 1;

//             var newGrass = new Grass(newX, newY, 1);
//             grassArr.push(newGrass);
//             this.multiply = 0;
//         }
//     }


// }
// class GrassEater extends LivingCreature {
//     constructor(x, y, index){
//         super(x, y, index);
//         this.energy = 8;
//     }
//    getNewCoordinates() {
//        this.directions = [
//            [this.x - 1, this.y - 1],
//            [this.x, this.y - 1],
//            [this.x + 1, this.y - 1],
//            [this.x - 1, this.y],
//            [this.x + 1, this.y],
//            [this.x - 1, this.y + 1],
//            [this.x, this.y + 1],
//            [this.x + 1, this.y + 1]
//        ];
//    }
//    chooseCell(character) {
//        this.getNewCoordinates();
//        return super.chooseCell(character);
//    }
//    // eat, mul, move, die
//        mul() {
//         this.multiply++;
//         var emptyCells = this.chooseCell(0);
//         var newCell = random(emptyCells);


//         if (newCell && this.multiply >= 15) {
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[newY][newX] = 2;

//             var newGrass = new GrassEater(newX, newY);
//             grassEaterArr.push(newGrass);
//             this.multiply = 0;
//         }
//     }

//     move() {
//         this.energy--
//         var emptyCells = this.chooseCell(0)
//         var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

//         if (newCell && this.energy >= 0) {

//             var newX = newCell[0]
//             var newY = newCell[1]
//             matrix[newY][newX] = matrix[this.y][this.x]
//             matrix[this.y][this.x] = 0
//             this.x = newX
//             this.y = newY
//         }
//         else {
//             if (this.energy < 0) {
//                 this.die()
//             }
//         }
//     }

//     eat() {
//         var emptyCells = this.chooseCell(1)
//         var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

//         if (newCell) {
//             // power2++
//             this.energy++
//             var newX = newCell[0]
//             var newY = newCell[1]

//             matrix[newY][newX] = matrix[this.y][this.x]
//             matrix[this.y][this.x] = 0
//             this.x = newX
//             this.y = newY
//             for (var i in grassArr) {
//                 if (newX == grassArr[i].x && newY == grassArr[i].y) {
//                     grassArr.splice(i, 1)
//                     break
//                 }
//             }
//         }
//               var emptyCells1 = this.chooseCell(3)
//         var newCell1 = emptyCells1[Math.floor(Math.random() * emptyCells1.length)];
//         if (newCell1 && power3 >= power1) {

//             var newX1 = newCell1[0]
//             var newY1 = newCell1[1]

//             matrix[newY1][newX1] = matrix[this.y][this.x]
//             matrix[this.y][this.x] = 0
//             this.x = newX1
//             this.y = newY1
//             for (var i in GuardianArr) {
//                 if (newX1 == GuardianArr[i].x && newY1 == GuardianArr[i].y) {
//                     GuardianArr.splice(i, 1)
//                     break
//                 }
//             }
//         }
//         else {
//             this.move()
//         }
//         this.mul()
//     }

//     die() {
//         matrix[this.y][this.x] = 0;
//         for (var i in grassEaterArr) {
//             if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
//                 grassEaterArr.splice(i, 1);
//                 break;
//             }
//         }
//     }
// }



// class Guardian {
//     constructor(x, y) {
//         this.x = x;

//         this.y = y;
//         this.energy = 20;
//         this.multiply = 0
//         this.directions = [];
//     }

//     getNewCoordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     chooseCell(character) {
//         this.getNewCoordinates()
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     move() {
//         this.energy--
//         var emptyCells = this.chooseCell(0)
//         var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

//         if (newCell && this.energy >= 0) {

//             var newX = newCell[0]
//             var newY = newCell[1]
//             matrix[newY][newX] = matrix[this.y][this.x]
//             matrix[this.y][this.x] = 0
//             this.x = newX
//             this.y = newY
//         }
//         else {
//             if (this.energy < 0) {
//                 this.die()
//             }
//         }
//     }
//     eat() {
//         var emptyCells = this.chooseCell(2)
//         var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
//         if (newCell && power1 >= power3) {
//             this.energy++
//             var newX = newCell[0]
//             var newY = newCell[1]

//             matrix[newY][newX] = matrix[this.y][this.x]
//             matrix[this.y][this.x] = 0
//             this.x = newX
//             this.y = newY
            
//             for (var i in grassEaterArr) {
//                 if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
//                     grassEaterArr.splice(i, 1)
//                     break
//                 }
//             }
//         }




//         else {

//             this.move()

//         }
      
//     }
//     die() {
//         matrix[this.y][this.x] = 0;
//         for (var i in GuardianArr) {
//             if (this.x == GuardianArr[i].x && this.y == GuardianArr[i].y) {
//                 GuardianArr.splice(i, 1);
//                 break;
//             }
//         }
//     }

// }
// class Trap{
//     getNewCoordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     chooseCell(character) {
//         this.getNewCoordinates()
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }

//         return found;

//     }
// }