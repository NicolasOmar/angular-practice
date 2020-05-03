import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular exercises';
  exercises: string[] = [
    'First',
    'Second',
    'Third',
    'Servers'
  ]
  selected: string = this.exercises[0]

  changeAssignment = text => this.selected = text
}
