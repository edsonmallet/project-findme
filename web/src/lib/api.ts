export async function fetcher<T>(url: string): Promise<T> {
  return fetch(url).then(res => res.json())
}

const BASE_URL = 'http://localhost:3333'

export const api = {
  clients: `${BASE_URL}/clients`,
  users: `${BASE_URL}/clients`,
  so: `${BASE_URL}/clients`,
}
