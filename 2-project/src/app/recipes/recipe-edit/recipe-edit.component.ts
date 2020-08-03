import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public id: number;
  public editMode: boolean;
  public recipeForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      ({ id }) => {
        this.id = +id;
        this.editMode = id !== null && !isNaN(id);
        this.initForm();
      }
    );
  }

  get controls() {
    return this.getIngredietsForm().controls;
  }

  public onSubmit() {
    const {
      name,
      imagePath,
      description,
      ingredients
    } = this.recipeForm.getRawValue();
    const recipe = new Recipe(name, description, imagePath, ingredients);
    
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, recipe);
    } else {
      this.recipeService.addRecipe(recipe);
    }
    
    this.onCancel();
  }

  public onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  onAddIngredient() {
    this.getIngredietsForm().push(
      this.fb.group({
        name: this.fb.control(null, [Validators.required]),
        amount: this.fb.control(null, [Validators.required])
      })
    )
  }

  public onRemoveIngredient(index: number) {
    this.getIngredietsForm().removeAt(index)
  }

  private initForm() {
    const recipe: any = this.editMode
      ? { ...this.recipeService.getRecipe(this.id) }
      : {};

    this.recipeForm = this.fb.group({
      name: this.fb.control(recipe.name || null, [Validators.required]),
      imagePath: this.fb.control(recipe.imagePath || null, [Validators.required]),
      description: this.fb.control(recipe.description || null, [Validators.required]),
      ingredients: this.fb.array(recipe.ingredients || [])
    })
  }

  private getIngredietsForm() {
    return (<FormArray>this.recipeForm.get('ingredients'))
  }

  ngOnDestroy() {
    this.sub.unsubscribe
  }
}
