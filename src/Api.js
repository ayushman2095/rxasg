export async function handleResponse(response) {
  if (response) return response.json();
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}
export function getRx() {
  return fetch(
    "https://newsapi.org/v2/everything?q=reactjs&apiKey=363d26dd3d664d199ca63adc371e22aa&pageSize=10&page=1&sortBy=publishedA"
  )
    .then(handleResponse)
    .catch(handleError);
}
