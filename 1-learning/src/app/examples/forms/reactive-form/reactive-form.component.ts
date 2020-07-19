import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  private forbiddenNamesArray = ['Chris', 'Anna'];
  public genders = ['Male', 'Female', 'Other'];
  public secretQuestions = [{
      value: 'pet',
      text: 'Your first Pet?'
    }, {
      value: 'teacher',
      text: 'Your first teacher?'
    }
  ];
  public signupForm: FormGroup;
  public formDataObject;

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      gender: new FormControl(null, Validators.required),
      secret: new FormControl(this.secretQuestions[0].value),
      questionAnswer: new FormControl(null, [Validators.required]),
      hobbies: new FormArray([
        new FormControl(null, [Validators.required])
      ])
    })
  }

  public onSubmit() {
    if (this.signupForm.valid) {
      this.formDataObject = this.returnFormData(this.signupForm.getRawValue());
    }
  }

  public suggestUserName() {
    const suggestedUser = {
      username: 'Superuser',
      email: 'super@user.com',
      gender: 'Other',
      querstionAnswer: 'My black cat, "Felix"'
    };
    
    this.signupForm.patchValue(suggestedUser)
  }

  public addNewHobbie() {
    const control = new FormControl(null, [Validators.required]);
    (this.signupForm.controls.hobbies as FormArray).push(control)
  }

  private returnFormData(formData) {
    return Object.keys(formData).map(
      key => {
        return {
          name: key,
          value: key !== 'hobbies' ? formData[key] : formData[key].join(', ')
        }
      }
    )
  }

  private forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenNamesArray.indexOf(control.value) >= 0) {
      return { nameIsForbidden: true }
    }
    return null;
  }

  private forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            const result = control.value.endsWith('@test.com')
              ? { emailisForbidden: true }
              : null;
            resolve(result);
          }, 1000)
      }
    );
    return promise
  }
}
