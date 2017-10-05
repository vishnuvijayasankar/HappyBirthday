
    var i;
    document.addEventListener('contextmenu', event => event.preventDefault());
    $(document).keydown(function(e){
        e.preventDefault();
    });
    var audio = new Audio('audio/FinalSong.mp3');

    function open_curtain() {
        $("#curtain1").animate({width:20},1000);
        $("#curtain2").animate({width:20},1000);
        $('.clickBtn').fadeOut( 600 );
        audio.play();
        setTimeout(function(){ 
            $(".gift").fadeIn(3000);
        }, 6000);
    }

function openModal(){
    audio.pause();
    audio.currentTime = 0;
    var vid = document.getElementById("myVideo");
    vid.play();
}

function closeModal(){
    var vid = document.getElementById("myVideo");
    vid.pause();
    vid.currentTime = 0;
}