// function printMe(msg1, msg2, msg3) {
//     console.log('printing debounced message: '+msg1+msg2+msg3)
// }

// function debounce(func, ms) {
//     let timer;

//     return function() {
//         clearTimeout(timer);
//         console.log ([...arguments])
//         //timer = setTimeout(func, ms, ...arguments) //option 1
//         //timer = setTimeout(() => func.call(this, ...arguments), ms); //option 2 using call
//         timer = setTimeout(() => func.apply(this, arguments), ms);
//     }
// }

// printMe = debounce(printMe, 1500); //create this debounce function for a)
// //fire off 3 calls to printMe within 300ms - only the LAST one should print, after
// //1000ms of no calls
// setTimeout( printMe, 100, 'message 1');
// setTimeout( printMe, 200, 'message 2');
// setTimeout( printMe, 300, 'message 3', 'extras', 'more');

// let animal = {
//     eats: true,
//     sleeps: true,
//     legs: 4,
//     mammal: true
// }; 

// let rabbit = Object.create(animal, {
//     jumps:{
//         vaule: true,
//         enumerable: true
//     }
// });
// console.log(rabbit)
// console.log(rabbit.eats)
// console.log(rabbit.legs)
// console.log(rabbit.jumps)

// console.log(Object.keys(rabbit));

// for (let prop in rabbit) console.log(`${prop} is ${rabbit[prop]}`);

// function Monkey(name) {
//     this.name= name;
//     this.legs = 2
// }

// Monkey.prototype = animal;
// const monkey = new Monkey ('Rumble')
// monkey.legs = 2;
// for (let prop in monkey) console.log(`${prop} is ${monkey[prop]}`);
// console.log(Object.keys(monkey));

class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
        this.type = 'animal'
    }
    
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

class Seal extends Animal  {

    constructor(name, colour)
    {
        super(name)
        this.colour = colour 
    }

    printColour() {
        console.log(`${this.name} is ${this.colour}`);
    }

    stop()  {
        super.stop();
        // this.hide();
    }

}

const seal = new Seal ('Poppy', 'grey')
seal.printColour()
seal.run(2)
seal.stop()