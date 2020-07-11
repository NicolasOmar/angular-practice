import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
  }

  public addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients)
  }

  public test() {}

}
