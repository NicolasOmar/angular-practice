import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Angular Practice | Learning';
  public assignments: string[] = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth'
  ];
  public examples: string[] = [
    'Servers',
    'Types',
    'Numbers',
    'Routes',
    'Observables'
  ];

  constructor() {}
}
