import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { ErrorEnum } from '../shared/enums/error.enum';
import { User } from './user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apiKey = 'AIzaSyCp6thaLrZwItBnZB6hkEqFql7ijhp76LM';
  public user = new BehaviorSubject<User>(null);

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  public signUp(authData: AuthDataBody) {
    return this.http
      .post<AuthDataResponse>(this.encodeUrl('accounts:signUp'), { ...authData, returnSecureToken: true })
      .pipe(
        catchError(
          errorResponse => throwError(this.parseError(errorResponse))
        ),
        tap(
          ({ email, localId, idToken, expiresIn }) => this.parseUser(email, localId, idToken, +expiresIn)
        )
      )
  }

  public logIn(authData: AuthDataBody) {
    return this.http
      .post<AuthDataResponse>(this.encodeUrl('accounts:signInWithPassword'), { ...authData, returnSecureToken: true })
      .pipe(
        catchError(
          errorResponse => throwError(this.parseError(errorResponse))
        ),
        tap(
          ({ email, localId, idToken, expiresIn }) => this.parseUser(email, localId, idToken, +expiresIn)
        )
      )
  }

  public autoLogin() {
    const userData: AuthLocalData = this.getLocalUser()

    if (userData) {
      const loadedUser = new User(
        userData.email,
        userData.id,
        userData._token,
        userData._tokenExpirationDate
      )

      if (loadedUser.token) {
        this.user.next(loadedUser)
      }
    }
  }

  public logOut() {
    this.user.next(null)
    this.setLocalUser(null)
    this.router.navigate(['/auth'])
  }

  private encodeUrl(serviceUrl: string) {
    return `${this.url}/${serviceUrl}?key=${this.apiKey}`
  }

  private parseError(errorResponse: HttpErrorResponse) {
    switch(errorResponse.error.error.message) {
      case ErrorEnum.EMAIL_EXISTS:
        return 'This email already exists'
      case ErrorEnum.INVALID_PASSWORD:
        return 'The password is invalid'
      default:
        return 'An Error Ocurred'
    }
  }

  private parseUser(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expiredDate = new Date(new Date().getTime() + (expiresIn * 1000))
    const user = new User(email, userId, token, expiredDate);
    this.user.next(user)
    this.setLocalUser(user);
  }

  private setLocalUser(userData: any) {
    localStorage.setItem('userData', JSON.stringify(userData))
  }

  private getLocalUser() {
    return JSON.parse(localStorage.getItem('userData'))
  }
}