//  Regex source: https://www.w3resource.com/javascript/form/javascript-form-validation.php
const RegExpEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const RegExpPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/;
const RegExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/g;

export { RegExpEmail, RegExpPassword };
