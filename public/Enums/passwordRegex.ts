//^: Asserts the start of a line.
//(?=.*[a-zA-Z0-9]): Positive lookahead assertion for at least one alphanumeric character.
//(?=.*\d): Positive lookahead assertion for at least one digit.
//(?=.*[a-zA-Z\d@$%&?+#]): Positive lookahead assertion for at least one character from the set [a-zA-Z\d@$%&?+#].
//{8,}: Specifies that the preceding character set must occur at least 8 times.
//$: Asserts the end of a line.
export const PASSWORD_REGEX =
  /^(?=.*[a-zA-Z0-9])(?=.*\d)(?=.*[a-zA-Z\d@$%&?+#]){8,} $/;
