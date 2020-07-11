import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-assignment',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdAssignmentComponent implements OnInit {
  public assignmentConfig = {
    title: 'Third Assignment',
    mainObjectives: [
      'Add A button which says <Display Details>',
      'Add a paragraph with any content of your choice (e.g. <Secret Password = tuna>)',
      'Toogle the displaying og that paragraph with the button created in the first step',
      'Log all button clicks in an array and output that array below the secret paragraph (maybe log a timestamp or simply an incrementing number)',
      'Starting a the 5th log item, give all future log item a blue background (via ngStyle) and white color (ngClass)'
    ]
  };
  public secretText: string = 'Secret Password = tuna';
  public showSecretText: boolean = false;
  public timesClicked: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public toogleSecretText() {
    this.showSecretText = !this.showSecretText
    this.timesClicked = [...this.timesClicked, ++this.timesClicked.length]
  }

  public getBackgroundColor(number) {
    return number > 4 ? 'blue' : 'white'
  }
}
