<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminUsersController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'full_name' => ['required','string','max:120'],
            'email' => ['required','email','max:190','unique:users,email'],
            'password' => ['required','string','min:6'],
            'role_slug' => ['nullable','string'], // default admin
        ]);

        $roleSlug = $data['role_slug'] ?? 'admin';
        $role = Role::where('slug', $roleSlug)->first();

        if (!$role) {
            return response()->json(['message' => 'Rol no existe'], 422);
        }

        $user = User::create([
            'full_name' => $data['full_name'],
            'email' => $data['email'],
            'password_hash' => Hash::make($data['password']),
            'is_active' => 1,
            'must_change_password' => 1,
        ]);

        $user->roles()->attach($role->id, ['created_at' => now()]);

        return response()->json([
            'ok' => true,
            'user' => [
                'id' => $user->id,
                'full_name' => $user->full_name,
                'email' => $user->email,
                'roles' => $user->roles()->pluck('slug')->values(),
            ],
        ], 201);
    }
}
