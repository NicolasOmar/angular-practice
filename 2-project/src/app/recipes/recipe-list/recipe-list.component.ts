import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// IMPORT MODEL
import { Recipe } from '../../shared/models/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  
  public recipes: Recipe[];

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  selectRecipe = (recipe: Recipe) => this.recipeService.selectRecipe(recipe);
}
