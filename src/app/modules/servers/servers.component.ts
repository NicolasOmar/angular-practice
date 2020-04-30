import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  canAddServer = false
  firstServerName = ''
  secondServerName = ''

  onUpdateServerName = event => this.firstServerName = event.target.value
  
  constructor() { }

  ngOnInit(): void {
  }

}
