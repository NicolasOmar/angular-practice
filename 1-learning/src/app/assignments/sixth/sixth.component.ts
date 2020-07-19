import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface formData {
  emailAddress: string,
  subscription: string,
  userPassword: string,
}

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent implements OnInit {
  @ViewChild('sixthForm') sixthForm: NgForm;
  public assignmentConfig = {
    title: 'Sixth Assignment',
    mainObjectives: [
      'Create a template-driven form using the listed fields below where you can submit it',
      'Display a warning message if the Form is invalid AND was touched. Display a warning message below each input if it´s invalid',
      'Upon submitting the form, you should simply print the Value of the Form to the Console. Optionally, display it in your template'
    ],
    secondaryObjectives: [
      'Mail address (should not be empty and should be an email address)',
      'A Dropdown which allows the user to select from three different Subscriptions ("Basic", "Advanced", "Pro") -> Set "Advanced" as Default',
      'A Password field (should not be empty)',
    ]
  };
  public subscriptions = ['Basic', 'Advanced', 'Pro'];
  public formResult: formData;
  
  constructor() { }

  ngOnInit(): void {
  }

  public onFormSubmit() {
    this.formResult = { ...this.sixthForm.value }
  }

}
