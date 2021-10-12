let video = document.getElementById("video");
let play = document.getElementById("play");
let refresh = document.getElementById("Refresh");
let audio = document.getElementById("audio");

num = 0;
play.addEventListener("click",()=>{
    if(num == 0){
    play.value = "pause";
    video.play();
     num = 1;
    }else if(num == 1){
        play.value = "play";
        video.pause();
        num = 0;
    }

});


refresh.addEventListener("click",function(){
    refresh = location.reload();
})


