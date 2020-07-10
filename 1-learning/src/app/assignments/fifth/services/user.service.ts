import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
  public activeUsers = ['Max', 'Anna'];
  public inactiveUsers = ['Chris', 'Manu'];

  constructor(
    private counterService: CounterService
  ) {}

  changeUserState(id: number, changeToActive: boolean) {
    const actionsObj = {
      arrayToPush: changeToActive ? 'activeUsers' : 'inactiveUsers',
      arrayToSplice: changeToActive ? 'inactiveUsers' : 'activeUsers'
    };
    
    this[actionsObj.arrayToPush].push(this[actionsObj.arrayToSplice][id]);
    this[actionsObj.arrayToSplice].splice(id, 1);
    this.counterService.sumCounter();
  }
}