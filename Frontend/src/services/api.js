const API_BASE =
    import.meta.env.VITE_API_BASE?.replace(/\/$/, "") ||
    "https://api.imtpstudios.com/api"; // ✅ agrega /api

export async function apiFetch(path, options = {}) {
    const url = path.startsWith("http")
        ? path
        : `${API_BASE}${path.startsWith("/") ? "" : "/"}${path}`;

    const headers = {
        "Content-Type": "application/json",
        ...(options.headers || {}),
    };

    const res = await fetch(url, { ...options, headers });

    const txt = await res.text();
    let data = null;
    try { data = txt ? JSON.parse(txt) : null; } catch { data = txt || null; }

    if (!res.ok) {
        const msg = (data && (data.message || data.error)) || `HTTP ${res.status}`;
        throw new Error(msg);
    }

    return data;
}
