<?php

use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;


Route::get('/', MainController::class)->name('main');

Route::get('/products', [ProductController::class, 'index'])->name('products');
