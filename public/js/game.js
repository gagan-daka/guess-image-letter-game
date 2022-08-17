var image_x_position = 0;
var canvas = document.getElementById("game-scenario");
var context;

var checkLetterBtn = document.getElementById("checkBtn");
var timerDisplay = document.getElementById("timer-display");
let letterInput = document.getElementById("letter");

//IMAGE
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
var bonus;
var scoreDisplay = document.getElementById("score-display");
var gameOverDisplay = document.getElementById("game-over");

//RESULT DISPLAY
let resultContainer = document.getElementById("result-container");
var resultNormalScore = document.getElementById("normal-score-display");
var resultImageGuessed = document.getElementById("total-image-guessed");
var resultWrongTrie = document.getElementById("wrong-tries");
var resultBonus = document.getElementById("bonus");
var resultFinalScore = document.getElementById("final-score");

//MUSIC
var audio = document.getElementById("audio");

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
            letterInput.value = ''
            changeImage();
        }else{
            numberOfWrongTries++
        }
    });
}


function start()
{
    //resultContainer.style.display = "none";
    context = canvas.getContext("2d");
    drawGameArea();
    /*playMusic();*/
    startGameCounthdown();
}


function startGameCounthdown()
{
    var timeleft = 3;
    var downloadTimer = setInterval(function(){
    let counthdown = document.getElementById("counthdown");
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        counthdown.remove();
        timer();
        insertImageOnCanvas();
    }
    counthdown.innerHTML = timeleft;
    timeleft -= 1;
    }, 1000);
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
});

function drawGameArea()
{
    canvas.width = window.innerWidth - 4;
    canvas.height = canvasHeight;    
}

function insertImageOnCanvas()
{
    image = new Image();
    image.src = 'img/'+allImages[Math.floor(Math.random() * allImages.length)];
    image.onload = function(){
        imageMovement();
    }
    
}

function imageMovement()
{
    var image_width = 450;
    var image_height = 250;

    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(image, image_x_position, 15, image_width, image_height);
    console.log(image_x_position);
    incrementVelocityOfImage(totalImagesGuessed);
}

function changeImage()
{
    image_x_position = 0;
    image = new Image();
    image.src = 'img/'+allImages[Math.floor(Math.random() * allImages.length)];
    image.onload = function(){
        imageMovement();
    }
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
    }else if(image_x_position > 1200 && image_x_position < 1550){
        points = 50;
        finalScore += points;
    }else if(image_x_position >= 1550){
        imageSpeed = 1;
        image_x_position = image_x_position + 50;
        gameOver();
    }

    return finalScore;

}

function gameOver()
{
    canvas.style.opacity = "0";
    canvas.style.transition = "opacity 2s";
    clearInterval(imageInterlval);
    clearInterval(timeInterval); 
    gameOverDisplay.innerHTML = "Game Over!"
    resultsDisplay();
}

function resultsDisplay()
{
    resultNormalScore.innerHTML = finalScore
    resultImageGuessed.innerHTML = totalImagesGuessed
    resultWrongTrie.innerHTML = numberOfWrongTries

    if(totalImagesGuessed >= 0 && totalImagesGuessed < 10) {
        bonus = 1000
    }else if(totalImagesGuessed >= 10 && totalImagesGuessed < 15){
        bonus = 2000
    }else if(totalImagesGuessed >= 15) {
        bonus = 3000
    }

    //wrong tries
    if(numberOfWrongTries >= 0 && numberOfWrongTries < 10) {
        bonus = 500
    }else if(numberOfWrongTries >= 10 && numberOfWrongTries < 15) {
        bonus = 750
    }else if(numberOfWrongTries >= 15) {
        bonus = 900
    }

    resultBonus.innerHTML = bonus;

    resultFinalScore.innerHTML = finalScore + bonus;

    resultContainer.style.display = "inline";
}

function playMusic()
{
    audio.play();
}