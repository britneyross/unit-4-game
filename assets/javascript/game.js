$(document).ready(function(){
    var randomNumber=Math.floor(Math.random() * (120-19+1)) + 19;

    $('#randomNumber').html(randomNumber);

    var blueGem= Math.floor(Math.random()*12)+1;
    var yellowGem= Math.floor(Math.random()*12)+1;
    var redGem= Math.floor(Math.random()*12)+1;
    var purpleGem= Math.floor(Math.random()*12)+1;

    var wins= 0;
    var losses= 0;
    var totalScore= 0;

    $('#wins').html(wins);
    $('#losses').html(losses);

    function reset(){
        randomNumber=Math.floor(Math.random() * (120-19+1)) + 19;
        console.log(randomNumber);
        $('#randomNumber').text(randomNumber);
        blueGem= Math.floor(Math.random()*12)+1;
        yellowGem= Math.floor(Math.random()*12)+1;
        redGem= Math.floor(Math.random()*12)+1;
        purpleGem= Math.floor(Math.random()*12)+1;
        totalScore= 0;
        $('#yourScore').html(totalScore);
    }

    function win(){
        alert("You win!");
        wins ++;
        $('#wins').html(wins);
        reset();
    }

    function lose(){
        alert("You lose! Try again!");
        losses ++;
        $('#losses').html(losses);
        reset();
    }

    $("#blueGem").on("click", function(){
        totalScore= totalScore + blueGem;
        $('#yourScore').html(totalScore);
        if(totalScore === randomNumber){
            win();
        }
        else if (totalScore > randomNumber){
            lose();
        }
    })

    $("#yellowGem").on("click", function(){
        totalScore= totalScore + yellowGem;
        $('#yourScore').html(totalScore);
        if(totalScore === randomNumber){
            win();
        }
        else if (totalScore > randomNumber){
            lose();
        }
    })

    $("#redGem").on("click", function(){
        totalScore= totalScore + redGem;
        $('#yourScore').html(totalScore);
        if(totalScore === randomNumber){
            win();
        }
        else if (totalScore > randomNumber){
            lose();
        }
    })

    $("#purpleGem").on("click", function(){
        totalScore= totalScore + purpleGem;
        $('#yourScore').html(totalScore);
        if(totalScore === randomNumber){
            win();
        }
        else if (totalScore > randomNumber){
            lose();
        }
    })

})
