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
    mainObjectives: [],
  };

  constructor(
    public counterService: CounterService
  ) {}
}
