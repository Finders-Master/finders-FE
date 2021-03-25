export default function compareInputs(
  inputName,
  inputValue1,
  inputValue2,
  setValue,
  values,
) {
  if (inputValue1.length > 0 && inputValue2.length > 0) {
    if (inputValue1 === inputValue2) {
      setValue({ ...values, [inputName]: false });
    } else {
      setValue({ ...values, [inputName]: true });
    }
  }
}
