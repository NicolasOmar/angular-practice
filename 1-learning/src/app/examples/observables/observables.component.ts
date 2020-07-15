import { Component, OnInit } from '@angular/core';
import { ObservableUserService } from './user.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  public userActivated: boolean = false;

  constructor(
    private userService: ObservableUserService
  ) {}

  ngOnInit() {
    this.userService.userActivated.subscribe(
      (hasBeenActivated: boolean) => this.userActivated = hasBeenActivated
    )
  }
}
