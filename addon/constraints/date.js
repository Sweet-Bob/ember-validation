import { assign } from '@ember/polyfills';
import moment from 'moment';

export function validDate(value, format = moment.ISO_8601) {
  if (value) {
    return moment(value, format, true).isValid();
  } else {
    return false;
  }
}

export function getLongDateFormat(format) {
  try {
    const fmt = moment.localeData().longDateFormat(format);
    if (fmt) {
      return fmt;
    }
  } catch (error) {}
  return format;
}

export default function dateConstraint(options) {
  return function(value) {
    options = assign({ format: moment.ISO_8601 }, options);

    if (!value && options.optional) {
      return;
    }

    if (validDate(value, options.format)) {
      return;
    }

    const displayFormat = getLongDateFormat(options.format);

    return options.message || `invalid date, expecting ${displayFormat}`;
  };
}