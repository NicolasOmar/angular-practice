import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
// ROUTING MODULE
import { appRoutes } from './app-routing.module';
// ASSIGNMENTS COMPONENTS
import { AppComponent } from './app/app.component';
import { FirstAssignmentComponent } from './assignments/first/first.component';
import { SecondAssignmentComponent } from './assignments/second/second.component';
import { ThirdAssignmentComponent } from './assignments/third/third.component';
import { WarningAlertComponent } from './assignments/first/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './assignments/first/success-alert/success-alert.component';
import { FourthComponent } from './assignments/fourth/fourth.component';
import { GameControlComponent } from './assignments/fourth/game-control/game-control.component';
import { OddComponent } from './assignments/fourth/odd/odd.component';
import { EvenComponent } from './assignments/fourth/even/even.component';
import { FifthComponent } from './assignments/fifth/fifth.component';
import { ActiveUsersComponent } from './assignments/fifth/active-users/active-users.component';
import { InactiveUsersComponent } from './assignments/fifth/inactive-users/inactive-users.component';
// EXAMPLES COMPONENTS
import { ServerComponent } from './examples/servers/server/server.component';
import { ServersComponent } from './examples/servers/servers.component';
import { NumbersComponent } from './examples/numbers/numbers.component';
import { CockpitComponent } from './examples/types/cockpit/cockpit.component';
import { TypesComponent } from './examples/types/types.component';
import { ServerElementComponent } from './examples/types/server-element/server-element.component';
import { RoutesComponent } from './examples/routes/routes.component';
import { HomeComponent } from './examples/routes/home/home.component';
import { RouteUsersComponent } from './examples/routes/users/users.component';
import { UserComponent } from './examples/routes/users/user/user.component';
import { RouteServersComponent } from './examples/routes/servers/servers.component';
import { EditServerComponent } from './examples/routes/servers/edit-server/edit-server.component';
import { RouteServerComponent } from './examples/routes/servers/server/server.component';
// DIRECTIVES
import { BasicHighlightDirective } from './examples/numbers/basic-highlight/basic-highlight.directive';
// SERVICES
import { CounterService } from './assignments/fifth/services/counter.service';
import { UserService } from './assignments/fifth/services/user.service';
import { ServersService } from './examples/routes/servers/servers.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TypesComponent,
    FirstAssignmentComponent,
    SecondAssignmentComponent,
    ThirdAssignmentComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    CockpitComponent,
    ServerElementComponent,
    FourthComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    NumbersComponent,
    BasicHighlightDirective,
    FifthComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    RoutesComponent,
    HomeComponent,
    RouteUsersComponent,
    RouteServersComponent,
    UserComponent,
    EditServerComponent,
    RouteServerComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CounterService,
    UserService,
    ServersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
