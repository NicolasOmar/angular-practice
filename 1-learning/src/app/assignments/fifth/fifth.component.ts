import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-fifth-assignment',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent {
  public assignmentConfig = {
    title: 'Fifth Assignment',
    mainObjectives: [
      'Based on this base project, move the working features into services (removing event and property binding)',
      'Add a UserService to merge and optimize the existing methods into that service',
      'Add a counter services to count how many times the you switch users status and output the number into the app'
    ],
  };

  constructor(
    public counterService: CounterService
  ) {}
}
