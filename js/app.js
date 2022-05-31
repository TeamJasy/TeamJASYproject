'use strict'
//start with storing user input and see what it looks like
//decide on constructor format/function

//GLOBAL VARIABLES
let destinationAns = [];
let destinations = [];
let userDestination = [];
// let mountainVotes = 0;
// let snowyVotes = 0;
// let sandyVotes = 0;

//———————————DOM REF

// Things to include in constructor:
// Destination
//--------------------CONSTRUCTORS

function DestinationPackage(name, activity, goal, fileExtension = 'jpeg', ansKey ){
  this.name = name;
  this.activity = activity;
  this.goal = goal;
  this.photo = `img/${name}.${fileExtension}`;
  this.ansKey = ansKey;
  this.snow = 0;
  this.mountain = 0;
  this.sandy = 0;
  destinations.push(this);
}
new DestinationPackage('aspen', 'skiing', 'family activities', 'aspenlake', [0, 3, 6] )
new DestinationPackage('ensenada', 'swimming', 'family relaxation','meow', [2, 5, 8] )
new DestinationPackage('mountain', 'hiking', 'isolation', [1, 4, 7])
// let formData = new Destination();


//--------------------HELPER FUNCTIONS


//--------------------CONSTRUCTOR METHODS



//--------------------FUNCTIONS
function renderDestination(){
  submitResults();
  let renderData = localStorage.getItem ('storedDestination');
  let parsedData = JSON.parse(renderData);

  console.log()

  // document.getElementById('currentDest');
  // if (destinationAns [0] === destinations [0]) {
    
  // }
   
}


//--------------------EVENT LISTENERS
let quizForm = document.getElementById('quiz')
quizForm.addEventListener('submit', submitResults)



//--------------------EVENT HANDLERS
// function submitResults(event){
//   event.preventDefault()
// for(let i = 0; i < 9; i++){
//   if(quizForm[i].checked){destinationAns.push(i)}
// }
// for(let j = 0; j < destinationAns.length; j++){
//   let userMatch = 0
//   for(let k = 0; k < destinations.length; k++){
//   if(destinationAns[k] === destinations[j].ansKey[k]){
//     userMatch++
//   }
// }
// console.log(userMatch)
// if (userMatch === destinationAns.length){
//   userDestination.push(destinations[j])
// }
// let stringDestination = JSON.stringify(userDestination)
// localStorage.setItem('storedDestination', stringDestination)
// }
// }
// function submitResults(event){
//   event.preventDefault(); 
//   if(document.getElementById('q1-1').checked){
//     destinations.snow++
//   }
//   if(document.getElementById('q1-2').checked){
//     destinations.mountain++
//   }
//   if(document.getElementById('q1-3').checked){
//     destinations.sandy++
//   }

// }
// function recordAns(){
//   let formAns = document.getElementById('currentDest');
//   formAns.innerHTML = formData;
// }


//--------------------FUNCTION CALLS