import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-assignment',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstAssignmentComponent implements OnInit {
  public assignmentConfig = {
    title: 'First Assignment',
    mainObjectives: [
      'Create two new Components (manually or with CLI): WarningAlert and SuccessAlert',
      'Output them beneath each other in the Main Component',
      'Output a warning or success message in the Component',
      'Style the Components appropriately (maybe some red/green text?)',
    ],
    secondaryObjectives: [
      'Use external or internal templates and styles!',
      'Fell free to create more components, nest them into each other or play around with different types of selectors'
    ]
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
