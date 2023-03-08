// function makeCounter() {
//     let currentCount = 0;
   
//     return function() {
   
   
//         currentCount++;
   
   
//         console.log(currentCount)
   
   
//         return currentCount;
//     };
//     }
//     let counter1 = makeCounter();
//     let counter2 = makeCounter();
//     counter1(); // 1
//     counter1(); // 2
//     counter2();
//     counter2();
//     console.log(counter1());
//     console.log(counter2()); 
   
//     function makeCounter(startFrom) {
//         let count = startFrom || 0;
//         return function() {
//           return count++;
//         }
//       }
//       const counter = makeCounter(20);

// console.log(counter()); 
// console.log(counter());
// console.log(counter()); 


// function makeCounter(incrementBy) {
//     let count = 0;
//     return function counter() {
//       count += incrementBy;
//       return count;
//     };
//   }
//   const counter = makeCounter(365);
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 

// const delayMsg = (msg) => 

// console.log(`This message will be printed after a delay: ${msg}`);

// setTimeout(delayMsg, 2000, '#5: Delayed by 800ms');
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')


// let timeoutId = setTimeout(function() {
//     console.log("Fifth test");
//   }, 1000);
  

//   clearTimeout(timeoutId);
  

//function printMe() {
   // console.log('printing debounced message')
    //}
    //printMe = debounce(printMe); //create this debounce function for a)
    //fire off 3 calls to printMe within 300ms - only the LAST one should print, after
    // 1000ms of no calls
    // setTimeout( printMe, 100);
    // setTimeout( printMe, 200);
    // setTimeout( printMe, 300);

    // function debounce(func) {
    //     let timeoutId;
        
    //     return function(...args) {
    //       clearTimeout(timeoutId);
          
    //       timeoutId = setTimeout(() => {
    //         func.apply(this, args);
    //       }, 1000);
    //     };
    //   }
      
   // function printFibonacci() 
//    {
//         let prev = 0;
//         let curr = 1;
//          console.log(prev);
//         console.log(curr);
      
        // const intervalId = setInterval(() => {
        //   const next = prev + curr;
        //   console.log(next);
        //   prev = curr;
        //   curr = next;
        // }, 1000);
      
        // setTimeout(function nextFibonacci() {
        //     const next = prev + curr;
        //     console.log(next);
        //     prev = curr;
        //     curr = next;
        // })

        // setTimeout(() => {
        //   clearInterval(intervalId);
        // }, 10000);

       
    //    printFibonacci(1, 100); 
       
    //     function printFibonacci(start, end, limit) {
    //         let count = 0;
    //         for (let i = start; i <= end && count < limit; i++) {
    //           console.log(i);
    //           count++;
    //         }
    //       }
    //      }

      //  printFibonacci();



//      let car = {
// make: "Porsche",
// model: '911',
// year: 1964,
// description() {
    
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
// }
// };

// function displayCarDescription() {
// car.description(); //works
// }
// setTimeout(displayCarDescription, 200); 

// car = {...car, year: 2002}

// let bounddisplayCarDescription = car.description.bind (car)
    

//     setTimeout(bounddisplayCarDescription, 400); 

//     car = {...car, make: 'mustang'}

// function multiply(a, b) {
    
//     console.log(a * b);

//   }
  
//   setTimeout(function() {
//     multiply(243, 5);
//   }, 200);
// //   apply(null, numbers);

// Function.prototype.delay = function (ms){
// let originalFunction = this
// return function( ){
//     setTimeout(() => originalFunction.apply(this, arguments) ,ms)
// }
// }


//   function multiply(x, y) {
//     return x * y;
//   }
//   console.log(multiply(345, 3)); 
// console.log(multiply(333, 5)); 
// console.log(multiply(444, 2)); 

// class Person {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }

// toString() {
//         return `${this.name} is ${this.age} years old and defines as ${this.gender}.`;
//       }
// }
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   function Student(name, age, sport) {
    
//     Person.call(this, name, age);
    
    
//     this.sport = sport;
//   }

// const person1 = new Person('James Brown', 73, 'male')
//    const person2 = new Person('Blake Voge', 28, 'male') 
    
//     // console.log('person1: '+person1) 
//     // console.log('person2: '+person2)
//     console.log(person1.toString());
//     console.log(person2.toString());
//     console.log(person1);
//     console.log(student1);  
    

// class DigitalClock {
//     constructor(prefix) {
//     this.prefix = prefix;
//     }
//     display() {
//     let date = new Date();
//     //create 3 variables in one go using array destructuring
//     let [hours, mins, secs] = [date.getHours(), date.getMinutes(),
//     date.getSeconds()];
//     if (hours < 10) hours = '0' + hours;
//     if (mins < 10) mins = '0' + mins;
//     if (secs < 10) secs = '0' + secs;
//     console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//     }
//     stop() {
//     clearInterval(this.timer);
//     }
//     start() {
//     this.display();
//     this.timer = setInterval(() => this.display(), 1000);
//     }
//     }
//     const myClock = new DigitalClock('my clock:')
//     myClock.start()




// class DigitalClock{
//     onTick(time){
//         console.log(`Tick: ${time}`);
//     }
// }




// class PrecisionClock extends DigitalClock {
//     constructor(precision = 1) {
//       super();
//       this.precision = precision;
//     }
// }
//     start() {
//       this.intervalId = setInterval(() => {
//         const time = new Date();
//         const hours = time.getHours();
//         const minutes = time.getMinutes();
//         const seconds = time.getSeconds();
//         const milliseconds = time.getMilliseconds();
  
//         this.onTick(`${hours}:${minutes}:${seconds}.${milliseconds}`);
//       }, this.precision);
//     }
//   }

//   const clock = new PrecisionClock(1);
// clock.start();


//  class AlarmClock extends DigitalClock {
//     constructor(wakeupTime = '07:00') {
//       super();
//       this.wakeupTime = wakeupTime;
//     }
  
//     tick() {
//       super.tick();
//       const currentTime = this.getTimeString();
//       if (currentTime === this.wakeupTime) {
//         console.log('Wake Up');
//         this.stop();
//       }
//     }
//   }
  


// function randomDelay() {
//     // your code
//     }
//      randomDelay2().then(() => console.log('There appears to have been a delay.'));
//      function randomDelay2() {
//          const delayTime = Math.floor(Math.random() * 200) + 300;
//          return new Promise(resolve => {
//            setTimeout(resolve, delayTime);
//          });
//       }
      
    //   function randomDelay3() {
    //     const delayTime = Math.floor(Math.random() * 20000) + 1000; 
    //     return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         if (delayTime % 2 === 0) {
    //           resolve();
    //         } else {
    //           reject();
    //         }
    //       }, delayTime);
    //     });
    //   }
    //   randomDelay().then(() => console.log('The delay was successful.')).catch(() => console.log('The delay failed.'));
