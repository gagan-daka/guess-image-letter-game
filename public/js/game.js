var x = 0;
var canvas;
var context;

var checkLetterBtn = document.getElementById("checkBtn");

function start()
{
    canvas = document.getElementById("game-scenario");
    context = canvas.getContext("2d");
    
    drawImageFrame();
}

window.addEventListener("load", start, false)

function drawImageFrame()
{


    canvas.width = window.innerWidth;
    canvas.height = 200;
    context.fillStyle = "black";
    context.globalCompositeOperation = "destination-over";
    context.fillStyle = "#FFFFFF";
    context.fillRect(0,0,canvas.width,canvas.height);
    context.globalCompositeOperation = "source-over";
    context.lineWidth = 2;
    context.strokeStyle="#FF0000";
    context.strokeRect(0, 0, canvas.width, canvas.height);

    
}

if (checkLetterBtn) {
    checkLetterBtn.addEventListener('click', () => {
        //alert("HOLa")
    });
  }

