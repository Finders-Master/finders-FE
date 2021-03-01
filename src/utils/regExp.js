//  Regexp to check password and email format
const RegExpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const RegExpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/;

export { RegExpEmail, RegExpPassword };
