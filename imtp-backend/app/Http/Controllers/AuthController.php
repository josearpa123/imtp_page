<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $data = $request->validate([
            'email'    => ['required','email'],
            'password' => ['required','string'],
        ]);

        $user = User::where('email', $data['email'])->first();

        if (!$user || !Hash::check($data['password'], $user->password_hash)) {
            return response()->json(['message' => 'Credenciales inválidas'], 422);
        }

        if (!$user->is_active) {
            return response()->json(['message' => 'Usuario inactivo'], 403);
        }

        // 🔒 Bloqueo total: si no es admin, NO se genera token
        if (!$user->isAdmin()) {
            return response()->json(['message' => 'Solo administradores'], 403);
        }

        // Limpia tokens previos si quieres 1 sesión por admin:
        // $user->tokens()->delete();

        $token = $user->createToken('admin-panel', ['admin'])->plainTextToken;

        $user->forceFill(['last_login_at' => now()])->save();
        return response()->json([
            'token' => $token,
            'user' => [
                'id' => $user->id,
                'email' => $user->email,
                'full_name' => $user->full_name,
                'role_slug' => 'admin', // ✅ IMPORTANTE
            ],
        ]);

    }


    public function me(Request $request)
    {
        $user = $request->user();

        // si quieres validar admin acá también:
        $isAdmin = $user->roles()->where('slug', 'admin')->exists();

        return response()->json([
            'id' => $user->id,
            'email' => $user->email,
            'full_name' => $user->full_name,
            'role_slug' => $isAdmin ? 'admin' : null,
            'is_admin' => $isAdmin,
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()?->delete();

        return response()->json(['ok' => true]);
    }
}
