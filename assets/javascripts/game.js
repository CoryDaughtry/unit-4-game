
$(document).ready(function(){
var randomNum;
var totalScore = 0;
var wins =0;
var losses =0;

var Num1 = Math.floor(Math.random()*11+1);
var Num2 = Math.floor(Math.random()*11+1);
var Num3 = Math.floor(Math.random()*11+1);
var Num4 = Math.floor(Math.random()*11+1);

randomNum = Math.floor(Math.random()*101+19);
$('#random').html('').append('Random Number: '+ randomNum);
$('#wins').text(wins);
$('#losses').text(losses);

function reset(){
    randomNum = Math.floor(Math.random()*101+19);
    $('#random').html('').append('Random Number: '+ randomNum);
    totalScore = 0;
    $('#totalScore').text(totalScore);
    Num1 = Math.floor(Math.random()*11+1);
    Num2 = Math.floor(Math.random()*11+1);
    Num3 = Math.floor(Math.random()*11+1);
    Num4 = Math.floor(Math.random()*11+1);
}

function win(){
    alert('You win!');
    wins++;
    $('#wins').text(wins);
    reset();
}

function lose(){
    alert('You lose!');
    losses++;
    $('#losses').text(losses);
    reset();
}


$('#one').on('click',function(){
    totalScore = totalScore + Num1;
    $('#totalScore').text(totalScore);
    if(totalScore ===randomNum){
        win();
    }else if(totalScore > randomNum){
        lose();
    }
})
$('#two').on('click',function(){
    totalScore = totalScore + Num2;
    $('#totalScore').text(totalScore);
    if(totalScore ===randomNum){
        win();
    }else if(totalScore > randomNum){
        lose();
    }
})
$('#three').click(function(){
    totalScore = totalScore + Num3;
    $('#totalScore').text(totalScore);
    if(totalScore ===randomNum){
        win();
    }else if(totalScore > randomNum){
        lose();
    }
})
$('#four').click(function(){
    totalScore = totalScore + Num4;
    $('#totalScore').text(totalScore);
    if(totalScore ===randomNum){
        win();
    }else if(totalScore > randomNum){
        lose();
    }
})

})
