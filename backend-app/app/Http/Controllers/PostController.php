<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return response()->json([
            ['id' => 1, 'title' => 'テスト投稿'],
            ['id' => 2, 'title' => 'こんにちは Laravel']
        ]);
    }
}
