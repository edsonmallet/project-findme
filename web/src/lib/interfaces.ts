export interface IUser {
  created_at?: string
  email: string
  id?: string
  name: string
  password: string
  update_at?: string
}

export interface IClient {
  created_at?: string
  id?: string
  name: string
  update_at?: string
}

interface ILatLng {
  lat: string
  lng: string
}

export interface IServiceOrder {
  created_at?: string
  problem: string
  id?: string
  client: IClient
  user: IUser
  status: string
  latlng: ILatLng
  update_at?: string
}
