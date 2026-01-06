<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Admin\AdminUsersController;


Route::get('/ping', function () {
    return response()->json(['ok' => true, 'message' => 'API viva']);
});

Route::post('/auth/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum','admin'])->group(function () {
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::post('/admin/users', [AdminUsersController::class, 'store']);
});
