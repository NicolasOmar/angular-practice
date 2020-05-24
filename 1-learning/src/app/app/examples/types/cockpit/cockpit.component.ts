import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // USING TWO WAY BINDING
  // newServerName = '';
  // newServerContent = '';
  
  // USING LOCAL REFERENCE AND VIEWCHILD
  @ViewChild('newServerContent') newServerContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(newServerName: HTMLInputElement) {
    this.serverCreated.emit(
      {
        serverName: newServerName.value, // GETTING THE VALUE USING LOCAL REFERENCE ONLY
        serverContent: this.newServerContent.nativeElement.value // GETTING THE VALUE USING LOCAL REFERENCE + VIEWCHILD
      }
    )
  }

  onAddBlueprint(newServerName: HTMLInputElement) {
    this.blueprintCreated.emit(
      {
        serverName: newServerName.value, // GETTING THE VALUE USING LOCAL REFERENCE ONLY
        serverContent: this.newServerContent.nativeElement.value // GETTING THE VALUE USING LOCAL REFERENCE + VIEWCHILD
      }
    )
  }

}
