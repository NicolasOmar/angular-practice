import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/services/data-storage.service';
import { RecipeService } from './recipe.service';
import { Recipe } from '../shared/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Array<Recipe>> {
  constructor(
    private storageService: DataStorageService,
    private recipesService: RecipeService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    const appRecipes = this.recipesService.getRecipes();
    
    return appRecipes.length
      ? appRecipes
      : this.storageService.fetchRecipes();
  }
}