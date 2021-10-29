function Stopwatch(){

    let duration, startTime, endTime, running = 0

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

document.write(sw.duration)