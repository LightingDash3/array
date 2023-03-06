// import fetch from 'node-fetch'



// fetch('https://jsonplaceholder.typicode.com/posts/10') //sample public JSON API for use in testing
//     .then(response => response.json()) //this gets the entire HTTP response, so we use the .json() function which also returns a promise
//     .then(json => console.log(`Post #10: ${json.title}`)) //this promise includes the json returned from the fetched URL if successful
//     .catch(error => console.error(`Caught error: ${error}`)) //can optionally include this to show any errors
//     .finally(() => console.log('done fetching')) //can optionally include this after all fetching done

//     let post2 = await fetch ('https://jsonplaceholder.typicode.com/posts/3')
//     let post2Json = await post2.json()
//     console.log(`post #2:${JSON.stringify(post2Json)}`)

//     async  function fetch(postId) {
//         try {
//           const response = await fetch(`https://jsonplaceholder.typicode.com/posts/3${postId}`);
//           const data = await response.json();
          
//           return data.body;
//         } 
        
//         catch (error) {
//           console.error(error);
//         }
//       }

function start() {
    console.log('Started preparing Pizza'); 
    setTimeout(makeBase, 100, addCheese, addToppings, cook, finish);
}

const makeBase = function(...actions) {
    console.log('Pizza Base is prepared');
    setTimeout(actions.shift(), 500, ...actions)
}

const addCheese = (...actions) => {
    console.log('Cheese is added on Pizza');
    setTimeout(actions.shift(), 200, ...actions)
}

function addToppings(...actions) {
    console.log('Toppings are added on Pizza')
    setTimeout(actions.shift(), 300, ...actions)
}

const cook = function(...actions) {
    console.log('Pizza is cooked')
    setTimeout(actions.shift(), 800, ...actions)
}

const finish = (...actions) => {
    console.log('Pizza is ready')
}

start();

      