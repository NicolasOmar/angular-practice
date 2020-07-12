import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// SERVICES
import { RecipeService } from '../recipe.service';
// MODELS
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {  
  public recipes: Recipe[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  public goToNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }
}
