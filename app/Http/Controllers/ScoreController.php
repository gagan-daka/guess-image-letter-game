<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class ScoreController extends Controller
{

    public function index()
    {
        return view('game.score');
    }
}
