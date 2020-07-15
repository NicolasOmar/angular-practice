import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // USING VIEWCHILD ALTERNATIVE
  // @ViewChild('formData') formData: NgForm;

  public answer = '';
  public genders = ['Male', 'Female', 'Other']

  public suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // USING TEMPLATE APPROACH
  public onSubmit(formData: NgForm) {
    console.warn(formData.controls)
  }

  // USING VIEWCHILD ALTERNATIVE
  // public onSubmit() {
  //   console.warn(this.formData)
  // }
}
