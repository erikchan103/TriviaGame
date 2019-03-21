var timer = 60;
correct=0;
incorrect=0;
unanswered=8;
var intervalId;
var clockRunning = false;

function countdown() {
    timer--;
    $("#timer").text("Time remaining: " + timer);
    if (timer === 0) {
        $('#content').hide();
        $("#results").show();
        clearInterval(intervalId);
        clockRunning=false;
        if(q1a1.checked){
            correct++;
        }
        if(q2a3.checked){
            correct++;
        }
        if(q3a3.checked){
            correct++;
        }
        if(q4a2.checked){
            correct++;
        }
        if(q5a1.checked){
            correct++;
        }
        if(q6a4.checked){
            correct++;
        }
        if(q7a3.checked){
            correct++;
        }
        if(q8a1.checked){
            correct++;
        }
        if(q1a2.checked||q1a3.checked||q1a4.checked){
            incorrect++;
        }
        if(q2a1.checked||q2a2.checked||q2a4.checked){
            incorrect++;
        }
        if(q3a1.checked||q3a2.checked||q3a4.checked){
            incorrect++;
        }
        if(q4a1.checked||q4a3.checked||q4a4.checked){
            incorrect++;
        }
        if(q5a2.checked||q5a3.checked||q5a4.checked){
            incorrect++;
        }
        if(q6a1.checked||q6a2.checked||q6a3.checked){
            incorrect++;
        }
        if(q7a1.checked||q7a2.checked||q7a4.checked){
            incorrect++;
        }
        if(q8a2.checked||q8a3.checked||q8a4.checked){
            incorrect++;
        }
        unanswered=unanswered-correct-incorrect;
        $("#correct").text("Correct: "+correct);
        $("#incorrect").text("Incorrect: "+incorrect);
        $("#unanswered").text("Unanswered: "+unanswered);
        $("#count").text("You're out of time.");
    }
};

$("#start").click(function () {
    $("#loading").hide();
    $("#content").show();
    $("#timer").text("Time remaining: " + timer);
    if (!clockRunning) {
        intervalId = setInterval(countdown, 1000);
        clockRunning = true;
    }
});

$("#submit").click(function () {
    $('#content').hide();
    $("#results").show();
    clearInterval(intervalId);
    clockRunning = false;
    if(q1a1.checked){
        correct++;
    }
    if(q2a3.checked){
        correct++;
    }
    if(q3a3.checked){
        correct++;
    }
    if(q4a2.checked){
        correct++;
    }
    if(q5a1.checked){
        correct++;
    }
    if(q6a4.checked){
        correct++;
    }
    if(q7a3.checked){
        correct++;
    }
    if(q8a1.checked){
        correct++;
    }
    if(q1a2.checked||q1a3.checked||q1a4.checked){
        incorrect++;
    }
    if(q2a1.checked||q2a2.checked||q2a4.checked){
        incorrect++;
    }
    if(q3a1.checked||q3a2.checked||q3a4.checked){
        incorrect++;
    }
    if(q4a1.checked||q4a3.checked||q4a4.checked){
        incorrect++;
    }
    if(q5a2.checked||q5a3.checked||q5a4.checked){
        incorrect++;
    }
    if(q6a1.checked||q6a2.checked||q6a3.checked){
        incorrect++;
    }
    if(q7a1.checked||q7a2.checked||q7a4.checked){
        incorrect++;
    }
    if(q8a2.checked||q8a3.checked||q8a4.checked){
        incorrect++;
    }
    unanswered=unanswered-correct-incorrect;
    $("#correct").text("Correct: "+correct);
    $("#incorrect").text("Incorrect: "+incorrect);
    $("#unanswered").text("Unanswered: "+unanswered);
    $("#count").text("Time remaining: "+timer);
});