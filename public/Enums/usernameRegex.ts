//it must contain a-z with small and capital letter and also must have numbers and minimum length must 3 and maximum length is must 32
//^: Asserts the start of a line.
//[a-zA-Z0-9_]: Matches any alphanumeric character (a-z, A-Z, 0-9) or an underscore _.
//{3,32}: Specifies that the preceding character set must occur between 3 and 32 times, inclusive.
//$: Asserts the end of a line.
export const USERNAME_REGEX = /^[a-zA-Z0-9_]{3,32}$/;
