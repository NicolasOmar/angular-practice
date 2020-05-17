import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app/app.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TypesComponent } from './types/types.component';
import { FirstAssignmentComponent } from './first-assignment/first-assignment.component';
import { SecondAssignmentComponent } from './second-assignment/second-assignment.component';
import { ThirdAssignmentComponent } from './third-assignment/third-assignment.component';
import { WarningAlertComponent } from './first-assignment/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './first-assignment/success-alert/success-alert.component';
import { CockpitComponent } from './types/cockpit/cockpit.component';
import { ServerElementComponent } from './types/server-element/server-element.component';

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
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
