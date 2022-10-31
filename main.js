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

function getElementId(str){
    return document.querySelector('#' + str);
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
    rollDice(6, sixes, dice);
    updateMean(mean(sixes), getElementId('d6-rolls-mean'));
    updateMedian(median(sixes), getElementId('d6-rolls-median'));
    updateMode(mode(sixes), getElementId('d6-rolls-mode'));
});

let dice1 = document.querySelector('main');
dice1.addEventListener('click', function(){
    rollDice(6, doubleSixes, getElementId('double-d6-roll-1'));
    rollDice(6, doubleSixes, getElementId('double-d6-roll-2'));
    updateMean(mean(doubleSixes), getElementId('double-d6-rolls-mean'));
    updateMedian(median(doubleSixes), getElementId('double-d6-rolls-median'));
    updateMode(mode(doubleSixes), getElementId('double-d6-rolls-mode'));
});

let dice2 = document.querySelector('#d12-roll');
dice2.addEventListener('click', function(){
    rollDice(12, twelves, dice2);
    updateMean(mean(twelves), getElementId('d12-rolls-mean'));
    updateMedian(median(twelves), getElementId('d12-rolls-median'));
    updateMode(mode(twelves), getElementId('d12-rolls-mode'));
});

let dice3 = document.querySelector('#d20-roll');
dice3.addEventListener('click', function(){
    rollDice(20, twenties, dice3);
    updateMean(mean(twenties), getElementId('d20-rolls-mean'));
    updateMedian(median(twenties), getElementId('d20-rolls-median'));
    updateMode(mode(twenties), getElementId('d20-rolls-mode'));
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
    getElementId('d6-roll').src = 'images/start/d6.png';
    getElementId('double-d6-roll-1').src = 'images/start/d6.png';
    getElementId('double-d6-roll-2').src = 'images/start/d6.png';
    getElementId('d12-roll').src = 'images/start/d12.jpeg';
    getElementId('d20-roll').src = 'images/start/d20.jpg';
}

function resetText(){
    getElementId('d6-rolls-mean').innerText = 'NA';
    getElementId('double-d6-rolls-mean').innerText = 'NA';
    getElementId('d12-rolls-mean').innerText = 'NA';
    getElementId('d20-rolls-mean').innerText = 'NA';
    getElementId('d6-rolls-median').innerText = 'NA';
    getElementId('d6-rolls-mode').innerText = 'NA';
    getElementId('double-d6-rolls-median').innerText = 'NA';
    getElementId('double-d6-rolls-mode').innerText = 'NA';
    getElementId('d12-rolls-median').innerText = 'NA';
    getElementId('d12-rolls-mode').innerText = 'NA';
    getElementId('d20-rolls-median').innerText = 'NA';
    getElementId('d20-rolls-mode').innerText = 'NA';
}



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function rollDice(sides, arr, element){
    let num = getRandomNumber(sides);
    if(sides <= 6){
        element.src = 'images/d6/' + num + '.png';
    } else {
        element.src = 'images/numbers/' + num + '.png';
    }
    arr.push(num);
}

function updateMean(num, element){
    element.innerText = (num).toFixed(2);
}

function updateMedian(num, element){
    element.innerText = num;
}

function updateMode(num, element){
    element.innerText = num;
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
    if(max === 1){
        return 'NA';
    }
    return temp.indexOf(max);
}