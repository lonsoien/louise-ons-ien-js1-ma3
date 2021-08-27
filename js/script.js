// Question 1

// Convert the function below to an arrow function:

// function getRemainder (a,b) {
// return a % b;
// }

console.log("hello module 3"); 

const getRemainder = (a, b) => a % b; 

const result = getRemainder(6, 4); 

console.log(result); 

// Question 2 
// Make a call to the Rawg API.

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=cb8d323d50cb4dcda4f983564d011c98";

// this still not added in html
const resultsContainer = document.querySelector(".results"); 

async function makeApiCall() {
//     try {
//       const response = await fetch(url); 

//       const results = await response.json(); 

//       console.log(results); 

//     } catch (error) {
//         console.log(error); 
//         resultsContainer.innerHTML = error 
//     }
// }

// makeApiCall(); 