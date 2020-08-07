import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
// SERVICES
import { AuthService } from './auth.service';
// DIRECTIVES
import { PlaceholderDirective } from '../shared/directives/placeholder.directive';
// COMPONENTS
import { AlertComponent } from '../shared/components/alert/alert.component';
// INTERFACES
import { AuthDataResponse } from '../shared/interfaces/auth.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  @ViewChild(PlaceholderDirective) alertView: PlaceholderDirective;

  private closeSub: Subscription;
  public authForm: FormGroup;
  public isLogged = true;
  public isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private componentResolver: ComponentFactoryResolver
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
          this.isLoading = false;
          this.router.navigate(['/recipes']);
        },
        error => {
          this.showErrorAlert(error);
          this.isLoading = false;
        }
      );
    }
  }

  private showErrorAlert(errorMsg: string) {
    const alertCmpFactory = this.componentResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainer = this.alertView.viewContainerRef;
    hostViewContainer.clear();

    const alertRef = hostViewContainer.createComponent(alertCmpFactory);
    alertRef.instance.message = errorMsg;

    this.closeSub = alertRef.instance.close.subscribe(() =>{
      this.closeSub.unsubscribe();
      hostViewContainer.clear();
    })
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe()
    }
  }
}
