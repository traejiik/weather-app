/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { format, parseISO } from 'date-fns';

function dateFormatted(datetime) {
  const date = parseISO(datetime);
  const formatted = format(date, 'MMMM d');
  return formatted;
}

function getDay(datetime) {
  const date = parseISO(datetime);
  const formatted = format(date, 'EEEE');
  return formatted;
}

export { dateFormatted, getDay };
