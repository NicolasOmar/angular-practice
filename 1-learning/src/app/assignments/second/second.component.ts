import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-assignment',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondAssignmentComponent implements OnInit {
  userName: string = '';

  constructor() { }

  clearName = () => this.userName = ''

  ngOnInit(): void {
  }

}
