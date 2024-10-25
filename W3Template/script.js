var day = 5;
let countdown;

var audio = $('audio')[0];
var clicked = false;

$('button').on('click', function(){

    if(clicked == false){
        clicked = true;
        countdown = setInterval(function(){
            day--;
            console.log(day);
            $('.w3-large').text(day + " days left");
    
            if(day == 0){
                clearInterval(countdown);
                $('.bgimg').css({'background-image': 'url("images.jfif")'});
                $('.w3-jumbo').text("You got Bo'om Geared");
                $('p').remove();
                $('button').remove();
                $('.w3-border-grey').remove();
                audio.play();
            }
        }, 1000);
    }
})    




$("audio").on('ended', function(){
    window.location.replace("bottom.html");
})

    


    







