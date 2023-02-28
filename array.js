// function printbasktballchampions() {
//     let current = Golden- state -warriows; 
//     let last = Hornetes;
//     let nextrunnerup = Lakers; 
//     let lastplace = 'bucks';

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

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
function unique(duplicates){
    uniques = []

duplicates.forEach (element => {if (!uniques.includes(element)){uniques.push(element)}})
return uniques
}
console.log(unique(colours)) 
console.log(unique(testScores))
