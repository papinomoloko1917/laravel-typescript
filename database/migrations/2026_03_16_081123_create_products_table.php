<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description'); //Описание товара
            $table->string('image'); //Изображение товара
            $table->string('slug'); //Для красивых url
            $table->boolean('active')->default(true); //Для включения/выключения товаров
            $table->decimal('price', 10, 2); //Стоимость товара
            $table->boolean('hit')->default(false); //Хит
            $table->unsignedInteger('remains'); //Остаток на складе
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
