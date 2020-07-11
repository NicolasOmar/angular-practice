import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-assignment',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondAssignmentComponent implements OnInit {
  public assignmentConfig = {
    title: 'Second Assignment',
    mainObjectives: [
      'Add a Input field which updates a property [username] via Two-Way-Binding',
      'Output the username property via String interpolation (in a paragraph below the input)',
      'Add a button which may only be clicked if the username is NOT an empty string',
      'Upon clicking the button, the susername should be reset to an empty string',
    ]
  };
  public userName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public clearName() {
    this.userName = ''
  }
}
