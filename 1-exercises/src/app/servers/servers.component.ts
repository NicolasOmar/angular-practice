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
  isServerCreated = false
  servers = ['Dev', 'Testing', 'Staging', 'Production']

  onUpdateServerName = event => this.firstServerName = event.target.value
  
  createServer = () => this.isServerCreated = Boolean(this.firstServerName.length || this.secondServerName.length)

  constructor() {
    setTimeout(() => this.canAddServer = true, 1000)
  }

  ngOnInit(): void {
  }

}
