import React from "react";
import UserProfile from "./UserProfile";

function MainContent() {
  return (
    <main style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
      <UserProfile
        name="Naledi Mokoena"
        age="25"
        bio="Lover of travel and creativity"
      />
    </main>
  );
}

export default MainContent;
