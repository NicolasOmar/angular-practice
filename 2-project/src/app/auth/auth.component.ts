import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public authForm: FormGroup;
  public isLogged = true;
  public isLoading = false;
  public errorMsg: string = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, [Validators.required, Validators.minLength(6)])
    })
  }

  public onSwitchMode() {
    this.isLogged = !this.isLogged;
  }

  public onSubmitForm() {
    if (this.authForm.valid) {
      this.isLoading = true;
      let authObs: Observable<AuthDataResponse>;

      authObs = this.isLogged
        ? this.authService.logIn(this.authForm.getRawValue())
        : this.authService.signUp(this.authForm.getRawValue());
      
      authObs.subscribe(
        response => {
          console.warn(response)
          this.isLoading = false;
          this.router.navigate(['/recipes']);
        },
        error => {
          this.errorMsg = error
          this.isLoading = false;
        }
      );
    }
  }
}
