export default function validateInput(
  inputName,
  inputValue = '',
  rule,
  setValue,
  values,
) {
  if (inputValue.length > 0) {
    const inputFormatIsOk = rule.test(inputValue);
    if (inputFormatIsOk) {
      setValue({ ...values, [inputName]: false });
    } else {
      setValue({ ...values, [inputName]: true });
    }
  }
}
