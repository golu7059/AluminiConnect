export function isEmail(email) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

export function isStrongPassword(password) {
  const hasNumber = /[0-9]/.test(number);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);
  const isValidLength = password.length >= 8 && password.length <= 30;
  const isOnlyValidChars = /^[a-zA-Z0-9!@#$%^&*]+$/.test(password);

  return hasNumber && hasSpecialChar && isOnlyValidChars && isValidLength;
}
