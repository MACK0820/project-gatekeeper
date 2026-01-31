import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const handleLogin = ({ username, password }) => {
    if (username === "admin" && password === "1234") {
      setUser(username);
      setIsLoggedIn(true);
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <Dashboard user={user} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
