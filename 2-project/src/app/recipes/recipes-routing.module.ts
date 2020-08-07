import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// COMPONENTS
import { RecipesComponent } from './recipes.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
// GUARDS
import { AuthGuard } from '../auth/auth.guard';
// RESOLVERS
import { RecipeResolverService } from './recipe-resolver.service';

const appRoutes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: RecipeDisplayComponent
      }, {
        path: 'new',
        component: RecipeEditComponent
      }, {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService]
      }, {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipeResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule { }
