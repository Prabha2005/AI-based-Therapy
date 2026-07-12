const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

/* =====================
   LOGIN
===================== */
export async function loginUser(email, password) {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    //const data = await response.json();
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.detail || "Invalid email or password");
    }

    localStorage.setItem("token", data.access_token);

    return { success: true };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
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

    const data = await response.json();
    console.log("Register Response:", data);

    if (!response.ok) {
      throw new Error(data.detail || "Registration failed");
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
