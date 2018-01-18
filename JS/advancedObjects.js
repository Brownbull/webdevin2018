// reference type
var object1 = {value : 10};
var object2 = object1; // if object1.value changes on so will object2.value
var object3 = {value : 10};



// context
function b(){
    let a = 4;
}
// instantiation
class Player{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log('Hi Im ${this.name}, Im a ${this.type}'); 
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type)
    }
    play() {
        console.log('weeee i´m a ${this.type}');
        
    }
}

const wizard1 = new Wizard('shellt', 'healer');