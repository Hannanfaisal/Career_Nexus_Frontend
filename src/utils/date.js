
export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
  
    const day = date.getUTCDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getUTCFullYear();
  
    return `${day} ${month}, ${year}`;
  };
  