// src/services/apiClient.js
const BASE_URL = "https://safe-nest-backend.fly.dev";

export async function apiRequest(path, options = {}) {
    const response = await fetch(`${BASE_URL}${path}`, {
        credentials: "include", // send cookies for auth
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        ...options,
    });

    let data;
    try {
        data = await response.json();
    } catch {
        data = null;
    }

    return { response, data };
}
