import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-fifth-assignment',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent {
  constructor(
    public counterService: CounterService
  ) {}
}
