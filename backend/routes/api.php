<?php

use App\Http\Controllers\NoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware("auth:sanctum")->group(function () {
    Route::get('/user', function (Request $request) {
        $user = Auth::user();
        return response()->json($user);
    });

    Route::apiResource('Notes', NoteController::class);

});
