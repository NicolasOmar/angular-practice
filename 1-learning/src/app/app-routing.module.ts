import { Routes } from "@angular/router";
// ASSIGNMENTS COMPONENTS
import { FirstAssignmentComponent } from "./assignments/first/first.component";
import { SecondAssignmentComponent } from "./assignments/second/second.component";
import { ThirdAssignmentComponent } from "./assignments/third/third.component";
import { FourthComponent } from "./assignments/fourth/fourth.component";
import { FifthComponent } from "./assignments/fifth/fifth.component";
// EXAMPLES COMPONENTS
import { ServersComponent } from "./examples/servers/servers.component";
import { TypesComponent } from "./examples/types/types.component";
import { NumbersComponent } from "./examples/numbers/numbers.component";
import { RoutesComponent } from "./examples/routes/routes.component";
import { HomeComponent } from "./examples/routes/home/home.component";
import { RouteServerComponent } from "./examples/routes/servers/server/server.component";
import { RouteUsersComponent } from "./examples/routes/users/users.component";

export const appRoutes: Routes = [
  {
    path: '',
    component: FirstAssignmentComponent
  }, {
    path: 'assignment',
    children: [
      {
        path: 'first',
        component: FirstAssignmentComponent
      }, {
        path: 'second',
        component: SecondAssignmentComponent
      }, {
        path: 'third',
        component: ThirdAssignmentComponent
      }, {
        path: 'fourth',
        component: FourthComponent
      }, {
        path: 'fifth',
        component: FifthComponent
      }
    ]
  }, {
    path: 'example',
    children: [
      {
        path: 'servers',
        component: ServersComponent
      }, {
        path: 'types',
        component: TypesComponent
      }, {
        path: 'numbers',
        component: NumbersComponent
      }, {
        path: 'routes',
        component: RoutesComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent
          }, {
            path: 'servers',
            component: RouteServerComponent
          }, {
            path: 'users',
            component: RouteUsersComponent
          },
        ]
      }
    ]
  }
]