<?php

use App\Http\Controllers\NoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('Notes', NoteController::class);

Route::get('/user', function (Request $request) {
    $user = Auth::user();
    return response()->json($user);
})->middleware("auth:sanctum");


