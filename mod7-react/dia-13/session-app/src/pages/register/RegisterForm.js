import { useState } from "react";
import { Link } from "react-router-dom";

import "./register-form.css";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [checkEmail, setCheckEmail] = useState("");

  function OnSubmitRegister(event) {
    event.preventDefault();

    const error = validateRegisterForm(
      email,
      password,
      repeatedPassword,
      username
    );

    if (error) {
      setError(error);
      return;
    }

    console.log("llamar al endpoint de registro!");
    async function performRegister() {
      const response = await fetch("http://localhost/api/auth/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username,
        }),
      });

      const data = await response.json();

      if (data.message) {
        setError(data.message);
        return;
      }

      setCheckEmail(`Valida tu cuenta de correo ${data.email}`);
    }

    performRegister();
    setError("");
  }

  return (
    <div className="register-form">
      <div className="register-container">
        <h1>Register Form</h1>

        <form onSubmit={OnSubmitRegister}>
          <label className="field-container">
            Email*
            <input
              // required
              className="field"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="text"
            />
          </label>
          <label className="field-container">
            Password*
            <input
              // required
              className="field"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />
          </label>
          <label className="field-container">
            Repeat Password*
            <input
              // required
              className="field"
              value={repeatedPassword}
              onChange={(event) => setRepeatedPassword(event.target.value)}
              type="password"
            />
          </label>
          <label className="field-container">
            Usuario*
            <input
              // required
              className="field"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              type="text"
            />
          </label>
          <div className="register-button-container">
            <input className="register-button" type="submit" value="Register" />
          </div>
          {error && <div className="error-label">{error} </div>}
          {checkEmail && <div>{checkEmail} </div>}
          <Link to="/login">Login</Link>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;

function validateRegisterForm(email, password, repeatedPassword, username) {
  if (!email) {
    return "El campo email es obligatorio";
  }

  if (!password) {
    return "El campo password es obligatorio";
  }

  if (!repeatedPassword) {
    return "El campo password es obligatorio";
  }

  if (!username) {
    return "El campo username es obligatorio";
  }

  const isValidPassword = password === repeatedPassword;

  if (!isValidPassword) {
    return "Las contraseñas deben coincidir";
  }
}
