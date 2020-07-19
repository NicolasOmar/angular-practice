import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.css']
})
export class SeventhComponent implements OnInit {
  private forbiddenWord = 'Test';
  public assignmentConfig = {
    title: 'Seventh Assignment',
    mainObjectives: [
      'Create a reactive form using the listed fields below where you can submit it',
      'Add your own Validator which doesn´t allow "Test" as a Project Name',
      'Also implement that Validator as an async Validator (replace the other one)',
      'Upon submitting the form, simply print the value to the console',
    ],
    secondaryObjectives: [
      'Project Name (should not be empty)',
      'Mail (should not be a empty and a valid email)',
      'Project Status Dropdown, with three values: "Stable", "Critical", "Finished"'
    ]
  }
  public statusList = ['Stable', 'Critical', 'Finished'];
  public seventhFormGroup: FormGroup;
  public formDataObject;

  constructor() { }

  ngOnInit(): void {
    this.seventhFormGroup = new FormGroup({
      projectName: new FormControl(null, [Validators.required], this.forbiddenNameAsync.bind(this)),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(null, [Validators.required]),
    })
  }

  public onSubmit() {
    if (this.seventhFormGroup.valid) {
      this.formDataObject = this.returnFormData(this.seventhFormGroup.getRawValue());
    }
  }

  private forbiddenName(control: FormControl): {[s: string]: boolean} {
    return this.returnForbiddenAnswer(control.value === this.forbiddenWord);
  }

  private forbiddenNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            resolve(this.returnForbiddenAnswer(control.value === this.forbiddenWord)),
            2000
          }
        );
      }
    );
    return promise;
  }

  private returnForbiddenAnswer(response) {
    return response
      ? { forbiddenName: true }
      : null
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
}
