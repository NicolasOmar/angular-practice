import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// SERVICES
import { DataStorageService } from '../shared/services/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public links = [
    {
      label: 'Recipes',
      link: 'recipes'
    }, {
      label: 'Authenticate',
      link: 'auth'
    }, {
      label: 'Shopping List',
      link: 'shopping-list'
    }
  ];
  public isAuthenticated = false;

  constructor(
    private authService: AuthService,
    private storageService: DataStorageService
  ) { }

  ngOnInit(): void {
    this.sub = this.authService.user.subscribe(
      user => this.isAuthenticated = !!user
    )
  }

  public onSaveData() {
    this.storageService.storeRecipes();
  }

  public onFetchData() {
    this.storageService.fetchRecipes();
  }

  public onLogOut() {
    this.authService.logOut();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
