import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// SERVICES
import { RecipeService } from './recipe.service';
// MODELS
import { Recipe } from '../shared/models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public selectedRecipe: Recipe;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.sub = this.recipeService.selectedRecipe.subscribe(
      (recipeSelection: Recipe) => this.selectedRecipe = recipeSelection
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
