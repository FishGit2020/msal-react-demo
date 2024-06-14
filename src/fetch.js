export const fetchData = (url, token) => {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(url, options)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
