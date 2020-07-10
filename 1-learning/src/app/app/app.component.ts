import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Practice | Learning';
  assignments: string[] = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth'
  ]
  examples: string[] = [
    'Servers',
    'Types',
    'Numbers'
  ]
  selected: string = this.assignments[0]

  changeModule = text => this.selected = text
}
