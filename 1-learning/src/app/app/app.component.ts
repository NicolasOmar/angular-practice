import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Practice | Learning';
  exercises: string[] = [
    'First',
    'Second',
    'Third',
    'Fourth'
  ]
  examples: string[] = [
    'Servers',
    'Types'
  ]
  selected: string = this.exercises[0]

  changeModule = text => this.selected = text
}
