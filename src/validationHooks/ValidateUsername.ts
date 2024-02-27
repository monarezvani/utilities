import { useState } from "react";
import { USERNAME_REGEX } from "../../public/Enums/usernameRegex";

export const ValidateUsername = (username: string) => {
  const [usernameError, setUsernameError] = useState<string | null>(null);

  if (!USERNAME_REGEX.test(username)) {
    setUsernameError(
      "Invalid username. Use alphanumeric characters and underscore. (3-20 characters)"
    );
  } else {
    setUsernameError(null);
  }
  return {
    usernameError,
  };
};
