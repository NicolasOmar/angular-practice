import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-assignment',
  templateUrl: './second-assignment.component.html',
  styleUrls: ['./second-assignment.component.css']
})
export class SecondAssignmentComponent implements OnInit {
  userName: string = '';

  constructor() { }

  clearName = () => this.userName = ''

  ngOnInit(): void {
  }

}
