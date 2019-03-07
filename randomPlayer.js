//GENERA UN NUMERO RANDOM COMPRESO TRA MIN E MAX
function getRandom (min, max){
  var rnd = Math.floor(Math.random()*(max - min + 1)) + min;
  return rnd;
}

//UTILIZZANDO LA GET_RANDOM GENERA UN NUMERO ASCII CASUALE, POI CONVERTITO IN CARATTERE
function getRandomChar () {
  var rndNum = getRandom(65,90);
  var rndChar = String.fromCharCode (rndNum);
  return rndChar;
}

//UTILIZZANDO LA GET_RANDOM_CHAR GENERA UN ID CASUALE COMPOSTO DA 3 CARATTERI ALFABETICI E 3 NUMERICI
function getRandomId () {
  var rndChars = "";
  var rndNums = "";
  for (var i = 0; i < 3 ; i++) {
    rndChars += getRandomChar();
    rndNums += getRandom(0,9);
  }
  var rndId = rndChars + rndNums;
  return rndId;
}

//UTILIZZANDO LA GET_RANDOM_ID e LA GET_RANDOM GENERA UN PLAYER CASUALE
function getRandomPlayer () {
  var twoCorrect = getRandom (0,100);
  var twoWrong = 100 - twoCorrect;
  var threeCorrect = getRandom (0,100);
  var threeWrong = 100 - threeCorrect;
  var player = {
    "id": getRandomId(),
    "points": getRandom(0,70),
    "bounces": getRandom(0,100),
    "fouls": getRandom(0,30),
    "two perc correct": twoCorrect,
    "two perc wrong": twoWrong,
    "three perc correct": threeCorrect,
    "three perc wrong": threeWrong
  }
  // console.log(player);
  return player;
}

//FUNZIONE PER CONFRONTARE ELEMENTI
function isPresent (player,players) {
  var finded = false;
  for (var i = 0; i < players.length; i++) {
    if (player.id == players[i].id) {
      finded = true;
    }
  }
}

// FUNZIONE PER ORDINARE GLI OGGETTI ALL'INTERNO DELL'ARRAY IN BASE ALL'ID
function getThingsOrdered(a, b){
  var x = a.id.toLowerCase();
  var y = b.id.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
}

//UTILIZZANDO LA GET_RANDOM_PLAYER GENERO N PLAYER CASUALI
function getRandomPlayers () {
  var players = [];
  var rndNumOfPlayers = getRandom (20,1000)
  // for (var i = 0; i < rndNumOfPlayers; i++) {
  //   var rndPlayer = getRandomPlayer();
  //   players.push(rndPlayer);
  // }
  while (players.length<rndNumOfPlayers) {
    var rndPlayer = getRandomPlayer();
    if (!isPresent(rndPlayer,players)) {
        players.push(rndPlayer);
    }
  }
  players.sort(getThingsOrdered);
  console.log(players);
  return players;
}
























function init() {
// console.log(getRandomChar ());
// console.log("random id: " + getRandomId());
// getRandomPlayer();
getRandomPlayers();


}

$(document).ready(init);
