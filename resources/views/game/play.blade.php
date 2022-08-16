<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
        <title>Game</title>
        <!-- CUSTOM CSS -->
        <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
    </head>

    <body>
        <div class="game-board">
            
            <div class="timer">
                <span>Timer</span>
                <p id="timer-display">00:00</p>
            </div>
            <div class="score-count">
                <span>Score</span>
                <p>200</p>
            </div>
        </div>
        <canvas id="game-scenario"></canvas>

        <div class="user-input">
            <input type="text" name="" id="" placeholder="Type first letter only">
            <button type="submit" id="checkBtn"><span>Check</span></button>
        </div>
    
    <!-- JS -->
    <script src="{{asset('js/game.js')}}"></script>
    </body>
</html>
