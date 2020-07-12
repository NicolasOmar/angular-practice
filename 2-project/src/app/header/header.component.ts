import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  
  public links = [
    {
      label: 'Recipes',
      link: 'recipes'
    },
    {
      label: 'Shopping List',
      link: 'shopping-list'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
