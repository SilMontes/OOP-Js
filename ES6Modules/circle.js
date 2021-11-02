/*
Modularity = maintainability, reuse, abstract (only expose the essential)

 things that are highly related should go together -> cohesion
*/


//CommonJs Modules -> node

//implementation detail
const _radius = new WeakMap(); //this will not be esported, just the class or public interface
//Public Interface
class Circle{
    constructor(radius){
        _radius.set(this,radius)
    }

    draw(){
        console.log('Cirle with radius '+_radius.get(this))
    }
}

// everything in a module is private unless we export it
module.exports = Circle; // export only that class