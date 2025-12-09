import { useState } from "react";

// Simple custom hook to simulate authentication
export default function useAuth() {
  // Change default to false to simulate logged out
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return { isAuthenticated, setIsAuthenticated };
}
