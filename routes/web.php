<?php

use App\Http\Controllers\PlayController;
use App\Http\Controllers\ScoreController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [PlayController::class, 'welcome'])->name('welcome');
Route::get('/play', [PlayController::class, 'index'])->name('play');
Route::get('/score', [ScoreController::class, 'index'])->name('score');