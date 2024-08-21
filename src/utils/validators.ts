export const required = (value: string) => (!value ? 'Required' : undefined);

export const minLength = (min: number) => (value: string | undefined) =>
  value && value.length >= min ? undefined : `Should be at least ${min} characters`;

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? undefined : 'Invalid email address';
};

export const validatePassword = (password: string): string | undefined => {
  const rules = [
    { regex: /.{6,16}/, error: 'Password must be between 6 and 16 characters long.' },
    { regex: /[0-9]/, error: 'Password must include at least one number.' },
    {
      regex: /[!@#$%^&*]/,
      error: 'Password must include at least one special character (!@#$%^&*).',
    },
    { regex: /[a-zA-Z]/, error: 'Password must include at least one letter.' },
    { regex: /[A-Z]/, error: 'Password must include at least one uppercase letter.' },
  ];

  for (const rule of rules) {
    if (!rule.regex.test(password)) {
      return rule.error;
    }
  }

  return undefined;
};
