import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// SERVICES
import { ShoppingService } from '../products/shopping.service';
import { RecipeService } from '../recipes/recipe.service';
// INTERCEPTORS
import { AuthInterceptorService } from '../auth/auth-interceptor.service';


@NgModule({
  declarations: [],
  providers: [
    ShoppingService,
    RecipeService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
