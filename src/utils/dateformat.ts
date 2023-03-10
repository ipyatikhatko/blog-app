export const formatDate = (timestamp: number, ) => {
  let options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };

  return new Intl.DateTimeFormat('en-US', options).format(new Date(timestamp));
}