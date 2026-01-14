<?php
use App\Http\Controllers\LeadController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Admin\AdminUsersController;

Route::get('/ping', function () {
    return response()->json(['ok' => true, 'message' => 'API viva']);
});


Route::post('/leads', [LeadController::class, 'store'])->middleware('throttle:30,1');

Route::post('/auth/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);     // ✅ ESTA ES LA QUE TE FALTA
    Route::post('/auth/logout', [AuthController::class, 'logout']);

    Route::middleware('admin')->group(function () {
        Route::post('/admin/users', [AdminUsersController::class, 'store']);
    });
});
