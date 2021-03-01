//  Regexp to check password and email format
const RegExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const RegExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/gm;

export { RegExpEmail, RegExpPassword };
