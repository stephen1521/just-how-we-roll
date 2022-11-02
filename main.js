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

function getId(str){
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

let dice = getId('d6-roll');
dice.addEventListener('click', function(){
    sixes.push(rollDice(6, dice));
    updateMean(mean(sixes), getId('d6-rolls-mean'));
    updateMedian(median(sixes), getId('d6-rolls-median'));
    updateMode(mode(sixes), getId('d6-rolls-mode'));
});

let dice1 = document.querySelector('main');
dice1.addEventListener('click', function(){
    let roll1 = rollDice(6, getId('double-d6-roll-1'));
    let roll2 = rollDice(6, getId('double-d6-roll-2'));
    doubleSixes.push(roll1 + roll2);
    updateMean(mean(doubleSixes), getId('double-d6-rolls-mean'));
    updateMedian(median(doubleSixes), getId('double-d6-rolls-median'));
    updateMode(mode(doubleSixes), getId('double-d6-rolls-mode'));
});

let dice2 = getId('d12-roll');
dice2.addEventListener('click', function(){
    twelves.push(rollDice(12, dice2));
    updateMean(mean(twelves), getId('d12-rolls-mean'));
    updateMedian(median(twelves), getId('d12-rolls-median'));
    updateMode(mode(twelves), getId('d12-rolls-mode'));
});

let dice3 = getId('d20-roll');
dice3.addEventListener('click', function(){
    twenties.push(rollDice(20, twenties, dice3));
    updateMean(mean(twenties), getId('d20-rolls-mean'));
    updateMedian(median(twenties), getId('d20-rolls-median'));
    updateMode(mode(twenties), getId('d20-rolls-mode'));
});

let reset = getId('reset-button');
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
    getId('d6-roll').src = 'images/start/d6.png';
    getId('double-d6-roll-1').src = 'images/start/d6.png';
    getId('double-d6-roll-2').src = 'images/start/d6.png';
    getId('d12-roll').src = 'images/start/d12.jpeg';
    getId('d20-roll').src = 'images/start/d20.jpg';
}

function resetText(){
    getId('d6-rolls-mean').innerText = 'NA';
    getId('double-d6-rolls-mean').innerText = 'NA';
    getId('d12-rolls-mean').innerText = 'NA';
    getId('d20-rolls-mean').innerText = 'NA';
    getId('d6-rolls-median').innerText = 'NA';
    getId('double-d6-rolls-median').innerText = 'NA';
    getId('d12-rolls-median').innerText = 'NA';
    getId('d20-rolls-median').innerText = 'NA';
    getId('d20-rolls-mode').innerText = 'NA';
    getId('d6-rolls-mode').innerText = 'NA';
    getId('d12-rolls-mode').innerText = 'NA';
    getId('double-d6-rolls-mode').innerText = 'NA';
}



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/

function rollDice(sides, element){
    let num = getRandomNumber(sides);
    if(sides <= 6){
        element.src = 'images/d6/' + num + '.png';
    } else {
        element.src = 'images/numbers/' + num + '.png';
    }
    return num;
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
    return temp.indexOf(max);
}