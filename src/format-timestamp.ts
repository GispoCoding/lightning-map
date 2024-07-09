const formatTimeStamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${formatter.format(date)}`;
};

export default formatTimeStamp;
