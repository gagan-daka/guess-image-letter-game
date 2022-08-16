<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class UserController extends Controller
{

    public function validateName(Request $request)
    {
        $name = $request->input("name");
        
        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $user_name = User::where('name', $name)->first();
        if(!$user_name) {
            $user = new User();
            $user->name = $name;
            $user->save();
        
            return response()->json(['status'=> true, 'url'=>url('/play')]);
        }else{

            return response()->json(['nameMatch'=> true, 'user' => $name,'url'=>url('/play')]);
        }

    }
}
