import { apiRequest } from "./apiClient";

/**
 * Login function
 * @param {Object} payload - { email, password }
 * @returns {Promise<{response: Response, data: any}>}
 */
export async function login(payload) {
  const { response, data } = await apiRequest("/api/v1/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { response, data };
}



/**
 * Signup function
 * @param {Object} payload - backend-expected signup data
 * @returns {Promise<{response: Response, data: any}>}
 */
export async function signup(payload) {
  const { response, data } = await apiRequest("/api/v1/auth/signup", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { response, data };
}
