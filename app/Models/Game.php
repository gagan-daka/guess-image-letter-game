<?php

namespace App\Models;

class Game {

    public int $score = 0;
    public int $numberOfWrongTries = 0;
    public int $totalImagesGuessed = 0;

    protected $fillable = ['name','score'];

    public function __construct($score, $totalImagesGuessed, $numberOfWrongTries)
    {
        $this->score = $score;
        $this->numberOfWrongTries = $numberOfWrongTries; 
        $this->totalImagesGuessed = $totalImagesGuessed;
    }

    public function buildGame()
    {

    }

}