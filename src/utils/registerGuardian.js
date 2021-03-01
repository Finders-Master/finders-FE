export default function registerGuardian(name, email, password) {
  const body = {
    name,
    password,
    email,
    pictures: 'http://dummyimage.com/248x122.jpg/5fa2dd/ffffff',
    type_user_id: 1,
  };

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers,
  };

  const request = window
    .fetch('https://thefinders.herokuapp.com/user/register', requestOptions)
    .then((res) => res.json())
    .then((data) => data)
    .catch((data) => data);

  return request;
}
