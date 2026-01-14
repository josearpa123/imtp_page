<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $fillable = [
        'family','level','budget','timeline',
        'full_name','email','company','phone','message',
        'answers',
        'source','utm_source','utm_medium','utm_campaign',
        'landing_url','referrer_url','ip','user_agent',
        'status','contacted_at',
    ];

    protected $casts = [
        'answers' => 'array',
        'contacted_at' => 'datetime',
    ];
}
