// Features
const canEat = {
    eat : function(){
        this.hunger--;
        console.log('eating');
    }
}

const canWalk = {
    walk : function(){
        console.log('walking')
    }
}

const canSwim = {
    swim: function(){
        console.log('swin')
    }
}

function mixin(target, ...sources){ //  the rest operator (...) will collect all the arguments and turn them into an array

    Object.assign(target, ...sources) // ... in here is acts as the spread operator; we will spread the arrray into multiple objects
}

//Object.assign -> use to copy the properties and methods from one object to another
//const person = Object.assign({}, canEat, canWalk) // an empty object as the target, and then, one or more source objects. The empty object ends with a combination of the source objects

function Person(){
    //this can have any attribute required
}


mixin(Person.prototype, canEat, canWalk)
const person = new Person()
console.log(person)

function Goldenfish(){

}

mixin(Goldenfish.prototype, canEat, canSwim)
const goldenfish = new Goldenfish()
console.log(goldenfish)

