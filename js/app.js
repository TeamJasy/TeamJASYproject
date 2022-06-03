'use strict';

//GLOBAL VARIABLES
let destinationAns = [];
let destinations = [];
let allUserMatches = [];
let userDestination = [];
let allPhotos = ['img/aspenlake.jpeg', 'img/aspenski.jpeg', 'img/aspentown.jpeg', 'img/blow-hole.jpg', 'img/cruise.jpg', 'img/flag.jpg', 'img/hiker.jpg', 'img/mountain.jpg', 'img/trail.jpg', 'img/vegas-sign.jpg', 'img/vegas.jpg', 'img/craps.jpg', 'img/paris1.jpg', 'img/paris2.jpg', 'img/paris3.jpg'];


//———————————DOM REF

//--------------------CONSTRUCTORS

function DestinationPackage(name, activity, goal, ansKey, photos){
  this.name = name;
  this.activity = activity;
  this.goal = goal;
  this.photos = photos;
  this.ansKey = ansKey;
  this.userMatch = 0;
  destinations.push(this);
  this.description = `${name} is a great location! They are known for ${activity}. You will be able to enjoy ${goal} during your stay.`;
}
new DestinationPackage('Aspen', 'skiing', 'family activities', [0, 0, 0, 2, 1, 1], [allPhotos[0], allPhotos [1], allPhotos[2]]);
new DestinationPackage('Ensenada', 'swimming', 'family relaxation', [2, 2, 2, 0, 0, 2], [allPhotos[3], allPhotos [4], allPhotos[5]]);
new DestinationPackage('Appalachian Mountains', 'hiking', 'isolation', [1, 1, 1, 0, 1, 1], [allPhotos[6], allPhotos [7], allPhotos[8]]);
new DestinationPackage('Vegas', 'exciting', 'gambling', [1, 2, 2, 1, 1, 1], [allPhotos[9], allPhotos[10], allPhotos[11]]);
new DestinationPackage('Paris', 'landmarks', 'tour', [3, 1, 2, 2, 1, 0], [allPhotos[12], allPhotos[13], allPhotos[14]]);

//--------------------HELPER FUNCTIONS


//--------------------CONSTRUCTOR METHODS



//--------------------FUNCTIONS
function selectUserMatch(){
  for( let i = 0; i < destinations.length; i++){
    allUserMatches.push(destinations[i].userMatch);
  }
  let userDestinationIndex = Math.max(...allUserMatches);
  console.log(userDestinationIndex);
  for(let j = 0; j < destinations.length; j++){
    if(userDestinationIndex === destinations[j].userMatch){
      userDestination = destinations[j];
      let stringDestination = JSON.stringify(userDestination);
      localStorage.setItem('storedDestination', stringDestination);
    }
  }
}

//--------------------EVENT LISTENERS
let quizForm = document.getElementById('quiz');
quizForm.addEventListener('submit', submitResults);



//--------------------EVENT HANDLERS
function submitResults(event){
  event.preventDefault();
  for(let i = 0; i < 4; i++){
    if(quizForm.q1[i].checked){destinationAns.push(i);}
  }
  for(let i = 0; i < 4; i++){
    if(quizForm.q2[i].checked){destinationAns.push(i);}
  }
  for(let i = 0; i < 4; i++){
    if(quizForm.q3[i].checked){destinationAns.push(i);}
  }
  for(let i = 0; i < 3; i++){
    if(quizForm.q4[i].checked){destinationAns.push(i);}
  }
  for(let i = 0; i < 3; i++){
    if(quizForm.q5[i].checked){destinationAns.push(i);}
  }
  for(let i = 0; i < 3; i++){
    if(quizForm.q6[i].checked){destinationAns.push(i);}
  }
  for(let j = 0; j < destinations.length; j++){
    for(let k = 0; k < destinationAns.length; k++){
      if(destinationAns[k] === destinations[j].ansKey[k]){
        destinations[j].userMatch++;
      }
    }
  }
  window.location.href = "uservacations.html" ;
  selectUserMatch();
}



//--------------------FUNCTION CALLS

