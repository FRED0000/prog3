let LivingCreature = require('./LivingCreature')
let power1
let power3

power1 = Math.floor(Math.random() * 10 + 2);
power3 = Math.floor(Math.random() * 10);

module.exports = class Grass extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.multiply = 0
        this.directions = [];
    }

    move() {
        this.energy--
        var emptyCells = super.chooseCell(0)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.energy >= 0) {

            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 3
            this.x = newX
            this.y = newY
        }
        else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }
    eat() {
        var emptyCells = this.chooseCell(2)
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (newCell && power1 >= power3) {
            this.energy++
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break
                }
            }
        }




        else {

            this.move()

        }
      
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in GuardianArr) {
            if (this.x == GuardianArr[i].x && this.y == GuardianArr[i].y) {
                GuardianArr.splice(i, 1);
                break;
            }
        }
    }
}
