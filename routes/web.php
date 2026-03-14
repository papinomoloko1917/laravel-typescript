<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\ArticleController;

Route::get('/', MainController::class)->name('main');

Route::get('/article', [ArticleController::class, 'index'])->name('article.index');

Route::get('/articles', [ArticleController::class, 'show'])->name('articles.show');

Route::post('/article', [ArticleController::class, 'store'])->name('article.store');

Route::delete('/articles/{article}', [ArticleController::class, 'destroy'])->name('article.destroy');