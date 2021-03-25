export default function decodeJWT(token = '') {
  if (token.length === 0) return new Error('Please insert a token parameter');

  return JSON.parse(atob(token.split('.')[1]));
}
