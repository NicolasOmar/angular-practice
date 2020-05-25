import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() changeSection = new EventEmitter<string>();
  
  links = [{
    label: 'Recipes',
    link: 'recipes'
  },
  {
    label: 'Shopping List',
    link: 'shopping-list'
  }]
  
  goToLink = text => this.changeSection.emit(text)

  constructor() { }

  ngOnInit(): void {
  }

}
