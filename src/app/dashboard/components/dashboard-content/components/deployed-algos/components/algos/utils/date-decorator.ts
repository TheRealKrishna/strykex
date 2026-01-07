
export function dateDecorator(dateString: string): string {
  const date = new Date(dateString);
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short", 
      year: "2-digit",
    })
    .replace(/^(\d{1,2})/, (d) => {
      const n = parseInt(d, 10);
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    });

  const formattedTime = date
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace("am", "AM")
    .replace("pm", "PM");
  return `${formattedDate} | ${formattedTime}`;
}