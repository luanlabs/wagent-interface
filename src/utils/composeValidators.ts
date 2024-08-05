export const composeValidators =
  (...validators: any[]) =>
  (value: string) =>
    validators.reduce((error, validator) => error || validator(value), undefined);
