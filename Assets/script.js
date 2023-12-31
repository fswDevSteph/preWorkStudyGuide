// define a variable of different topics using an array
let topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
// The below generates a random index within the valid range of indices from the topics array. Then it retrieves the element at that index and assigns it to the "randomTopic" varriable.
let randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for (let x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

function selectTopic() {
  if (randomTopic === 'HTML') {
    console.log('Lets study HTML!');
  } else if (randomTopic === 'CSS') {
    console.log('Lets study CSS!');
  } else if (randomTopic === 'Git') {
    console.log('Lets study Git!');
  } else if (randomTopic === 'JavaScript') {
    console.log('Lets study JavaScript!');
  } else {
    console.log('Please try again!');
  }
}
console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();
/*Pratice: (I was lazy and eventually just wrapped the entire thing in a comment. Will this cause bugs in a live enviroment?  -_-)
let shapes = ['triangle', 'square', 'pentagone', 'circle'];

for (let x = 0; x < shapes.length; x++) {
  console.log(shapes[x]);
}


// great video for for loops:
// https://www.youtube.com/watch?v=24Wpg6njlYI
// How to create for loops:
//1. Outside the loop, a variable with an array should be declared
//ex: let shapes = ['square', 'triangle', 'circle','star'];
//2. First, Declare a second variable (the first part of your forloop) to keep track of how many times the code executes and what index too start at
//ex: let x = 0;
//. Second, a boolean is used with variablename.length and as long as the variable is less than the array, it will iterate.
//Finally, inside curly brackets, define the code you want to repeat
//ex: { console.log(shapes)[x]}

let fruits = ['banana', 'apple', 'orange'];

for (let x = 0; x < fruits.length; x++) {
  console.log(fruits[x]);
}
let vehicles = ['car', 'truck', 'van'];
for (let y = 0; y < vehicles.length; y++) {
  console.log(vehicles[y]);
}

let pets = ['dog', 'cat', 'bird', 'snake'];
for (let z = 0; z < pets.length; z++) {
  console.log(pets[z]);
}
let fam = ['mom', 'dad', 'sister', 'brother'];
for (let s = 0; s < fam.length; s++) {
  console.log(fam[s]);
}

let rainbow = ['red', 'orangey', 'yellow', 'green', 'blue', 'purple'];
for (let r = 0; r < rainbow.length; r++) {
  console.log(rainbow[r]);
}

let dating = ['annoying', 'heartbreaking', 'better off alone'];
for (let b = 0; b < dating.length; b++) {
  console.log(dating[b]);
}
*/
