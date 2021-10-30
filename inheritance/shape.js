/*
    Classical inheritance: the one used most of the time

    In JavaScript there are not classess just objects
    Prototypical Inheritance: A prototype is a parent of another object. Every object in python has a prototype and it inherites all 
    the members in it's prototype. That root object does not inherites from any other prototype

    To know an object prototype:
    Object.getPrototypeOf(objectName)

    Comparing prototypes of two objects
    Object.getPrototypeOf(objectName) === Object.getPrototypeOf(object2Name)

    Multi-level inheritance
    We we difine an array this happens:+
    the array derives from the root array prototype and the root array prototype derives from the root array (object)

    Objects created by a given constructor will have the same prototype

    Property Descriptions:
*/
let person = {name:'Sil'}
/*
let objectBase = Object.getPrototypeOf(person)
let descriptor = Object.getOwnPropertyDescriptor(objectBase,'toString')
console.log(descriptor)
*/
Object.defineProperty(person,'name',{

    // by default all these properties are set to true
    writable : false, // we are making the name property read only
    enumerable :false, // will not show the key of the object
    configurable : false // this property cannot be deleted
})

person.name = 'Ana' 
console.log(person) // the name will not change as it is read only
console.log(Object.keys(person)) // this does not work as the enumerable has ben set to false

delete person.name
console.log(person)

function Cr(radius){
    //Instance members
    this.radius = radius
    this.move = function(){
        console.log('move')
    }
}

// Prototype members
Cr.prototype.draw = function(){
    console.log('draw')
}
//overiding t
Cr.prototype.toString = function(){
    return 'Circle with radius '+this.radius
}
const c1 = new Cr(1)
const c2 = new Cr(6)


// iterating properties
// Object.keys -> returns intance members
console.log('--',Object.keys(c1));

// this returns all members (instance(own property) + prototype)
for (let key in c1) console.log(key)

// know if it has certain own property
console.log(c1.hasOwnProperty('radius'))
console.log(c1.hasOwnProperty('toString'))

