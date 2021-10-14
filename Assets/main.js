let video = document.getElementById("video");
let play = document.getElementById("play");
let refresh = document.getElementById("Refresh");
let audio = document.getElementById("audio");
let img = document.querySelector("img");

num = 0;
play.addEventListener("click",()=>{
    if(num == 0){
    img.src = "./Assets/images/pause.png";
    play.value = "pause";
    video.play();
     num = 1;
    }else if(num == 1){
        img.src = "./Assets/images/play3.png";
        play.value = "play";
        video.pause();
        num = 0;
    }

});


refresh.addEventListener("click",function(){
    refresh = location.reload();
})


