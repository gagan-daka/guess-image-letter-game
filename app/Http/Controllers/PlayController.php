<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class PlayController extends Controller
{
    public bool $gameStatus = false;

    public function welcome()
    {
        return view('index');
    }

    public function index()
    {
        return view('game.play');
    }
}
