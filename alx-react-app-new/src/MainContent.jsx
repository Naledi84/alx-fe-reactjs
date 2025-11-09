import React from "react";
import UserProfile from "./UserProfile";


function MainContent() {
  return (
    <main
      style={{
        backgroundColor: "#eef",
        padding: "20px",
        borderRadius: "8px",
        minHeight: "60vh",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>User Profiles</h2>

      <UserProfile
        name="Naledi"
        age="25"
        bio="A passionate digital marketer and content creator."
      />
      <UserProfile
        name="Tumi"
        age="28"
        bio="Loves data, analytics, and travel adventures."
      />
      <UserProfile
        name="Lebo"
        age="30"
        bio="Enjoys coding, coffee, and creativity."
      />
    </main>
  );
}

export default MainContent;
