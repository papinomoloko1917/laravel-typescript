<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
  public function index()
  {
    return Inertia::render('Article');
  }

  public function store(Request $request)
  {
    $validated = $request->validate([
      'title' => 'required|string|max:255',
      'content' => 'required|string'
    ]);

    Article::create($validated);

    return redirect()->route('main');
  }

  public function show()
  {
    $articles = Article::all();

    return Inertia::render('Articles', ['articles' => $articles]);
  }

  public function destroy(Article $article)
  {
    $article->delete();

    return redirect()->route('article.store')
      ->with('success', 'Статья удалена');
  }
}