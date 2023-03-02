// function printbasktballchampions() {
//     let current = Golden- state -warriows; 
//     let last = Hornetes;
//     let nextrunnerup = Lakers; 
//     let lastplace = 'bucks';

const { get, map } = require("jquery");

//     console.log(`Current Champion is: ${current}, last champions ${last} The next runner up is ${nextrunnerup} with last place is ${lastplace}`)
// }

// const foods = new Set(['pizza', 'chips', 'pasta', 'seafood', 'salad', 'noodles', 'vegetables']);
// const [firstfood, secondfood, ...other] = foods
// console.log (firstfood, secondfood, ...other)

// const plantNames = new Map([
//     ['Blueberry', 'Vaccinium'],
//     ['Daylily', 'Hemerocallis'],
//     ['Foxglove', 'Digitalis'],
//     ['Lavender', 'Lavandula']
// ]) 



// function capitalizeFirstLetters(string) {
//     // split the string into an array of words
//     let words = string.split(" ");
    
//     // iterate over each word and capitalize the first letter
//     let capitalizedWords = words.map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
    
//     // join the capitalized words back into a single string
//     return capitalizedWords.join(" ");
//   }
//   console.log(capitalizeFirstLetters("jason reid")); // prints "Hello World"



//   let longString = "It was a dark and stormy night when lighting struck the ground";
// let truncatedString = truncate(longString, 40);
// console.log(truncatedString); 

// const animals = ['Fish', 'Panther','Tiger', 'Giraffe', 'Monkey', 'Seal', 'TreeFrog', 'Snake', "Frog", 'Horse']

// function replaceMiddleAnimal(animals, newValue) {
//     // Calculate the index of the middle element
//     const middleIndex = Math.floor(animals.length /3);
  
//     // Replace the middle element with the new value
//     animals[middleIndex] = newValue;
  
//     // Return the updated array
//     return animals;
//   }
  
// const newValue = 'Hippo';

// const updatedAnimals = replaceMiddleAnimal(animals, newValue);

// console.log(updatedAnimals); 

// function findMatchingAnimals(beginsWith) {
    
//     const matchingAnimals = [h];
    
//     for (let i = 0; i < animals.length; i++) {
//       if (animals[h].startsWith(beginsWith)) {
//         matchingAnimals.push(animals[i]);
//       }
//     }
    
//     return matchingAnimals;
//   }
  
  

// // animals.sort()
// console.log(animals)

// let twentyCents = 0.20
// let tenCents = 0.10
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // 0.2 + 0.1 = 0.30000000000000004

// let fixedTwenty = parseFloat (twentyCents.toFixed(2));
// let fixedTen = parseFloat (tenCents.toFixed(2));
// console.log(fixedTwenty + fixedTen) 

// function currencyAddition(float1, float2) {
//     const result = parseFloat((float1 + float2).toFixed(2));
//     return result;
//   }
  
//   const float1 = 0.20;
// const float2 = 0.10;

// const result = currencyAddition(float1, float2);
// console.log(result); 

// const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
// const weather = ['sun', 'rain', 'sun', 'thunder', 'lighting', 'wind', 'thunder' ]
// function unique(duplicates){
//     uniques = []

// duplicates.forEach (element => {if (!uniques.includes(element)){uniques.push(element)}})
// return uniques
// }
// console.log(unique(colours)) 
// console.log(unique(testScores))
// console.log(unique(weather))


// function printmessage (msg)
// {
// console.log('the following message was suplied to this fuction:'${msg}'`)
// }

// {
// console.log('the following message was suplied to this fuction:'${msg}.join(' , ')'`)
// }
// const soDelayedTimer = setTimeout(printmessage, 5000'i am so delyed'),

// const lessDelayedTimer = setTimeout(printmessage, 2000'i am less delayed'),

// const neverHappenTimer = setTimeout(printmessage, 3000, 'i never happed '

// const notDelyedTimer = setTimeout(printmessage, 0 'i am not delyed'


// clearTimeout(nerverHappenTimer)

// console.log('this prints before all the timeout function')

// const interval = setInterval(printMessage, 5*1000, 'interval function' )

// setTimeout (() => clearInterval(interval), 11*1000)

// console.log (interval)


// function repeatInterval(delay, limit)
// {
//     let counter = 1;
//     let intervalTimer = setInterval(() =>{
//         console.log('melbournewins: again '+counter+' of '+limit+' times' );
//         if (counter == limit) clearInterval(intervalTimer);
//         counter++;
//     }, delay)
// }
// repeatInterval(5000,20)


// function repeatTimeout(delay, limit)
// {
//     let counter = 1;
//      setTimeout((current) => {
//         console.log('repeatInterval: repeated '+current+' of '+limit+' times' );
//         if (counter < limit) setTimeout (repeatThis, delay, current+1)
//     }, delay, counter)

//     counter++;
// }

// repeatTimeout(1000,10)


// function slow(p, i, m, x) {
//     // there can be a heavy CPU-intensive job here like adding up to a large number
//     let goal = Math.floor(Math.random() * i * 1_000_000) //random number between 0 and a million times x
//     console.log(`slow(${p}, ${i}, ${m}, ${x}): randomly generated goal for ${i * 1_000_000} is ${goal}`)
//     let random = 0;
//     for (let i = 0; i < goal; i++)
//     {
//         random++
//     }
//     return random;
// }


// function cachingDecorator(pureFunction) {
//     const cache = new Map();
//     const outerContext = this;

//     return function() {
//         //let x = arguments[0];
//         let funcParams = Array.from(arguments).join('')
//         if (cache.has(funcParams)) { // if there's such key in cache
//             console.log('returned cached value for '+funcParams)
//             return cache.get(funcParams); // read the result from it
//         }
//         let result = pureFunction.call(this, ...arguments); //needed for object functions that reference 'this' for context
//        //let result = pureFunction.apply(outerContext, arguments); //can also use apply - very similar, only difference is in handling arguments
//         //let result = pureFunction(x) //works fine for standalone functions that don't rely on 'this' for context
//         cache.set(funcParams, result); // and cache (remember) the result
//         console.log('generated new value '+result+' for '+funcParams)
//         return result;
//     };
// }

// console.time('slow no caching')
// console.log( slow(1, 2, 3, 4) ); // slow(1) is run, cached and the result returned
// console.timeEnd('slow no caching')

// console.time('slow with caching')
// console.log( "Again: " + slow(1, 2, 3, 4) ); // slow(1) result returned from cache
// console.timeEnd('slow with caching')

// 1. change the number of argument to slow







// let newUser = {

//     get name() {
//       return this._name;
//     },
  
//     set name(value) {
//       if (value.length < 6) {
//         console.log("Name is too short, need at least 4 characters");
//         return;
//       }
//       this._name = value;
//     },


//     get age () {
//         return this._age;

//     },
//     set age(value4) {
//         if (value4 > 120)
//         console.log("age is to big needs to be under 120")

//     }
// };

// console.log(newUser)
// add an age property via getters and setters that can't be less than 0 or more than 120




// const books = [
//     { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925,  genre: 'classic' },
//     { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960,  genre: 'classic' },
//     { id: 3, title: '1984', author: 'George Orwell', year: 1949, genre: 'classic' },
//     { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932, genre: 'classic' },
//     { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, genre: 'classic' },
//     ];

// function getBookTitle(bookId) {

// const book = books.find((book) => book.id === bookId);
// return book ? book.title : null;
// }
// const bookId = 2;
// const bookTitle = getBookTitle(bookId);
// console.log(bookTitle);

// function getOldBooks() {
//     return books.filter(book => book.year < 1950)
// }
// console.log (getOldBooks())

// function addGenre(books) {
//     return books.map((book) => {
//       return { ...book, genre: 'classic' };
//     });
//   }
//   const booksWithGenre = addGenre(books);
// console.log(booksWithGenre);

// function sumSalaries(salaries) {
//     let total = 0;
//     for (let salary of Object.values(salaries)) {
//       total += salary;
//     }
//     return total;
//   }
//   function topEarner(salaries) {
//     let highestSalary = 0;
//     let topEarnerName = "";
//     for (let name in salaries) {
//       if (salaries[name] > highestSalary) {
//         highestSalary = salaries[name];
//         topEarnerName = name;
//       }
//     }
//     return topEarnerName;
//   }


// let salaries = {
//     "Timothy" : 35000,
//     "David" : 25000,
//     "Mary" : 55000,
//     "Christina" : 75000,
//     "James" : 43000
//     };
    //let totalSalary = sumSalaries(salaries);
//console.log(totalSalary); 
// const topEarnerName = topEarner(salaries);
// console.log(`The top earner is ${topEarnerName}`);
   

// const phoneBookABC = new Map() //an empty map to begin with
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0455221182')
// phoneBookABC.set('Darwin', '0457689413')
// const phoneBookABC2 = {}; // initialise an empty object

// phoneBookABC.forEach(entry => {
//   phoneBookABC2[entry.name] = entry.phoneNumber;
// });
// let contacts = new Map();
// {
//     {'Annabelle', '0412312343'}
//     {'Barry', '0433221117'}
//     {'Caroline', '0455221182'}
//     {'Darwin', '0457689413'}
// }
// // phoneBookABC['Caroline'] = '0475681245'; 

// console.log(phoneBookABC);



// function printPhoneBookABC2(contacts) {


//   for (let [name, phoneNumber] of contacts) {
//     console.log(`${name}: ${phoneNumber}`);
//   }
// }
// printPhoneBookABC2(contacts)

// const phoneBook1 = new Map([
//   ['Annabelle', '0412312343'],
//   ['Darwin', '0457689413'],
 
// ]);

// const phoneBook2 = new Map([
//   ['Caroline', '0455221182'],
//   ['Barry', '0433221117'],
  
// ]);

// const phoneBook = new Map();

// for (const [key, value] of phoneBook1) {
//   phoneBook.set(key, value);
// }

// for (const [key, value] of phoneBook2) {
//   phoneBook.set(key, value);
// }

// console.log(phoneBook);

const today = new Date();

console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
console.log(`The total number of minutes that have passed so far today is: ${minutes}`);

const minutes = now.getHours() * 60 + now.getMinutes();