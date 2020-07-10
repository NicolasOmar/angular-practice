import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();

    this.shoppingService.addIngredient.subscribe(
      (newIngredients: Array<Ingredient>) => this.ingredients = newIngredients
    )
  }

  selectIngredient(selected: Ingredient) {
    this.shoppingService.onSelectIngredient(selected)
  }
}
