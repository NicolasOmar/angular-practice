import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

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
        new Ingredient('Meat', 22)
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
  public selectedRecipe = new EventEmitter<Recipe>();

  constructor(
    private shoppingService: ShoppingService
  ) { }

  public getRecipes() {
    return [...this.recipes];
  }

  public getRecipe(index: number) {
    return this.recipes[index];
  }

  public addIngredientsToShoppingList(ingredients: Array<Ingredient>) {
    this.shoppingService.addRecipeIngredients(ingredients);
  }
}
