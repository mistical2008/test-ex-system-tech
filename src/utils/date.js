import {DateTime} from 'luxon';

/**
 * @description format ISO date to native
 * @param {string} date date strint in ISO format
 * @returns {string} formatted date string
 */
function formatDateNative(date) {
  return DateTime.fromISO(date)
    .setLocale('ru-RU')
    .toFormat(`dd MMMM${isCurrentYear(date) ? '' : ' yy'}`);
}

/**
 * @description checks passed date for current year
 * @param {Date} date date strint in valid Date format
 * @returns Boolean
 */
function isCurrentYear(date) {
  return new Date().getFullYear() === new Date(date).getFullYear();
}

export {formatDateNative};
