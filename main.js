/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/
resetArray();
resetImages();
resetText();

/*******************
 * EVENT LISTENERS *
 *******************/

let dice = document.querySelector('#d6-roll');
dice.addEventListener('click', function(){
    rollSixDice();
    let num = mean(sixes);
    updateSixMean(num);
    let num1 = median(sixes);
    updateSixMedian(num1);
    let num2 = mode(sixes);
    updateSixMode(num2);
});

let dice1 = document.querySelector('main');
dice1.addEventListener('click', function(){
   rollDoubleSixDice();
   let num = mean(doubleSixes);
   updateDoubleSixMean(num);
   let num1 = median(doubleSixes);
   updateDoubleSixMedian(num1);
   let num2 = mode(doubleSixes);
   updateDoubleSixMode(num2);
});

let dice2 = document.querySelector('#d12-roll');
dice2.addEventListener('click', function(){
    rollTwelveDice();
    let num = mean(twelves);
    updateTwelveMean(num);
    let num1 = median(twelves);
    updateTwelveMedian(num1);
    let num2 = mode(twelves);
    updateTwelveMode(num2);
});

let dice3 = document.querySelector('#d20-roll');
dice3.addEventListener('click', function(){
    rollTwentyDice();
    let num = mean(twenties);
    updateTwentyMean(num);
    let num1 = median(twenties);
    updateTwentyMedian(num1);
    let num2 = mode(twenties);
    updateTwentyMode(num2);
});

let reset = document.querySelector('#reset-button');
reset.addEventListener('click', function(){
    resetArray();
    resetImages();
    resetText();
});

/******************
 * RESET FUNCTION *
 ******************/

function resetArray(){
    sixes.length = 0;
    doubleSixes.length = 0;
    twelves.length = 0;
    twenties.length = 0;
}

function resetImages(){
    let dice = document.querySelector('#d6-roll');
    dice.src = 'images/start/d6.png';
    let dice1 = document.querySelector('#double-d6-roll-1');
    let dice2 = document.querySelector('#double-d6-roll-2');
    dice1.src = 'images/start/d6.png';
    dice2.src = 'images/start/d6.png';
    let dice3 = document.querySelector('#d12-roll');
    dice3.src = 'images/start/d12.jpeg';
    let dice4 = document.querySelector('#d20-roll');
    dice4.src = 'images/start/d20.jpg';
}

function resetText(){
    let diceText1 = document.querySelector('#d6-rolls-mean');
    diceText1.innerText = 'NA';
    let diceText2 = document.querySelector('#double-d6-rolls-mean');
    diceText2.innerText = 'NA';
    let diceText3 = document.querySelector('#d12-rolls-mean');
    diceText3.innerText = 'NA';
    let diceText4 = document.querySelector('#d20-rolls-mean');
    diceText4.innerText = 'NA';
    let diceTextMedian1 = document.querySelector('#d6-rolls-median');
    diceTextMedian1.innerText = 'NA';
    let diceTextMode1 = document.querySelector('#d6-rolls-mode');
    diceTextMode1.innerText = 'NA';
    let diceTextMedian2 = document.querySelector('#double-d6-rolls-median');
    diceTextMedian2.innerText = 'NA';
    let diceTextMode2 = document.querySelector('#double-d6-rolls-mode');
    diceTextMode2.innerText = 'NA';
    let diceTextMedian3 = document.querySelector('#d12-rolls-median');
    diceTextMedian3.innerText = 'NA';
    let diceTextMode3 = document.querySelector('#d12-rolls-mode');
    diceTextMode3.innerText = 'NA';
    let diceTextMedian4 = document.querySelector('#d20-rolls-median');
    diceTextMedian4.innerText = 'NA';
    let diceTextMode4 = document.querySelector('#d20-rolls-mode');
    diceTextMode4.innerText = 'NA';
}



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function rollSixDice(){
    let num = getRandomNumber(6);
    dice.src = 'images/d6/' + num + '.png';
    sixes.push(num);
}

function rollDoubleSixDice(){
    let dice1 = document.querySelector('#double-d6-roll-1');
    let dice2 = document.querySelector('#double-d6-roll-2');
    let num1 = getRandomNumber(6);
    dice1.src = 'images/d6/' + num1 + '.png';
    let num2 = getRandomNumber(6);
    dice2.src = 'images/d6/' + num2 + '.png';
    doubleSixes.push(num1);
    doubleSixes.push(num2);
}

function rollTwelveDice(){
    let num = getRandomNumber(12);
    dice2.src = 'images/numbers/' + num + '.png';
    twelves.push(num);
}

function rollTwentyDice(){
    let num = getRandomNumber(20);
    dice3.src = 'images/numbers/' + num + '.png';
    twenties.push(num);
}

function updateSixMean(num){
    let diceText = document.querySelector('#d6-rolls-mean');
    diceText.innerText = (num).toFixed(0);
}

function updateDoubleSixMean(num){
    let diceText = document.querySelector('#double-d6-rolls-mean');
    diceText.innerText = (num).toFixed(0);
}

function updateTwelveMean(num){
    let diceText = document.querySelector('#d12-rolls-mean');
    diceText.innerText = (num).toFixed(0);
}

function updateTwentyMean(num){
    let diceText = document.querySelector('#d20-rolls-mean');
    diceText.innerText = (num).toFixed(0);
}

function updateSixMedian(num){
    let diceText = document.querySelector('#d6-rolls-median');
    diceText.innerText = num;
}

function updateDoubleSixMedian(num){
    let diceText = document.querySelector('#double-d6-rolls-median');
    diceText.innerText = num;
}

function updateTwelveMedian(num){
    let diceText = document.querySelector('#d12-rolls-median');
    diceText.innerText = num;
}

function updateTwentyMedian(num){
    let diceText = document.querySelector('#d20-rolls-median');
    diceText.innerText = num;
}

function updateSixMode(num){
    let diceText = document.querySelector('#d6-rolls-mode');
    diceText.innerText = num;
}

function updateDoubleSixMode(num){
    let diceText = document.querySelector('#double-d6-rolls-mode');
    diceText.innerText = num;
}

function updateTwelveMode(num){
    let diceText = document.querySelector('#d12-rolls-mode');
    diceText.innerText = num;
}

function updateTwentyMode(num){
    let diceText = document.querySelector('#d20-rolls-mode');
    diceText.innerText = num;
}

/****************
 * MATH SECTION *
 ****************/

function mean(arr){
    let sum = 0;
    for(let i of arr){
        sum += i;
    }
    return sum/arr.length;
}

function median(arr){
    arr.sort(function(a, b){
        return a - b;
    })
    if(arr.length % 2 === 1){
        return arr[Math.floor(arr.length/2)];
    }else{
        let num1 = arr[Math.floor((arr.length - 1)/2)]
        let num2 = arr[Math.floor(arr.length/2)];
        let ave = (num1 + num2)/2;
        return ave;
    }
}

function mode(arr){
    let temp = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    for(let i = 0; i < arr.length; i++){
        let index = arr[i];
        temp[index]++;
    }
    let max = 0;
    for(let i of temp){
        if(max < i){
            max = i;
        }
    }
    return temp.indexOf(max);
}