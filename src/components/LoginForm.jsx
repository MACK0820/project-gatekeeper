import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import Card from "./Card";

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
  };

  return (
    <Card title="SkyLine Analytics Login">
      <form onSubmit={handleSubmit}>
        <InputField
          label="Username"
          name="username"
          value={username}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />

        <Button text="Login" />
      </form>
    </Card>
  );
};

export default LoginForm;
