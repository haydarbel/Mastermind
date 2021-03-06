const colors = { 0: "red", 1: "blue", 2: "green", 3: "yellow",4:"pink",5:"bruin" };

let gekozen = [];

var gekozenChck = [];

let kies = [];

let actifeLine = document.getElementsByClassName('active-row');

let guessRow=document.getElementById('guess-row');

var scores=document.getElementById("scores");

var bord=document.getElementById("bord");

var witteRond=0;

var blackRond = 0;

var geleRond = 0;

var poningen = 10;

var line10 = document.getElementById("line10");
var allReds=document.getElementsByClassName("red");
var allBlues=document.getElementsByClassName('blue');
var allYellows=document.getElementsByClassName('yellow');
var allGreens=document.getElementsByClassName('green');
var allBlacks=document.getElementsByClassName('black');
var allWhites=document.getElementsByClassName('white');
var allPinks=document.getElementsByClassName('pink');
var allBruins=document.getElementsByClassName('bruin');

const startButton = document.getElementsByClassName("opbuttons")[0];

var start = function () {
  generate();
  line10.className += "active-row"
  line10.firstElementChild.className += " active";
  document.getElementById('checkButton').disabled = false;
  document.getElementById('start-button').disabled = true;
  document.getElementById('red').disabled = false;
  document.getElementById('blue').disabled = false;
  document.getElementById('green').disabled = false;
  document.getElementById('yellow').disabled = false;
  document.getElementById('pink').disabled = false;
  document.getElementById('bruin').disabled = false;
  startButton.innerHTML=""
  var buttonCover=document.createElement("td");
  var resetButton=document.createElement("button");
  resetButton.className = "clearButton"
  resetButton.id="clearButton"
  resetButton.onclick = allClear;
  resetButton.innerHTML="RESET"
  buttonCover.appendChild(resetButton);
  startButton.appendChild(buttonCover);
  document.getElementById('clearButton').disabled = false;
};

var generate = function () {
  for (let i = 0; i < 4; i++) {
    gekozen[i] = colors[Math.floor(Math.random() * 6)];
  }
  for (let i = 0; i < gekozen.length; i++) {
    gekozenChck.push(gekozen[i]);
  }
}

var toevoegen = function (kleur) {
  if (kies.length < 4) {
    document.querySelector(".active").className += " " + kleur;
    kies.push(kleur);
    if (document.querySelector(".active").nextElementSibling) {
      document.querySelector(".active").nextElementSibling.classList += " active"
    }
    document.querySelector(".active").classList.remove("active");
  }
}

var checkBlack = function () {
  for (let i = 0; i < kies.length; i++) {
    if (kies[i] == gekozen[i]) {
      blackRond++;
    }
  }
}

var checkWit = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        geleRond++
        gekozenChck[j] = "matched"
        break;
      }
    }
  }
}

var toont = function () {
  let rondjes = document.getElementById(`rondjes${poningen}`);
  for (let i = 0; i < blackRond; i++) {
    rondjes.getElementsByClassName('rond')[i].className += " black"
  }
  for (let j = blackRond; j < geleRond; j++) {
    rondjes.getElementsByClassName('rond')[j].className += " white"
  }
}

var checkAll = function () {
  if (kies.length == 4) {
    checkBlack();
    checkWit(kies, gekozenChck);
    witteRond = geleRond - blackRond;
    toont();
    if (blackRond == 4) {
      document.getElementById('resultaat').innerHTML = "U HEBT GEWONNEN "
      for(let i=0; i<gekozen.length; i++){
        guessRow.getElementsByClassName('circle')[i].innerHTML="";
        guessRow.getElementsByClassName('circle')[i].className+=` ${gekozen[i]}`;
        }
    } else if (blackRond != 4) {
      kies = [];
      gekozenChck = [];
      document.getElementById(`line${poningen}`).classList.remove("active-row");
      poningen--
      if (poningen == 0) {
        document.getElementById('resultaat').innerHTML = "SPEL IS OVER";
        document.getElementById('checkButton').disabled = true;
        document.getElementById('red').disabled = true;
        document.getElementById('blue').disabled = true;
        document.getElementById('green').disabled = true;
        document.getElementById('yellow').disabled = true;
        document.getElementById('pink').disabled = false;
        document.getElementById('bruin').disabled = false;
        for(let i=0; i<gekozen.length; i++){
        guessRow.getElementsByClassName('circle')[i].innerHTML="";
        guessRow.getElementsByClassName('circle')[i].className+=` ${gekozen[i]}`;
        }
      }else if(poningen!=0){
        document.getElementById(`line${poningen}`).className += " active-row"
        document.getElementsByClassName("active-row")[0].firstElementChild.className += " active";
       }
      for (let i = 0; i < gekozen.length; i++) {
        gekozenChck.push(gekozen[i]);
      }
    }
    blackRond = 0
    witteRond = 0
    geleRond = 0
  }
}

var allClear= function(){

  for(var i=0; i<allReds.length;){
    allReds[i].classList.remove("red");
  }
  for(var i=0; i<allBlues.length;){
    allBlues[i].classList.remove("blue");
  }
  for(var i=0; i<allYellows.length;){
    allYellows[i].classList.remove("yellow");
  }
  for(var i=0; i<allGreens.length;){
    allGreens[i].classList.remove("green");
  }
  for(var i=0; i<allBlacks.length;){
    allBlacks[i].classList.remove("black");
  }
  for(var i=0; i<allWhites.length;){
    allWhites[i].classList.remove("white");
  }
  for(var i=0; i<allPinks.length;){
    allPinks[i].classList.remove("pink");
  }
  for(var i=0; i<allBruins.length;){
    allBruins[i].classList.remove("bruin");
  }
  poningen=10;
  gekozen=[];
  gekozenChck=[];
  kies=[];
  if(document.getElementsByClassName("active-row")[0]){
    document.getElementsByClassName("active-row")[0].classList.remove("active-row");
  };
  if(document.getElementsByClassName("active")[0]){
    document.getElementsByClassName("active")[0].classList.remove("active");
  };
  document.getElementById("resultaat").innerHTML="";
  // document.getElementById('start-button').disabled = false;
  document.getElementById('clearButton').disabled = true;
  for(let i=0; i<4; i++){
    guessRow.getElementsByClassName('circle')[i].innerHTML="";
    guessRow.getElementsByClassName('circle')[i].innerHTML="?";
  }
  startButton.innerHTML=""
  var buttonCover=document.createElement("td");
  var strButton=document.createElement("button");
  strButton.className = "start-button"
  strButton.id="start-button"
  strButton.onclick = start;
  strButton.innerHTML="START"
  buttonCover.appendChild(strButton);
  startButton.appendChild(buttonCover);
  document.getElementById('start-button').disabled = false;
  document.getElementById('red').disabled = true;
  document.getElementById('blue').disabled = true;
  document.getElementById('green').disabled = true;
  document.getElementById('yellow').disabled = true;
  document.getElementById('pink').disabled = true;
  document.getElementById('bruin').disabled = true;
}

var verwijder = function() {
   if(document.querySelector(".active")){
     if(document.querySelector(".active").previousElementSibling){
      document.querySelector(".active").previousElementSibling.className ="circle";
      document.querySelector(".active").previousElementSibling.classList += " active"
      document.getElementsByClassName("active")[1].classList.remove("active");
    }
   }else{
    document.querySelector(".active-row").lastElementChild.className="circle";
    document.querySelector(".active-row").lastElementChild.classList += " active"
   }
   kies.pop()
}

















