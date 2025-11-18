import axios from "axios";

const BASE_URL = "https://api.github.com";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY; // optional

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
});

/**
 * Basic user fetch by username
 */
export async function fetchUserData(username) {
  try {
    const { data } = await axiosInstance.get(`/users/${username}`);
    return data;
  } catch (error) {
    throw new Error("Looks like we cant find the user");
  }
}

/**
 * Advanced user search using GitHub Search API.
 * q example: "john location:South Africa repos:>10"
 * Supports pagination via page and per_page.
 */
export async function searchUsersAdvanced({
  term,
  location,
  minRepos,
  page = 1,
  perPage = 10,
}) {
  // Build query string
  const parts = [];
  if (term && term.trim()) parts.push(term.trim());
  if (location && location.trim()) parts.push(`location:${location.trim()}`);
  if (Number.isFinite(minRepos)) parts.push(`repos:>${minRepos}`);

  const q = parts.join(" ").trim();
  if (!q) return { items: [], total_count: 0 };

  try {
    const { data } = await axiosInstance.get("/search/users", {
      params: {
        q,
        page,
        per_page: perPage,
      },
    });
    // data: { total_count, incomplete_results, items: [...] }
    return data;
  } catch (error) {
    throw new Error("Looks like we cant find the user");
  }
}

/**
 * Hydrate a list of lightweight search results with detailed user info.
 * Search API returns limited fields; this pulls location, public_repos, etc.
 */
export async function hydrateUsers(users) {
  const promises = users.map((u) =>
    axiosInstance.get(`/users/${u.login}`).then((res) => res.data)
  );
  const results = await Promise.allSettled(promises);
  return results.filter((r) => r.status === "fulfilled").map((r) => r.value);
}
