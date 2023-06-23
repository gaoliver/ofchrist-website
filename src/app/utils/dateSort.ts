export function dateSort(dateA: string, dateB: string) {
  const eventADate = new Date(dateA).getTime();
  const eventBDate = new Date(dateB).getTime();

  return eventADate > eventBDate ? 1 : eventADate === eventBDate ? 0 : -1;
}
