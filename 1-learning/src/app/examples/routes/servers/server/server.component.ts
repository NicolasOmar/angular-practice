import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routes-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class RouteServerComponent implements OnInit {
  public server: {id: number, name: string, status: string};
  public allowEditServer: boolean;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.server = this.serversService.getServer(+id);

    this.route.params.subscribe(
      ({ id }) => id && (this.server = this.serversService.getServer(+id))
    );

    this.route.queryParams.subscribe(
      ({ allowEdit }) => this.allowEditServer = allowEdit == true
    )
  }

  editServer() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }
}
