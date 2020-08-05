interface AuthDataBody {
  email: string,
  password: string
}

interface AuthDataResponse {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

interface AuthLocalData {
  email: string,
  id: string,
  _token: string,
  _tokenExpirationDate: Date
}