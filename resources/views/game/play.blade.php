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

        <div class="counthdown-start">
            <p id="counthdown"></p>
        </div>

        <div class="game-board">
            
            <div class="timer">
                <span>Timer</span>
                <p id="timer-display">00:00</p>
            </div>
            <div class="score-count">
                <span>Score</span>
                <p id="score-display">0</p>
            </div>
        </div>

        <canvas id="game-scenario"></canvas>
        
        {{-- 
        <audio id="audio" autoplay>
            <source src="{{asset('audio/audio_bg-music.mp3')}}" type="audio/mpeg">
        </audio>
        --}}

        <div class="user-input">
            <input type="text" name="letter" id="letter" placeholder="Type first letter only">
            <button type="submit" id="checkBtn"><span>Check</span></button>
            
        </div>

        <div class="user-interaction">
            <button class="btn btn-danger">
                <a style="color: white; text-decoration:none;" href="{{route('welcome')}}">Exit</a>
            </button>

            <button class="btn btn-primary">
                <a style="color: white; text-decoration:none; padding:20px;">Play Again</a>
            </button>
        </div>

        <div class="game-over">
            <p id="game-over"></p>
        </div>


        <div class="results" id="result-container" style="display: none;">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Score</th>
                    <th scope="col">Images Guessed</th>
                    <th scope="col">Wrong Tries</th>
                    <th scope="col">Bonus</th>
                    <th scope="col">Final Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id="normal-score-display">1</td>
                    <td id="total-image-guessed">1</td>
                    <td id="wrong-tries">1</td>
                    <td id="bonus">1</td>
                    <td id="final-score">1</td>
                  </tr>
                </tbody>
              </table>
        </div>

    
    <!-- JS -->
    <script src="{{asset('js/game.js')}}"></script>
    </body>
</html>
