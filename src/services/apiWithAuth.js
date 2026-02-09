import { apiRequest } from "./apiClient";
import { refreshAccessToken } from "./auth";
import toast from "react-hot-toast";

let isRefreshing = false;
let refreshPromise = null;

export async function apiRequestWithAuth(path, options = {}) {
  let result = await apiRequest(path, options);

  if (result.response.status === 401) {

    if (!isRefreshing) {
      isRefreshing = true;
      refreshPromise = refreshAccessToken()
        .finally(() => {
          isRefreshing = false;
        });
    }

    try {
      await refreshPromise;
      return await apiRequest(path, options);
    } catch (err) {
        toast("You've been logged out due to inactivity.", {
            icon: "⏳",
        });
      window.location.href = "/login";
      throw err;
    }
  }

  return result;
}
