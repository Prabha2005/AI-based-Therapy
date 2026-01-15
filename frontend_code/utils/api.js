const BASE_URL = "http://127.0.0.1:8000";

/* =====================
   LOGIN
===================== */
export async function loginUser(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error("Invalid email or password");
    }

    const data = await response.json();
    localStorage.setItem("token", data.access_token);

    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

/* =====================
   REGISTER
===================== */
export async function registerUser(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

/* =====================
   AUTH HEADER
===================== */
export function getAuthHeader() {
  const token = localStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
}
