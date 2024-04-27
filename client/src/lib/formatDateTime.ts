export default function formatDateTime(timestamp: string) {
    // Create a new Date object with the given timestamp
    const date = new Date(timestamp);

    // Convert UTC time to IST (add 5 hours and 30 minutes)
    const ISTOffset = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
    date.setTime(date.getTime() + ISTOffset);

    // Extract day of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[date.getUTCDay()];


    // Create the formatted date and time string
    const formattedDateTime = `${dayOfWeek}`;

    return formattedDateTime;
}
