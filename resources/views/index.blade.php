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
            <div class="game card border-0">
                <!--<img src="..." class="card-img-top" alt="...">-->
                <div class="card-body">
                  <h5 class="card-title text-center">Welcome to the <strong>Guess image game</strong>!</h5>
                  <p class="card-text">The game goal is to score as many points as possible by typing the right first letter of the images appearing on the screen. 
                    In the game area different images will appear from the left side of the screen and move to the right side. The images are <strong>“destroyed”</strong> only when the user types the first letter of an image's name. The points scored are a function of the velocity of the moving images, the number of wrong tries and how far the image was to the right position when the users typed the right letter. A fast-moving image destroyed very close to the left edge of the screen with a single key-press gets the User the most points. The more time the User plays the more images on the screen and the faster they will move. The game is over if an image goes all the way through the screen and touches the right side.</p>
                    <div class="buttons d-flex">
                        <div>
                            <a href="{{route("play")}}"><button type="button" class="btn btn-success">Start</button></a>
                        </div>
                        <div>
                            <a href="{{route("score")}}"><button type="button" class="btn btn-primary">Score</button></a>
                        </div>
                    </div>
                </div>
              </div>           
    </body>
</html>
