export const required = (value: string) => (!value ? 'Required' : undefined);

export const minLength = (min: number) => (value: string | undefined) =>
  value && value.length >= min ? undefined : `Should be at least ${min} characters`;

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? undefined : 'Invalid email address';
};

export const validatePassword = (password: string) => {
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return passwordRegex.test(password) ? undefined : 'Invalid password';
};
