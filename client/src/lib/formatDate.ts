export default function formatDate(timestamp: string) {
  // Create a new Date object with the given timestamp
  const date = new Date(timestamp);

  // Extract day, month, and year from the Date object
  const day = date.getUTCDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getUTCFullYear();

  // Create the formatted date string
  const formattedDate = `${day}th ${month} ${year}`;

  return formattedDate;
}
