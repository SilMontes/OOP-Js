const _radius = new WeakMap()

class Circle{
    constructor(radius){
        _radius.set(this,radius);
    }

    /*
    getRadius(){
        return _radius.get(this)
    }
    */
   // better awy ro access private methods
   get radius(){
       return _radius.get(this);
   }

   set radius(value){
       if (value <= 0) throw new Error('Invalid radius')
       _radius.set(this, value);
   }
}

const c = new Circle(4);