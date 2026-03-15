<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\StoreArticleRequest;

class ArticleController extends Controller
{
  public function index()
  {
    return Inertia::render('Article');
  }

  public function store(StoreArticleRequest $request)
  {
    $validated = $request->validated();

    Article::create($validated);

    return redirect()->route('main');
  }

  public function show()
  {
    $articles = Article::all();

    return Inertia::render('Articles', ['articles' => $articles]);
  }

  public function update(StoreArticleRequest $request, Article $article)
  {
    $validated = $request->validated();
    $article->update($validated);
    return redirect()->route('article.store')
      ->with('success', 'Статья отредактирована');
  }

  public function destroy(Article $article)
  {
    $article->delete();

    return redirect()->route('article.store')
      ->with('success', 'Статья удалена');
  }
}