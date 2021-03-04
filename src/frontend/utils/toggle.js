export default function toggleDisableButton(validation, setValue) {
  if (validation) {
    setValue(true);
  } else {
    setValue(false);
  }
}
