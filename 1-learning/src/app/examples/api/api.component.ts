import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  private url = 'https://angular-api-7f672.firebaseio.com/posts.json';
  public loadedPosts = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.http.post(this.url, postData)
      .subscribe(response => {
        console.log(response);
      });
  }

  onFetchPosts() {
    this.http.get(this.url).subscribe(response => {
      this.loadedPosts = Object.keys(response).map(key => {
        return {
          ...response[key],
          key
        }
      });
      console.warn(this.loadedPosts)
    })
  }

  onClearPosts() {
    // Send Http request
  }
}
