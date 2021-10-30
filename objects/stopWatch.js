// This first is not the best aprroach to solve this challenge as we are exposing all the properties and that can invalidate the state of the object
/*
function Stopwatch(){

    let startTime, endTime, running, duration = 0

    Object.defineProperty(this,'duration',{
        get: function(){
            return duration
        },
        set: function(value){
            duration = value
        }
    })

    Object.defineProperty(this,'startTime',{
        get: function(){
            return startTime
        },
        set: function(value){
            startTime = value
        }
    })

    Object.defineProperty(this,'endTime',{
        get: function(){
            return endTime
        },
        set: function(value){
            endTime = value
        }
    })

    Object.defineProperty(this,'running',{
        get: function(){
            return running
        },
        set: function(value){
            running = value
        }
    })
}

Stopwatch.prototype.start = function(){
    if (this.running)
        throw new Error('Stopwatch has already started')
    this.running = true;
    this.startTime = new Date();
}

Stopwatch.prototype.reset = function(){
    this.duration = 0
    this.startTime = null
    this.endTime = null
    this.running = false
}

Stopwatch.prototype.stop = function(){
    if(!this.running)
        throw new Error('Stopwatch is not started')

    this.running = false

    this.endTime = new Date()

    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000
    this.duration += seconds
}
let sw = new Stopwatch()

console.log(sw.duration)
*/

function Stopwatch(){

    let  startTime, endTime, running, duration = 0

    this.start = function(){
        if (running)
            throw new Error('Stopwatch has already started')
        running = true;
        startTime = new Date();
    }

    this.reset = function(){
        duration = 0
        startTime = null
        endTime = null
        running = false
    }

    this.stop = function(){
        if(!running)
            throw new Error('Stopwatch is not started')

        running = false

        endTime = new Date()

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000
        console.log(endTime.getTime())
        duration += seconds
    }

    Object.defineProperty(this,'duration',{
        get: function(){
            return duration
        }
    })


}
let sw = new Stopwatch()

