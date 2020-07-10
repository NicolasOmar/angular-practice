import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
// COMPONENTS
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
import { ServerComponent } from './examples/servers/server/server.component';
import { ServersComponent } from './examples/servers/servers.component';
import { NumbersComponent } from './examples/numbers/numbers.component';
import { CockpitComponent } from './examples/types/cockpit/cockpit.component';
import { TypesComponent } from './examples/types/types.component';
import { ServerElementComponent } from './examples/types/server-element/server-element.component';
// DIRECTIVES
import { BasicHighlightDirective } from './examples/numbers/basic-highlight/basic-highlight.directive';

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
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
