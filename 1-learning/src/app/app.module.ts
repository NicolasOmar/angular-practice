import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app/app.component';
import { ServerComponent } from './app/examples/servers/server/server.component';
import { ServersComponent } from './app/examples/servers/servers.component';
import { TypesComponent } from './app/examples/types/types.component';
import { FirstAssignmentComponent } from './app/assignments/first/first.component';
import { SecondAssignmentComponent } from './app/assignments/second/second.component';
import { ThirdAssignmentComponent } from './app/assignments/third/third.component';
import { WarningAlertComponent } from './app/assignments/first/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './app/assignments/first/success-alert/success-alert.component';
import { CockpitComponent } from './app/examples/types/cockpit/cockpit.component';
import { ServerElementComponent } from './app/examples/types/server-element/server-element.component';
import { FourthComponent } from './app/assignments/fourth/fourth.component';
import { GameControlComponent } from './app/assignments/fourth/game-control/game-control.component';
import { OddComponent } from './app/assignments/fourth/odd/odd.component';
import { EvenComponent } from './app/assignments/fourth/even/even.component';

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
    EvenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
