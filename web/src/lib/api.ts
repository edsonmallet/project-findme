export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  return fetch(url, options).then(res => res.json())
}

const BASE_URL = 'https://findmeapitest.herokuapp.com'

export const api = {
  clients: `${BASE_URL}/clients`,
  users: `${BASE_URL}/users`,
  so: `${BASE_URL}/services_orders`,
  auth: `${BASE_URL}/sessions`
}
