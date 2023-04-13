import React from "react";
import "./App.css";
import LoginButton from "./Components/loginButton";
import LogoutButton from "./Components/logoutButton";
import UserProfile from "./Components/userProfile";

function App() {
  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
      <p>The users information is below!</p>
      <UserProfile/>
    </div>
  );
}

export default App;