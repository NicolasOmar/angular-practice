import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// SERVICES
import { ShoppingService } from '../shopping.service';
// MODELS
import { Ingredient } from '../../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public ingredients: Ingredient[];

  constructor(
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();

    this.sub = this.shoppingService.addIngredient.subscribe(
      (newIngredients: Array<Ingredient>) => this.ingredients = newIngredients
    )
  }

  onSelectIngredient(index: number) {
    this.shoppingService.startedEdition.next(index)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
