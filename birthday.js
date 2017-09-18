
    var i;
    var audio = new Audio('audio/HappyBirthdaySong.mp3');
    var arr = [
        {
            "url" : "videos/SampleVideo1.mp4"
        },
       {
            "url" : "videos/SampleVideo2.mp4"
       }
       ,
       {
            "url" : "videos/SampleVideo3.mp4"
       }
    ];

    function open_curtain() {
        $("#curtain1").animate({width:20},1000);
        $("#curtain2").animate({width:20},1000);
        $('.clickBtn').fadeOut( 600 );
        audio.play();

    }

    // function loadVideo() {
    //     for(i=0; i<arr.length; i++) {
    //         if(i == 0) {
    //             var video = $('<video />', {
    //             id: i,
    //             src: arr[i].url,
    //             type: 'video/mp4',
    //             controls: false
    //         });   
    //             video.appendTo($('.mainVideo'));
    //             video[0].autoplay = true;
    //             video[0].load();
    //             video[0].className = "video"+i;
    //         }
    //         else
    //         doSetTimeout(i);
    //     }

    //     function doSetTimeout(i) {
    //         setTimeout(function() {
    //             debugger 
    //         var video = $('<video />', {
    //             id: i,
    //             src: arr[i].url,
    //             type: 'video/mp4',
    //             controls: false
    //         });   
    //             video.appendTo($('.mainVideo'));
    //             video[0].autoplay = true;
    //             video[0].load();
    //             video[0].className = "video"+i;
    //          }, 5000);
    //     }
    // }

function openModal(){
    audio.pause();
    audio.currentTime = 0;
    debugger
    var vid = document.getElementById("myVideo");
    vid.play();
}