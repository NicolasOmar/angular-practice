import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  public formIngredient: Ingredient;

  constructor(
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.setNewIngredient();

    this.shoppingService.selectIngredient.subscribe(
      (selected: Ingredient) => this.formIngredient = selected
    )
  }

  public addIngredient() {
    if (this.formIngredient.name !== null) {
      this.shoppingService.onAddIngredient(this.formIngredient);
      this.setNewIngredient();
    }
  }
  
  public deleteIngredient() {
    this.shoppingService.onDeleteIngredient(this.formIngredient);
    this.setNewIngredient();
  }

  public setNewIngredient(): void {
    this.formIngredient = new Ingredient(null, null);
  }
}
