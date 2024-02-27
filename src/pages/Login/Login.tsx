import React, { useState } from "react";
import { Modal } from "../../shared/Modal/Modal";
import { ValidateUsername } from "../../validationHooks/ValidateUsername";
import { ValidatePassword } from "../../validationHooks/ValidatePassword";

export const Login = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const usernameValidationResult = ValidateUsername(username);
  const passwordValidationResult = ValidatePassword(password);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setUsernameError(null);
  };
  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError(null);
  };
  const handleUsernameBlur = () => {
    setUsernameError(usernameValidationResult.usernameError);
  };
  const handlePasswordBlur = () => {
    const usernameValidationResult = ValidatePassword(password);
    setUsernameError(usernameValidationResult.passwordError);
  };
  const handleLogin = () => {
    setUsernameError(usernameValidationResult.usernameError);

    setPasswordError(passwordValidationResult.passwordError);
    setIsModalOpened(true);
    setIsModalOpened(true);
  };
  return (
    <div className="login-container">
      <form className="login-form">
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            onBlur={handleUsernameBlur}
            style={{
              border:
                usernameError && username.length > 0 ? "1px solid red" : "",
            }}
          />
          {usernameError && (
            <span style={{ color: "red" }}>{usernameError}</span>
          )}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            style={{
              border:
                passwordError && password.length > 0 ? "1px solid red" : "",
            }}
          />
          {passwordError && (
            <span style={{ color: "red" }}>{passwordError}</span>
          )}
        </div>

        <button
          type="button"
          onClick={handleLogin}
          disabled={!!usernameError || !!passwordError}
        >
          Login
        </button>

        <div>
          <span
            onClick={handleForgotPassword}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Forgot Password?
          </span>
        </div>
      </form>
      <Modal
        isModalOpen={isModalOpened}
        onCloseModal={() => setIsModalOpened(false)}
      >
        {!usernameValidationResult.usernameError &&
        !passwordValidationResult.passwordError ? (
          <>
            <h2>Login is Successful</h2>
            <p>Your username is: {username}</p>
          </>
        ) : (
          <>
            <h2 style={{ color: "red" }}>{usernameError}</h2>
            <h2 style={{ color: "red" }}>{passwordError}</h2>
          </>
        )}
      </Modal>
    </div>
  );
};
export default Login;
