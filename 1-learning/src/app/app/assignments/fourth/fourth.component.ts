import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-assignment',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  numbers: number[] = [];
  ref;

  toggleGame(runGame: boolean) {
    if (runGame) {
      this.ref = setInterval(() => this.numbers.push(this.numbers.length + 1), 1000)
    } else {
      clearInterval(this.ref)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
