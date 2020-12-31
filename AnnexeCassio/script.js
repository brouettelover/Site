$(document).ready(function(event) {
        $(".Box_starter").one('click',function(){
            display = $('.Box_starter');
            Timer_sec(3, display);
            //Remove the box image
            display.html("Ready ?");                  
            display.css('background-image','none');

    });

    function Timer_sec(duration, display) {
        var timer = duration, seconds;
        var x = setInterval(function () {
            seconds = parseInt(timer % 60);
            display.text(seconds);
            if (--timer < 0) {
                timer = duration;
            }
            if(seconds == 0){
                clearInterval(x);
                press_e();
            }
        }, 1000); // 1000 miliseconds
    }
    function press_e() {
        display.text("Press e");
        display.addClass("green");
        display.on('keypress',function(event){
            E_unicode = event.which; //which est l'unicode
            if(E_unicode === 101){
                display.text("wait");
                if( display.hasClass("colorized")  ){
                    display.removeClass("colorized"); 
                }else{
                    display.addClass("colorized");
                    display.removeClass("green");
                }
            }
        });
    }

});