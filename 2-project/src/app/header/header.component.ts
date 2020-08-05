import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/services/data-storage.service';

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

  constructor(
    private storageService: DataStorageService
  ) { }

  ngOnInit(): void {
  }

  public onSaveData() {
    this.storageService.storeRecipes();
  }

  public onFetchData() {
    this.storageService.fetchRecipes().subscribe(() => null);
  }
}
