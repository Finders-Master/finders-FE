// Camel case disables to send info in backend
/* eslint-disable camelcase */
export default function addAngel({
  name,
  address,
  institution,
  allergies,
  blood_type,
  medication,
  diseases,
  contact_emergencies,
  id_document,
  qr,
}) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const PATIENT = JSON.stringify({
    name,
    address,
    pictures: 'http://dummyimage.com/248x122.jpg/5fa2dd/ffffff',
    contact_emergencies,
    institution,
    type_user_id: 21,
    allergies,
    blood_type,
    medication,
    diseases,
    userguard_id: parseInt(window.localStorage.getItem('id'), 10),
    id_document,
    qr,
  });

  const request = window.fetch(
    'https://thefinders.herokuapp.com/patient/register-patient',
    {
      method: 'POST',
      body: PATIENT,
      redirect: 'follow',
      headers,
    }
  );

  return request;
}
