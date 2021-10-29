/*
    Object Literals: if the object has behavior, the object literal method becomes a problem (when modifing the methods, if we have to fix a bug...)
    The solutions to that problem is the constructor function

        -------------------------
        const circle={
        radius: 1,
        location: {
            x: 1,
            y: 1
        },
        draw: function(){
            console.log('draw');
        }
    };

    circle.draw();

    ----------------------
*/


//factory function
function createCircle (radius){
     return{
        radius,
        draw: function(){
            console.log('draw');
        }
     };
}
const circle = createCircle(1);
circle.draw();
console.log(circle.constructor); // this references the object that was used to create an object

//CONSTRUCTOR FUNCTION
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const another = new Circle(1);
another.draw();
console.log(another.constructor);

// functions are objects
// when we create a function, internally, it is represented like this (lines from 49 to 54)
const Circle1 = new Function('radius',`
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }`
)
const circlea = new Circle(1);
Circle.call({},1); // this is the same as the one above {} referes to the object, the target of this   1 ferers to the first value
Circle.apply({},[1,2,3,4]) // this is the same as the one above, but is receives arrays

/* Value vs References Types
    Value: string, number, boolean, symbol, undefined - this values are independant
    Reference Types: object, function, array 

    Primitieves are copied by values
    Objects are copied by their reference
*/
// values example
let x = 10;
let y = x; // this values does not change, even if we change it later
x = 20;

// reference types example
let a = {value:10};
let b = a; // if a characteristic of a changes, it will also cahnge in b. 
          //This happens because the value is not saved in the object, intead it is saved in memory, when we access to it, we are referencing to that memory space
a.value = 20;

let number = 10;
function increase(number){
    number++; 
    console.log(number);
}
increase(number);
console.log(number); // it is going to be the same number as declared above since it values changes 
                    //just inside the function; outside of it does not changes because it is out of the function's scope

let obj = {value:30};
function increaseObjValue(obj){
    obj.value++;
}
increaseObjValue(obj);
console.log(obj);

/* Adding or removing properties
    Objects are dynamic, you can add or delete extra properties
*/
function Triangle(side){
    this.side = side;
    this.defaultLocation = { x : 0, y : 0 }

    let computeOptimumLocation = function(){ // using a variable to make it local

    }
    this.draw = function(){
      //  let x,y  these variables are part of the closure of the function, theiy preserve their state
        computeOptimumLocation()
        console.log('draw triangle');
    }
}
const triangle = new Triangle(20);
triangle.location = {x:1};
triangle['sidea'] = 3;

delete triangle.sidea;
delete triangle['location'];

// Enumering properties 
for (let key in triangle){
    if(typeof triangle[key] !== 'function'){
        console.log(key,' : ',triangle[key]);
    }
}

const keys = Object.keys(triangle); // return an array with the keys' name
console.log(keys); 

if ('side' in triangle)
    console.log('Triangle has a radius')

//ABSTRACTION : hide the details and complexity and show or expose only the essentials. (Public and private)

