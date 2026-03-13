<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\ArticleController;

Route::get('/', MainController::class)->name('main');

Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
