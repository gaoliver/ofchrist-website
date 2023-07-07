const yearMonths = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export function dateFormat(date: string) {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;

  return `${day}/${month}`;
}

export function fullDateFormat(date: string) {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();

  return `${day} de ${yearMonths[month]}, ${year}`;
}

export function fullDateNumbersFormat(date: string) {
  const newDate = new Date(date);

  const day = newDate.getDate();
  let month = newDate.getMonth();
  const year = newDate.getFullYear();

  return `${day}/${month < 10 ? '0' + month : month}/${year}`;
}
