import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
// COMPONENTS
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AlertComponent } from './components/alert/alert.component';
// DIRECTIVES
import { DropdownDirective } from './directives/dropdown.directive';
import { PlaceholderDirective } from './directives/placeholder.directive';

@NgModule({
  declarations: [
    DropdownDirective,
    SpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownDirective,
    SpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ]
})
export class SharedModule {}