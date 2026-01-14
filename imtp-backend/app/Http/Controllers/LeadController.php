<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class LeadController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'family'     => ['nullable','string','max:60'],
            'level'      => ['nullable','string','max:60'],
            'budget'     => ['nullable','string','max:60'],
            'timeline'   => ['nullable','string','max:60'],

            'full_name'  => ['required','string','max:120'],
            'email'      => ['required','email','max:160'],
            'company'    => ['nullable','string','max:160'],
            'phone'      => ['nullable','string','max:40'],
            'message'    => ['nullable','string','max:4000'],

            // si en frontend mandas objeto/array, esto lo valida
            'answers'    => ['nullable','array'],

            'source'       => ['nullable','string','max:60'],
            'utm_source'   => ['nullable','string','max:100'],
            'utm_medium'   => ['nullable','string','max:100'],
            'utm_campaign' => ['nullable','string','max:120'],
            'landing_url'  => ['nullable','string','max:255'],
            'referrer_url' => ['nullable','string','max:255'],
        ]);

        // Captura técnica
        $ip = $request->ip();
        $ua = Str::limit((string) $request->userAgent(), 2000);

        // IMPORTANTE: answers puede ser JSON o TEXT en MySQL.
        // Para evitar errores, lo guardamos como string JSON.
        $answersJson = isset($data['answers']) ? json_encode($data['answers'], JSON_UNESCAPED_UNICODE) : null;

        $lead = Lead::create([
            'family'   => $data['family'] ?? null,
            'level'    => $data['level'] ?? null,
            'budget'   => $data['budget'] ?? null,
            'timeline' => $data['timeline'] ?? null,

            'full_name' => $data['full_name'],
            'email'     => $data['email'],
            'company'   => $data['company'] ?? null,
            'phone'     => $data['phone'] ?? null,
            'message'   => $data['message'] ?? null,

            'answers' => $answersJson,

            'source'      => $data['source'] ?? null,
            'utm_source'  => $data['utm_source'] ?? null,
            'utm_medium'  => $data['utm_medium'] ?? null,
            'utm_campaign'=> $data['utm_campaign'] ?? null,
            'landing_url' => $data['landing_url'] ?? null,
            'referrer_url'=> $data['referrer_url'] ?? null,

            'ip' => $ip,
            'user_agent' => $ua,
        ]);

        return response()->json([
            'ok' => true,
            'lead_id' => $lead->id,
        ], 201);
    }
}
