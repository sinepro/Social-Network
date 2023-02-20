<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller {
    public function register(Request $request)
    {
        $validateData = $request->validate([
            'username' => 'required|max:255',
            'email' => 'required|email|unique:users|max:255',
            'password' => 'required|max:255'
            
        ]);

        $user = User::create($validateData);

        return response()->json(['user' => $user], 201);
    }
}