import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app/app.component';
import { ServerComponent } from './app/examples/servers/server/server.component';
import { ServersComponent } from './app/examples/servers/servers.component';
import { TypesComponent } from './app/examples/types/types.component';
import { FirstAssignmentComponent } from './app/assignments/first-assignment/first-assignment.component';
import { SecondAssignmentComponent } from './app/assignments/second-assignment/second-assignment.component';
import { ThirdAssignmentComponent } from './app/assignments/third-assignment/third-assignment.component';
import { WarningAlertComponent } from './app/assignments/first-assignment/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './app/assignments/first-assignment/success-alert/success-alert.component';
import { CockpitComponent } from './app/examples/types/cockpit/cockpit.component';
import { ServerElementComponent } from './app/examples/types/server-element/server-element.component';

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
