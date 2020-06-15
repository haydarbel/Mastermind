const colors = { 0: "red", 1: "blue", 2: "green", 3: "yellow" };

let gekozen = [];

var gekozenChck = [];

let kies = [];

let actifeLine = document.getElementsByClassName('active-row');

var signal = document.getElementById('allRondjes');

let guessRow=document.getElementById('guess-row');

var scores=document.getElementById("scores");

var bord=document.getElementById("bord");

var witteRond=0;

var blackRond = 0;

var geleRond = 0;

var poningen = 8;

var line8 = document.getElementById("line8");

var start = function () {
  generate();
  line8.className += "active-row"
  line8.firstElementChild.className += " active";
  document.getElementById('checkButton').disabled = false;
  document.getElementById('clearButton').disabled = false;
  document.getElementById('start-button').disabled = true;
  document.getElementById('red').disabled = false;
  document.getElementById('blue').disabled = false;
  document.getElementById('green').disabled = false;
  document.getElementById('yellow').disabled = false;

};

var generate = function () {
  for (let i = 0; i < 4; i++) {
    gekozen[i] = colors[Math.floor(Math.random() * 4)];
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
  var allReds=document.getElementsByClassName("red");
  var allBlues=document.getElementsByClassName('blue');
  var allYellows=document.getElementsByClassName('yellow');
  var allGreens=document.getElementsByClassName('green');
  var allBlacks=document.getElementsByClassName('black');
  var allWhites=document.getElementsByClassName('white');
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
  poningen=8;
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
  document.getElementById('start-button').disabled = false;
  document.getElementById('clearButton').disabled = true;
  for(let i=0; i<4; i++){
    guessRow.getElementsByClassName('circle')[i].innerHTML="";
    guessRow.getElementsByClassName('circle')[i].innerHTML="?";
  }
}




















