import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startGame = new EventEmitter<boolean>();
  @Output() stopGame = new EventEmitter<boolean>();

  startingGame = () => this.stopGame.emit(true)

  stoppingGame = () => this.stopGame.emit(false)

  constructor() { }

  ngOnInit(): void {
  }

}
