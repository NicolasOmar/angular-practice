export interface AuthDataBody {
  email: string,
  password: string
}

export interface AuthDataResponse {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

export interface AuthLocalData {
  email: string,
  id: string,
  _token: string,
  _tokenExpirationDate: Date
}