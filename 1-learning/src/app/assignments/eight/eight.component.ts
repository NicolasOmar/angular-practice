import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eight',
  templateUrl: './eight.component.html',
  styleUrls: ['./eight.component.css']
})
export class EightComponent implements OnInit {
  public assignmentConfig = {
    title: 'First Assignment',
    mainObjectives: [
      'Create a pipe to reverse a string (reverse pipe)',
      'Create a pipe to sort the aray for the name by the name of the instance'
    ]
  }
  public appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });
  public servers = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  public filteredStatus = '';
  

  constructor() { }

  ngOnInit(): void {
  }

  public getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
  public onAddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'New Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    });
  }
}
