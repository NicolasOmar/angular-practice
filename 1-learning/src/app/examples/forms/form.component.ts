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
  public genders = ['Male', 'Female', 'Other'];
  public data;

  public suggestUserName(formData: NgForm) {
    const suggestedUser = {
      username: 'Superuser',
      email: 'super@user.com',
      gender: 'Other',
      querstionAnswer: 'My black cat, "Felix"'
    };

    formData.form.patchValue(suggestedUser)
  }

  // USING TEMPLATE APPROACH
  public onSubmit(formData: NgForm) {
    this.data = this.returnFormData(formData.controls);
  }

  // USING VIEWCHILD ALTERNATIVE
  // public onSubmit() {
  //   console.warn(this.formData)
  // }

  public returnFormData(formData) {
    return Object.keys(formData).map(
      key => {
        return {
          name: key,
          value: formData[key].value
        }
      }
    )
  }
}
