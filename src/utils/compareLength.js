export default function compareLength(string = '', operator = '', length = 0) {
  switch (operator) {
    case '===':
      if (string.length === length) {
        return true;
      }
      return false;
    case '>':
      if (string.length > length) {
        return true;
      }
      return false;
    case '<':
      if (string.length < length) {
        return true;
      }
      return false;
    case '>=':
      if (string.length >= length) {
        return true;
      }
      return false;
    case '<=':
      if (string.length <= length) {
        return true;
      }
      return false;
    case '!==':
      if (string.length !== length) {
        return true;
      }
      return false;
    default:
      return 'Use an operator';
  }
}
