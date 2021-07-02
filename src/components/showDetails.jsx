import React from "react";
const API_KEY = "aKm0rKlARmgtqTOXDcDVONu5Ysu1";
export default function showDetail(id) {
  const url = `
        https://cricapi.com/api/matches/?apikey=${API_KEY}&unique_id=${id}`;
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
