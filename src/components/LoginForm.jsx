import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import Card from "./Card";

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const { username, password } = formData;

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setError("");
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const success = onLogin({ username, password });

    if (!success) {
      setError("❌ Invalid username or password.");
    }
  };

  return (
    <Card title="SkyLine Analytics Login">
      <form onSubmit={handleSubmit}>
        <InputField
          label="Username"
          name="username"
          value={username}
          onChange={handleChange}
          error={error}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          error={error}
        />

        {error && <p className="error-text">{error}</p>}

        <Button text="Login" />
      </form>
    </Card>
  );
};

export default LoginForm;
