const useCheckboxColors = (isStreamChecked: boolean, isVestingChecked: boolean) => {
  let vestingIconColor;
  let streamIconColor;
  let vestingTextColor;
  let streamTextColor;

  if (isStreamChecked) {
    streamIconColor = '#101828';
    streamTextColor = '!text-[#101828]';
  } else {
    streamIconColor = '#98A2B3';
    streamTextColor = '!text-[#98A2B3]';
  }

  if (isVestingChecked) {
    vestingIconColor = '#101828';
    vestingTextColor = '!text-[#101828]';
  } else {
    vestingIconColor = '#98A2B3';
    vestingTextColor = '!text-[#98A2B3]';
  }

  return { vestingIconColor, streamIconColor, streamTextColor, vestingTextColor };
};

export default useCheckboxColors;
