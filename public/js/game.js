var image_x_position = 0;
var canvas;
var context;

var checkLetterBtn = document.getElementById("checkBtn");
var timerDisplay = document.getElementById("timer-display");
var image;
var canvasHeight = 250;

var timeInterval;
var finalTime = 0;
var gamePause = false;

var allImages = [
    "a18.jpg",
    "bulma.jpg",
    "cat.jpg",
    "cell.jpg",
    "chichi.jpg",
    "ciri.jpg",
    "dog.jpg",
    "dua-lipa.jpg",
    "ferrari.jpg",
    "gerald.jpg",
    "gohan.jpg",
    "goku.jpeg",
    "lamborghini.jpg",
    "mustang.jpg",
    "turtle-ninja.jpg",
    "vegeta.jpg",
    "weeknd.jpg",
    "yennefer.jpg",
];


if (checkLetterBtn) {
    checkLetterBtn.addEventListener('click', () => {
        //alert("HOLa")
    });
}

function timer()
{
    let seconds = 00;

    timeInterval = setInterval(function() {
        seconds++
        let minutes = Math.floor((seconds / 60) % 60);
        let finalSeconds = seconds % 60;
        if(finalSeconds < 10) {
            finalSeconds = "0"+finalSeconds
        }
        finalTime = minutes+":"+finalSeconds;
        timerDisplay.innerHTML = finalTime
    }, 1000)

}

function start()
{
    insertImageOnCanvas();
    canvas = document.getElementById("game-scenario");
    context = canvas.getContext("2d");
    drawGameArea();
    timer();
}

window.addEventListener("load", start, false)

function drawGameArea()
{
    canvas.width = window.innerWidth;
    canvas.height = canvasHeight;    
}

function insertImageOnCanvas()
{
    image_width = window.innerWidth / 5;
    image_height = window.innerWidth / 8.5;

    image = new Image();
    image.src = 'img/'+allImages[Math.floor(Math.random() * allImages.length)];
    image.onload = function(){
        context.drawImage(image, -360, 15, image_width, image_height);
    }
}

