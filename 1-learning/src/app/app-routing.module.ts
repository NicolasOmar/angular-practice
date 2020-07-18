import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
// GUARD
import { AuthGuard } from './examples/routes/auth.guard';
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
import { RouteUsersComponent } from "./examples/routes/users/users.component";
import { RouteServersComponent } from './examples/routes/servers/servers.component';
import { RouteUserComponent } from './examples/routes/users/user/user.component';
import { RouteServerComponent } from './examples/routes/servers/server/server.component';
import { EditServerComponent } from './examples/routes/servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './examples/routes/page-not-found/page-not-found.component';
import { ObservablesComponent } from './examples/observables/observables.component';
import { ObsHomeComponent } from './examples/observables/home/home.component';
import { ObsUserComponent } from './examples/observables/user/user.component';
import { FormComponent } from './examples/forms/form.component';
import { SixthComponent } from './assignments/sixth/sixth.component';

const appRoutes: Routes = [
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
      }, {
        path: 'sixth',
        component: SixthComponent
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
            component: RouteServersComponent,
            canActivateChild: [AuthGuard],
            children: [
              {
                path: ':id',
                component: RouteServerComponent
              }, {
                path: ':id/edit',
                component: EditServerComponent
              }
            ]
          }, {
            path: 'users',
            component: RouteUsersComponent
          }, {
            path: 'users/:id/:name',
            component: RouteUserComponent
          }
        ]
      }, {
        path: 'observables',
        component: ObservablesComponent,
        children: [
          {
            path: '',
            component: ObsHomeComponent
          }, {
            path: 'user/:id',
            component: ObsUserComponent
          }
        ]
      }, {
        path: 'forms',
        component: FormComponent
      }
    ]
  }, {
    path: 'not-found',
    component: PageNotFoundComponent
  }, {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}