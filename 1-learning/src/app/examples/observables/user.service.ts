import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableUserService {
  public userActivated = new Subject<boolean>();

  constructor() { }
}
