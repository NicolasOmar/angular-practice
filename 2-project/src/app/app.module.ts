import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// MODULES
import { AppRoutingModule } from './app-routing.module';
// START COMPONENTS
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './header/header.component';
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
// DIRECTIVES
import { DropdownDirective } from './shared/directives/dropdown.directive';

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
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ShoppingService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
