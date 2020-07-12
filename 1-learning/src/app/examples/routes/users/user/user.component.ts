import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class RouteUserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const { id , name } = this.route.snapshot.params;
    this.user = { id, name }
  }

}
