import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// COMPONENTS
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// GUARDS
import { AuthGuard } from '../auth/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
