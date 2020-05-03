import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-assignment',
  templateUrl: './third-assignment.component.html',
  styleUrls: ['./third-assignment.component.css']
})
export class ThirdAssignmentComponent implements OnInit {
  secretText: string = 'Secret Password = tuna';
  showSecretText: boolean = false;
  timesClicked: number[] = [];

  toogleSecretText = () => {
    this.showSecretText = !this.showSecretText
    this.timesClicked = [...this.timesClicked, ++this.timesClicked.length]
  }

  getBackgroundColor = number => number > 4 ? 'blue' : 'white'

  constructor() { }

  ngOnInit(): void {
  }

}
