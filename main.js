/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/



/*******************
 * EVENT LISTENERS *
 *******************/

//d6 =================================================================

const d6roll = document.querySelector('#d6-roll');

function rollD6() {

  let clickRoll = getRandomNumber(6);
  sixes.push(clickRoll);
  console.log(sixes);
  d6roll.src = "images/d6/" + clickRoll + ".png";
  const d6mean = document.querySelector("#d6-rolls-mean");
  d6mean.innerText = mean(sixes);
  const d6median = document.querySelector("#d6-rolls-median");
  d6median.innerText = median(sixes);
  


}

d6roll.addEventListener('click', rollD6);


// Double D12 ==================================================================

const double6rolla = document.querySelector('#double-d6-roll-1');
const double6rollb = document.querySelector('#double-d6-roll-2');

function rollDouble6() {

  let clickRolla = getRandomNumber(6);
  double6rolla.src = "images/d6/" + clickRolla + ".png";
  let clickRollb = getRandomNumber(6);
  double6rollb.src = "images/d6/" + clickRollb + ".png";
  const clickRollab = clickRolla + clickRollb;
  doubleSixes.push(clickRollab);
  console.log(doubleSixes);
  const dd6mean = document.querySelector("#double-d6-rolls-mean");
  dd6mean.innerText = mean(doubleSixes);
  const dd6median = document.querySelector("#double-d6-rolls-median");
  dd6median.innerText = median(doubleSixes);
  

}

double6rolla.addEventListener('click', rollDouble6);
double6rollb.addEventListener('click', rollDouble6);


//d12 =================================================================

const d12roll = document.querySelector('#d12-roll');

function rollD12() {

  let clickRoll = getRandomNumber(12);
  twelves.push(clickRoll);
  console.log(twelves);
  d12roll.src = "images/numbers/" + clickRoll + ".png";
  const d12mean = document.querySelector("#d12-rolls-mean");
  d12mean.innerText = mean(twelves);
  const d12median = document.querySelector("#d12-rolls-median");
  d12median.innerText = median(twelves);

}

d12roll.addEventListener('click', rollD12);


//d20 =================================================================

const d20roll = document.querySelector('#d20-roll');

function rollD20() {

  let clickRoll = getRandomNumber(20);
  twenties.push(clickRoll);
  console.log(twenties);
  d20roll.src = "images/numbers/" + clickRoll + ".png";
  const d20mean = document.querySelector("#d20-rolls-mean");
  d20mean.innerText = mean(twenties);
  const d20median = document.querySelector("#d20-rolls-median");
  d20median.innerText = median(twenties);

}

d20roll.addEventListener('click', rollD20);

/******************
 * RESET FUNCTION *
 ******************/

const reset = document.querySelector('#reset-button');

function resetRolls() {

  sixes.length = '0';
  doubleSixes.length = '0';
  twelves.length = '0';
  twenties.length = '0';
  d6roll.src = "images/start/d6.png";
  double6rolla.src = "images/start/d6.png";
  double6rollb.src = "images/start/d6.png";
  d12roll.src = "images/start/d12.jpeg";
  d20roll.src = "images/start/d20.jpg";

  //Mean Reset
  const d6mean = document.querySelector("#d6-rolls-mean");
  d6mean.innerText = "N/A"
  const dd6mean = document.querySelector("#double-d6-rolls-mean");
  dd6mean.innerText = "N/A"
  const d12mean = document.querySelector("#d12-rolls-mean");
  d12mean.innerText = "N/A"
  const d20mean = document.querySelector("#d20-rolls-mean");
  d20mean.innerText = "N/A"

  //Median Reset
  const d6median = document.querySelector("#d6-rolls-median");
  d6median.innerText = "N/A"
  const dd6median = document.querySelector("#double-d6-rolls-median");
  dd6median.innerText = "N/A"
  const d12median = document.querySelector("#d12-rolls-median");
  d12median.innerText = "N/A"
  const d20median = document.querySelector("#d20-rolls-median");
  d20median.innerText = "N/A"

  //Mode Reset
  const d6mode = document.querySelector("#d6-rolls-mode");
  d6mode.innerText = "N/A"
  const dd6mode = document.querySelector("#double-d6-rolls-mode");
  dd6mode.innerText = "N/A"
  const d12mode = document.querySelector("#d12-rolls-mode");
  d12mode.innerText = "N/A"
  const d20mode = document.querySelector("#d20-rolls-mode");
  d20median.innerText = "N/A"

}

reset.addEventListener('click', resetRolls);

document.addEventListener("DOMContentLoaded", resetRolls);


/****************
 * MATH SECTION *
 ****************/

//Mean function
function mean(arr) {

  sum = 0;
  const arrSum = arr.reduce((sum, element) => sum + element);
  const avg = arrSum / arr.length
  return avg.toFixed(2);

}

//Mean function
function median(arr) {

  const arrSort = sortByNumber(arr)

  console.log(arrSort);

  const medianOdd = arrSort[Math.round((arrSort.length - 1) / 2)];
  const medianL = arrSort[Math.round((arrSort.length - 1) / 2)];
  const medianR = arrSort[Math.floor((arrSort.length - 1) / 2)];
  const medianEven = (medianL + medianR) / 2;


  if (arr.length % 2 === 0) {

    output = medianEven;

  } if (arr.length % 2 === 1) {

    output = medianOdd;
  
  } 

  return output;

}