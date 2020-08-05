import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
// SERVICES
import { ShoppingService } from '../shopping-list/shopping.service';
// MODELS
import { Recipe } from '../shared/models/recipe.model';
import { Ingredient } from '../shared/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [];
  public recipesChanges = new BehaviorSubject<Array<Recipe>>([]);
  public selectedRecipe = new Subject<Recipe>();

  constructor(
    private shoppingService: ShoppingService
  ) { }

  public addRecipe(recipe: Recipe) {
    const recipes = [...this.recipes, recipe];
    this.updateChanges(recipes);
  }

  public updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.updateChanges(this.recipes);
  }

  public deteleRecipe(index: number) {
    const reducedRecipes = this.recipes.filter((item, i) => i !== index);
    this.updateChanges(reducedRecipes)
  }

  public getRecipes() {
    return [...this.recipes];
  }

  public getRecipe(index: number) {
    return this.recipes[index];
  }

  public setRecipes(recipes: Array<Recipe>) {
    this.updateChanges(recipes)
  }

  public addIngredientsToShoppingList(ingredients: Array<Ingredient>) {
    this.shoppingService.addRecipeIngredients(ingredients);
  }

  private updateChanges(recipeArray: Array<Recipe>) {
    this.recipes = recipeArray;
    this.recipesChanges.next(recipeArray);
  }
}
