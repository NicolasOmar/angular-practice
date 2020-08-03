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
  private recipes: Recipe[] = [
    new Recipe(
      'First recipe',
      'A new recipe',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg',
      [
        new Ingredient('Meat', 22),
        new Ingredient('Pineaple', 15)
      ]
    ),
    new Recipe(
      'Second recipe',
      'A repeated recipe',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg',
      [
        new Ingredient('Meat', 10)
      ]
    )
  ];
  public recipesChanges = new BehaviorSubject<Array<Recipe>>(this.recipes);
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

  public getRecipe(index: number) {
    return this.recipes[index];
  }

  public addIngredientsToShoppingList(ingredients: Array<Ingredient>) {
    this.shoppingService.addRecipeIngredients(ingredients);
  }

  private updateChanges(recipeArray: Array<Recipe>) {
    this.recipes = recipeArray;
    this.recipesChanges.next(recipeArray);
  }
}
