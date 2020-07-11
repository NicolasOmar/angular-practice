import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-objectives',
  templateUrl: './show-objectives.component.html',
  styleUrls: ['./show-objectives.component.css']
})
export class ShowObjectivesComponent implements OnInit {
  @Input() title: string;
  @Input() mainObjectives: Array<string> = [];
  @Input() secondaryObjectives: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
