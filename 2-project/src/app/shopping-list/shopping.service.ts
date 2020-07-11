import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 6),
    new Ingredient('Onions', 4)
  ];
  public addIngredient = new EventEmitter<Array<Ingredient>>();
  public selectIngredient = new EventEmitter<Ingredient>();
  
  constructor() { }

  public getIngredients(): Array<Ingredient> {
    return [...this.ingredients]
  }

  public onAddIngredient(newIngredient: Ingredient) {
    const updatedArray = [...this.ingredients, newIngredient];
    this.updateIngredients(updatedArray);
  }

  public onDeleteIngredient(selected: Ingredient) {
    const reducedArray = this.ingredients.filter(item => item.name !== selected.name);
    this.updateIngredients(reducedArray);
  }

  public onSelectIngredient(selected: Ingredient) {
    this.selectIngredient.emit(selected)
  }

  public addRecipeIngredients(recipeIng: Array<Ingredient>) {
    const composedArray = [...this.ingredients, ...recipeIng];
    this.updateIngredients(composedArray);
  }

  private updateIngredients(newIngredients: Array<Ingredient>) {
    this.addIngredient.emit(newIngredients);
    this.ingredients = newIngredients;
  }
}
