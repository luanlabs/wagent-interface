import { StrKey } from '@stellar/stellar-sdk';

export const required = (value: string) => (!value ? 'Required' : undefined);

export const minLength = (min: number) => (value: string | undefined) =>
  value && value.length >= min ? undefined : `Should be at least ${min} characters`;

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? undefined : 'Invalid email address';
};

export const validateAddress = (address: string) => {
  return StrKey.isValidEd25519PublicKey(address) ? undefined : 'Invalid Address';
};
