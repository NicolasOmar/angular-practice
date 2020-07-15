import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ObservableUserService } from '../user.service';

@Component({
  selector: 'app-obs-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class ObsUserComponent implements OnInit {
  id: number;

  constructor(
    private route: ActivatedRoute,
    private userService: ObservableUserService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  onActivate() {
    this.userService.userActivated.next(true)
  }
}
