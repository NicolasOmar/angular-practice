import { Component, OnInit } from '@angular/core';
// SERVICES
import { PostsService } from './posts.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  public loadedPosts = [];
  public error = null;

  constructor(
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postService.createAndStore(postData.title, postData.content);
  }

  onFetchPosts() {
    this.postService.fetchPosts()
      .subscribe(
        response => this.loadedPosts = response,
        error => this.error = error.message
      );
  }

  onClearPosts() {
    this.postService.clearPosts()
      .subscribe(() => this.loadedPosts = [])
  }

  clearError() {
    this.error = null
  }
}
