'use strict';
let allPhotos = ['img/aspenlake.jpeg', 'img/aspenski.jpeg', 'img/aspentown.jpeg', 'img/blow-hole.jpg', 'img/cruise.jpg', 'img/flag.jpg', 'img/hiker.jpg', 'img/mountain.jpg', 'img/trail.jpg', 'img/vegas-sign.jpg', 'img/vegas.jpg', 'img/craps.jpg'];

function renderDestination(){
  let renderData = localStorage.getItem ('storedDestination');
  let parsedData = JSON.parse(renderData);
  console.log(parsedData);
  let quizAns = document.getElementById('currentDest');

  let locName = document.getElementById('destName');
  quizAns.textContent = parsedData.name;
  quizAns.appendChild(locName);
  console.log(parsedData.photos);
  let formAns = document.createElement ('p');
  formAns.textContent = parsedData.description;
  for(let i = 0; i < 3; i++){
    let imgLocation = document.createElement('img');
    imgLocation.src = parsedData.photos[i];
    quizAns.appendChild(imgLocation);
  }
  quizAns.appendChild(formAns);
}
renderDestination();
