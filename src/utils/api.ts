export const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

// TODO: ENV VAR
export const baseUrl = "http://localhost:3000";
