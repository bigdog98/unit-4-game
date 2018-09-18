var random_result;
var loss = 0;
var win = 0;
var previous = 0;

var resetAndStart = function (){

    $(".crystals").empty();

    var images = ['assets/images/Blue Crystal',
            'assets/images/Green Crystal',
            'assets/images/Purple Crystal',
            'assets/images/Red Crystal',
]


random_result= Math.floor(Math.random()* 101) + 19;
$("#result").html('Random Result: ' + random_result);


for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 12) + 1;
    console.log (random);

    var crystal = $("<$div>");
    crystal.attr ({
        "class": 'crystal',
        "data-random": random

    });

    crystal.css({
        "backgound-image":"url('" + images[i] + "')",
        "background-size":"cover"
    });

    $(".crystals").append(crystal);
}

}

resetAndStart();

$(document).on('click',".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total score: " + previous);

    console.log(previous);

    if(previous > random_result){

        lost++;

        $("#lost").html(lost);

        previous = 0;

        resetAndStart();
    }
    else if(previous === random_result){

        win++;

        $("#win").html(win);

        previous = 0;

        resetAndStart();
    }
});