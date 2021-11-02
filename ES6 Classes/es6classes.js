class Circle{
    constructor(radius){
        this.radius = radius;

        this.move = function(){ // this method will on the object or instance

        }
    }

    //Instance method    
    draw(){ // this method will be on the prototype
        console.log('draw')
    }

    //Static Method -> it is not tied to a particular object
    static parse(str){ // this method it is not available in the circle object, we cannot do : c.parse(str), but it is accesible from the class
        const radius = JSON.parse(str).radius
        return new Circle(radius)
    }
}

//const c = new Circle(2);
const circle = Circle.parse('{"radius":1}')

/*
    There is a critical difference between function declaration and a function expressioon in JavaScript. Function declarations are hoisted which means
    they are raise to the top of the code. So, I call the function before its declaration. In contrast, function expression are not hoited, they cannot be call 
    before its declaration, they are variables not declared at the moment

    // Function Declaration 
    function sayHello() {}

    // Function Expression
    const sayGoodbye = function() {};



    Classes are not hoisted

    Class Declaration
    class Circle{

    }

    Class Expression
    const Square = class {

    }

    

*/

