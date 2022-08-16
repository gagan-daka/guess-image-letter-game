var image_x_position = 1;
var canvas = document.getElementById("game-scenario");
var context;

var checkLetterBtn = document.getElementById("checkBtn");
var timerDisplay = document.getElementById("timer-display");
let letterInput = document.getElementById("letter");
var imgFirstLetter;
var image;
var canvasHeight = 250;
var imageSpeed = 150;

var timeInterval;
var finalTime = 0;
var totalImagesGuessed = 0;
var numberOfWrongTries = 0;

var points = 0;
var finalScore = 0;
var scoreDisplay = document.getElementById("score-display");
var gameOverDisplay = document.getElementById("game-over");

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
        checkImageFirstLetter();
        if(letterInput.value == imgFirstLetter) {
            totalImagesGuessed++;
            score();
            scoreDisplay.innerHTML = finalScore;
        }
    });
}


function start()
{
    context = canvas.getContext("2d");
    drawGameArea();
    insertImageOnCanvas();
    timer();
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

window.addEventListener("load", function(event) {
    start();
    canvas.style.opacity = "1";
    canvas.style.transition = "opacity 1s";

});

function drawGameArea()
{
    canvas.width = window.innerWidth - 4;
    canvas.height = canvasHeight;    
}

function insertImageOnCanvas()
{
    image_width = window.innerWidth / 5;
    image_height = window.innerWidth / 8.5;

    image = new Image();
    image.src = 'img/'+allImages[Math.floor(Math.random() * allImages.length)];
    image.onload = function(){
        imageMovement();
    }
    
}

function imageMovement()
{
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(image, image_x_position, 15, image_width, image_height);
    console.log(image_x_position);
    incrementVelocityOfImage(totalImagesGuessed);
}

var imageInterlval = setInterval(imageMovement, imageSpeed); 

function checkImageFirstLetter()
{
    img = image.src;
    findImageNameStartPosition = img.lastIndexOf('/');
    findImageNameEndPosition = img.lastIndexOf('.');
    imgFullName = img.substring(findImageNameStartPosition + 1, findImageNameEndPosition)
    imgFirstLetter = imgFullName.substring(0,1)
    //alert(imgFirstLetter)
}

function incrementVelocityOfImage(imagesGuessed)
{
    if(imagesGuessed >= 0 && imagesGuessed < 5){
        imageSpeed = 150;
        image_x_position = image_x_position + 1;
        //console.log("Level 1: "+image_x_position);
    }else if(imagesGuessed >=5 && imagesGuessed < 10) {
        imageSpeed = 125;
        image_x_position = image_x_position + 10;
        //console.log("Level 2: "+image_x_position);
    }else if(imagesGuessed >= 10 && imagesGuessed < 15) {
        imageSpeed = 75;
        image_x_position = image_x_position + 15;
        //console.log("Level 3: "+image_x_position);
    }else if(imagesGuessed >= 15){
        imageSpeed = 1;
        image_x_position = image_x_position + 50;
        //console.log("Level 4: "+image_x_position);
    }
}

function score()
{
    let rightSideMax = 1600;

    if(image_x_position > 0 && image_x_position <= 400) {
        points = 200;
        finalScore += points;
    }else if(image_x_position > 0 && image_x_position <= 800 ) {
        points = 150;
        finalScore += points;
    }else if(image_x_position > 0 && image_x_position <= 1200 ) {
        points = 75;
        finalScore += points;
    }else if(image_x_position > 1200 && image_x_position < 1600){
        points = 50;
        finalScore += points;
    }else if(image_x_position >= 1600){
        gameOver();
    }

    return finalScore;

}

function gameOver()
{
    clearInterval(imageInterlval);
    clearInterval(timeInterval); 
    gameOverDisplay.innerHTML = "Game Over!"
}

//setInterval(imageMovement, imageSpeed); 