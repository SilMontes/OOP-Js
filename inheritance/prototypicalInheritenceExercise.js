function HtmlElement(){
    this.click = function(){
        console.log('Clicked')
    }
}

HtmlElement.prototype.focus= function(){
    console.log('Focued')
}


function HtmlSelectElement(items = []){
    this.items = items

    this.addItem = function(item){
        this.items.push(item)
    }

    this.removeItem = function(item){
        this.items.splice(this.items.indexOf(item),1)//searches for the item and delete one, that is, the position found
    }

    this.render = function(){
        return  `<select>
        ${this.items.map(item=>
            `<option> ${item} </option>`).join('')}
        </select>`
    }
}

/*
The following aproach does not work as Object.create creates a new object and sets the prototype of that object to the prototype
of HtmlElement; that HtmlElement just has one prototype method (focus) And HTMLSelectElement would be an empty object , that is linked to 
HTMLElement as its prototype and with this we do not inherit 
HTMLSelectElement.prototype = Object.create(HtmlElement.prototype)
HtmlElement.prototype = Object.create(HTMLSelectElement) 
*/

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HTMLSelectElement;

function HtmlImageElement(src){
    this.src = src
    this.render = function(){
        return `<img src="${this.src}" />`
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
    new HtmlSelectElement([1,2,3]),
    new HtmlImageElement('http://')
]
for(let elem of elements){
    console.log(elem.render())
    
}