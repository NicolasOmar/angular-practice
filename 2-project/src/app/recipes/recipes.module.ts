import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// MODULES
import { SharedModule } from '../shared/shared.module';
// RECIPES COMPONETS
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    RecipeDisplayComponent,
    RecipeEditComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    RecipesRoutingModule
  ],
  exports: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    RecipeDisplayComponent,
    RecipeEditComponent
  ]
})
export class RecipesModule { }
