import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
// SERVICES
import { ShoppingService } from '../shopping.service';
// MODELS
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('editForm') editForm: NgForm;
  private sub: Subscription;
  public formIngredient: Ingredient;
  public editMode = false;
  public editedItemIndex: number;

  constructor(
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.sub = this.shoppingService.startedEdition.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editForm.form.patchValue({
          ...this.shoppingService.getIngredient(index)
        })
      }
    )
  }

  public onSubmit(form: NgForm) {
    const { value } = form;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppingService.onAddIngredient(newIngredient);
    }
    
    this.onClear();
  }
  
  public onDelete() {
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  public onClear(): void {
    this.editForm.form.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
