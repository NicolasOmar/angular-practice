import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
// MODULES
import { AppRoutingModule } from './app-routing.module';
// START COMPONENTS
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './header/header.component';
// OTHER COMPONENTS
import { AuthComponent } from './auth/auth.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { AlertComponent } from './shared/components/alert/alert.component';
// RECIPES COMPONETS
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDisplayComponent } from './recipes/recipe-display/recipe-display.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// SHOPPING LIST COMPONENTS
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
// SERVICES
import { ShoppingService } from './shopping-list/shopping.service';
import { RecipeService } from './recipes/recipe.service';
// INTERCEPTORS
import { AuthInterceptorService } from './auth/auth-interceptor.service';
// DIRECTIVES
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { PlaceholderDirective } from './shared/directives/placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeDisplayComponent,
    RecipeEditComponent,
    AuthComponent,
    SpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ShoppingService,
    RecipeService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
