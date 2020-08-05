import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
// SERVICES
import { RecipeService } from 'src/app/recipes/recipe.service';
// MODELS
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private url = 'https://nicolasomar-recipe-project.firebaseio.com/recipes.json';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
  ) { }

  public storeRecipes() {
    this.http.put(this.url, this.recipeService.getRecipes())
      .subscribe(() => null)
  }

  public fetchRecipes() {
    return this.http.get<Array<Recipe>>(this.url)
      .pipe(
        map(recipes => recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients || []
          }
        })),
        tap(response => this.recipeService.setRecipes(response))
      )
  }
}
