function telephoneCheck(str) {
  const regex = /^\s*(1{1})?[-\s]?(\d{3}|\(\d{3}\))[-\s]?(\d{3})[-\s]?(\d{4})\s*$/;
  // ^\s* : matches any whitespace at the beginning if any
  // (1{1})? : the number 1, entered only once. optional
  // [-\s]? : optional space or one dash
  // (\d{3}|\(\d{3}\)) : three digits or three digits with parentheses. compulsory
  // (\d{3}) : compulsory three digits.
  // (\d{4}) : compulsory four digits
  // \s*$ : matches any whitespace at the end of the line if any
  return regex.test(str);
}