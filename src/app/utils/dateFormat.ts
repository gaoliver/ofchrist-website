export function dateFormat(date: string) {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;

  return `${day}/${month}`;
}
