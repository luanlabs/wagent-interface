export const forceInputNumber = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const {
    which,
    keyCode,
    target: { value },
  } = e;

  const charCode = typeof which === 'undefined' ? keyCode : which;
  const charStr = String.fromCharCode(charCode);

  if (!value && charStr === '.') {
    e.preventDefault();
  } else if (value && value.includes('.') && charStr === '.') {
    e.preventDefault();
  } else if (!charStr.match(/^[0-9]*\.?[0-9]*$/)) e.preventDefault();
};
