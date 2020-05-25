import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// IMPORT MODEL
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('First recipe', 'A new recipe', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg')
  ];

  selectRecipe = (recipe: Recipe) => this.selectedRecipe.emit(recipe)

  constructor() { }

  ngOnInit(): void {
  }

}
