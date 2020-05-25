import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sectionOnScreen: string = "recipes";

  changeSection = text => this.sectionOnScreen = text

  title = 'project';
}
