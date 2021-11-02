class Shape{

    constructor(color){
        this.color = color
    }
    move(){
        console.log('move')
    }
}


class Circle extends Shape{

    constructor(color, radius){
        super(color);
        this.radius = radius
    }

    draw(){
        console.log('draw')
    }

    move(){
        super.move(); // use it just if we also want to access the move methos in the parent
        console.log('circle move')
    }
}

const c = new Circle('blue', 3)