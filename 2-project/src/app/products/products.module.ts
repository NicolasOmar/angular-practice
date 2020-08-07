import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// SHARED MODULE
import { SharedModule } from '../shared/shared.module';
// SHOPPING LIST COMPONENTS
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    ShoppingEditComponent,
    ShoppingListComponent,
  ]
})
export class ProductsModule { }
