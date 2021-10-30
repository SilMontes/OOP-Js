
function Shape(color){
    this.color = color
}

Shape.prototype.duplicate = function(){
    console.log('duplicate')
}

//intemidiate function inheritance
function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype)
    Parent.prototype.constructor = Child
}

function Cir(radius,color){
    /*
    Shape(color) -> this does not work since this apply the attribute to the windows object
    new Shape(color) -> this also does not work since it creates a new object
    */
    Shape.call(this,color) //this is the correct way to call the superConstructor
    this.radius = radius
}

/* Cir.prototype = Object.create(Object.prototype) Before the line below, cir inherrited from objectBase(root), this was implicit
Cir.prototype = Object.create(Shape.prototype) // now tthe Cir object is inheriting from Shape. This is prototypical inheritance
// As Cir is inheriting from Shape we can no longer use the Cir constructer dynamically -> new Circle.prototype.constructor() To solve this we need to reset the constructor
Cir.prototype.constructor = Cir
*/
extend(Cir,Shape)
Cir.prototype.draw = function(){
    console.log('draw')
}

//Method Overriding -> we should override the method after reseting and extending
Cir.prototype.duplicate = function(){
   Shape.prototype.duplicate.call(this) // we add this line just if we also want to print the message of the original method
   console.log('Duplicate circle')
}

function Square(size,color){
    this.size = size
    Shape.call(color)
}

extend(Square,Shape)

const s = new Shape()
const c = new Cir(2,'blue')

