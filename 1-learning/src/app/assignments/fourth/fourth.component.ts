import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-assignment',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  public assignmentConfig = {
    title: 'Fourt Assignment',
    mainObjectives: [
      'Create three new components: GameControl, Odd and Even',
      'The GameControl Component should have buttons to start and stop the game',
      'When starting the game, an event (holding a incrementing number) should get emmited each second (ref = setInterval())',
      'The event should be listenable from outside the component',
      'When stopping the game, no more events should get emitted (clearInterval(ref))',
      'A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers)',
      'Simply output Odd - NUMBER or Even - NUMBER in the two components',
      'Style the element (e.g. paragraph) holding your output text differently in both components'
    ]
  };
  public numbers: number[] = [];
  public ref;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleGame(runGame: boolean) {
    if (runGame) {
      this.ref = setInterval(() => this.numbers.push(this.numbers.length + 1), 1000)
    } else {
      clearInterval(this.ref)
    }
  }
}
