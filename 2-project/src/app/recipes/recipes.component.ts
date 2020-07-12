import { Component, OnInit } from '@angular/core';
// SERVICES
import { RecipeService } from './recipe.service';
// MODELS
import { Recipe } from '../shared/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  public selectedRecipe: Recipe;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(
      (recipeSelection: Recipe) => this.selectedRecipe = recipeSelection
    )
  }

}
