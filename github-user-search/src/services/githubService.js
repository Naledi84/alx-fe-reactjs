import axios from "axios";

const BASE_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY; // optional

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
    });
    return response.data;
  } catch (error) {
    console.error("GitHub API error:", error);
    throw error;
  }
};
