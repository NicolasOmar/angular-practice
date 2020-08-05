import { Subject } from 'rxjs';

export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) { }

  // A GETTER LOOKS LIKE A FUNCTION BUT WORKS LIKE A PROPERTY
  get token() {
    return !this._tokenExpirationDate || new Date() > this._tokenExpirationDate
      ? null
      : this._token;
  }
}