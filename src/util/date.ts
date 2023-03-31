
// Get the current date and time in the format of YYYYMMDD HH:MM
export function getFormattedDate(dateStr: string): string {
  const date = new Date(dateStr);
  const year = date.getUTCFullYear().toString().slice(-2);
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");
  const hour = date.getUTCHours().toString().padStart(2, "0");
  const minute = date.getUTCMinutes().toString().padStart(2, "0");

  return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
}