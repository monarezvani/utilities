import { useState } from "react";
import { PASSWORD_REGEX } from "../../Enums/passwordRegex";

export const ValidatePassword = (password: string) => {
  const [passwordError, setPasswordError] = useState<string | null>(null);

  if (!PASSWORD_REGEX.test(password)) {
    setPasswordError(
      "Invalid password. Minimum eight characters, at least one letter and one number."
    );
  } else {
    setPasswordError(null);
  }
  return {
    passwordError,
  };
};
