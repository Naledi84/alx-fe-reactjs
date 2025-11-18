import axios from "axios";

const BASE_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY; // optional

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
    });
    return response.data;
  } catch (error) {
    // Normalize error so the component can show the required message
    throw new Error("Looks like we cant find the user");
  }
}
