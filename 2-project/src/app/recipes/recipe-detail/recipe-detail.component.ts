import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
// SERVICES
import { RecipeService } from '../recipe.service';
// MODELS
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private recipeId: number;
  public selectedRecipe: Recipe;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      ({ id }) => {
        this.recipeId = +id;
        this.selectedRecipe = this.recipeService.getRecipe(+id)
      }
    )
  }

  public addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
    this.router.navigate(['/shopping-list']);
  }

  public onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

  public onDeleteRecipe() {
    this.recipeService.deteleRecipe(this.recipeId);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
