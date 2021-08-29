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


const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
   try { 
        
    const response = await fetch(url); 

    const data = await response.json(); 

    const facts = data.all; 

    for (let i = 0; < facts.length; i++) {

        if (i === 10) {
            break; 
        }

        resultsContainer.innerHTML += `<div class="results">${facts[i].text}</div>`;
    }
    } catch (error) {
        resultsContainer.innerHTML = displayError ("An error occured when calling API"); 
    } 
}

makeApiCall(); 