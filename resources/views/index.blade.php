<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <!--JQUERY-->
        <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!---JS--->
        <script src="{{asset('js/game.js')}}"></script>
        <title>Game</title>
        <!-- CUSTOM CSS -->
        <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
    </head>

    <body>
        <div class="game card border-0">
            <!--<img src="..." class="card-img-top" alt="...">-->
            <div class="card-body">
                <h5 class="card-title text-center">Welcome to the <strong>Guess image game</strong>!</h5>
                <p class="card-text"><strong>Game Description:</strong><br> Different images will appear from the left side of the screen and move to the right side. The images are <strong>“destroyed”</strong> only when the user types the first letter of an image's name. The points scored are a function of the velocity of the moving images, the number of wrong tries and how far the image was to the right position when the users typed the right letter. A fast-moving image destroyed very close to the left edge of the screen with a single key-press gets the User the most points. The more time the User plays the more images on the screen and the faster they will move. The game is over if an image goes all the way through the screen and touches the right side.<br><br><strong>First of all, please enter a name or nickname for save score punctuation record in our database</strong></p>
                <div class="user">
                    <span id="notification"></span>
                    <label for="name">Name or nickname</label>
                    <input type="text" id="name" name="name" placeholder="Gerald" required>
                </div>
                <div class="buttons d-flex">
                    <div>
                        <a id="play-btn"><button type="button" class="btn btn-success">Start</button></a>
                    </div>
                    <div>
                        <a href="{{route("score")}}" id="ranking-btn">
                            <button type="button" class="btn btn-primary">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
                                        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
                                    </svg>
                                </span>
                                Ranking
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>    
    
    </body>

    <script type="text/javascript">

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        var user = document.getElementById("name");
        
        $('#play-btn').click(function(e) {
            e.preventDefault(); 
            
            let notify = document.getElementById("notification");
            if(user.value === '' || user.value === undefined || user.value === null) {
                notify.innerHTML = 'Nickname or name is requiered!';
                user.style.border = "1px solid red";
            }else{
                notify.innerHTML = "";
                user.style.border = "";
                var url = "{{route('validate')}}"
                var data = user.value;
                jQuery.ajax({
                    url: url,
                    data: {
                        "name": data
                    },
                    type: 'POST',
                    success: function(response) {
                        if(response.status || response.nameMatch) {
                            window.location=response.url
                        }
                    },
                    error: function(response) {
                        
                    }
                })
            }
        });

    </script>
</html>
