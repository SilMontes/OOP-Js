function NewCircle(radius){
    let defLocation = {x:0,y:0}
    this.radius = radius
    this.drawC = function(){
        console.log('drawing circle')
    }
    
    // define getters and setters
    Object.defineProperty(this, 'defLocation',{
        get : function(){
            return defLocation;
        },
        set: function(value){
            if (!value.x || !value.y)
                throw new Error('Invalid location');
            
            defLocation = value
        }
    })
}

const circle1 = new NewCircle(10)
circle1.drawC();
circle1.defLocation = {x:2,y:3};

for (let key in circle1){
    console.log(key+" : "+circle1[key])
}
console.log(circle1.defLocation)