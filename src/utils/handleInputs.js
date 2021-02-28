export default function handleInputs(event, values, setValues) {
  setValues({
    ...values,
    [event.target.name]: event.target.value,
  });
}
