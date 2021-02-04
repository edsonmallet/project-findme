export async function fetcher<T>(url: string): Promise<T> {
  return fetch(url).then(res => res.json())
}

export const api = {
  BASE_URL: 'http://localhost:3333'
}
