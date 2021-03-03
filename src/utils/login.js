//  https://thefinders.herokuapp.com/user/login
export default function login(username, password) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const body = {
    username,
    password,
  };

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers,
  };

  const request = window.fetch(
    'https://thefinders.herokuapp.com/user/login',
    requestOptions,
  );

  return request;
}
