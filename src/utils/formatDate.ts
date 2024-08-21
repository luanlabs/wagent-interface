export const formatDate = (date: any) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // Use 12-hour format
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};
