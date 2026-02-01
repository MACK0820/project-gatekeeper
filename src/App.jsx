import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  // Login Handler
  const handleLogin = ({ username, password }) => {
    if (username === "admin" && password === "1234") {
      setUser(username);
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  // Logout Handler
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser("");
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
