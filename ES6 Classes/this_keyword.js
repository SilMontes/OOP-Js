/*
// Private Properties Using Symbols
// A Symbol is a unique identifier
const _radius = Symbol();
const _draw = Symbol();

class Circle{
    constructor(radius){
       //All THESE ARE THE SAME: 

        //this.radius = radius
        //this['radius'] = radius
        //this[_radius] = radius
        
        this[_radius] = radius;
    }

    //method
    [_draw](){

    }
}

const c = new Circle(1);
const key = Object.getOwnPropertySymbols(c)[0]; // se the first symbol
console.log(c)

*/



// Private Properties Using WeakMaps -> a WakMap is essentially a dictionary where keys are objects and values can be anything

const _radius = new WeakMap();
const _move = new WeakMap();
const privateProps = new WeakMap();
class Circle{
    constructor(radius){
        _radius.set(this,radius);

        _move.set(this, () => {
            console.log('move',this) // as we are using an arrow function, the value of this will be inherited from the constructor, taht is, this references a circle object. But if we use function(){} the value of this wil be the global object, so as classes prevent us from changing global objects, it will be undefinied
        });

        /*
        // we can also create an object wirh all the private properties
        privateProps.set(this,){
            radius : radius,
            move : () => {

            }
        }
        
        //access
        ... privateProps.get(this).radius
        */
    }

    draw(){
        //console.log(_radius.get(this)) // access a private property

        //Access a private method
        _move.get(this)(); // as the move method returns a function, by adding () we call that function
    }
}

const c = new Circle(3);