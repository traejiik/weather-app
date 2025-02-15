export default function getDate(increase = 0) {
  const dateToday = new Date();

  if (increase !== 0) {
    dateToday.setDate(dateToday.getDate() + increase);
  }

  const day = `0${dateToday.getDate()}`.slice(-2);
  const month = `0${dateToday.getMonth() + 1}`.slice(-2);
  const year = dateToday.getFullYear();

  return `${year}-${month}-${day}`;
}
