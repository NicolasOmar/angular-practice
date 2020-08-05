import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
// MODELS
import { Post } from './post.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://angular-api-7f672.firebaseio.com/posts.json';

  constructor(
    private http: HttpClient
  ) { }

  public createAndStore(title: string, content: string) {
    this.http.post(this.url, { title, content })
      .subscribe(response => {
        console.log(response);
      });
  }

  public fetchPosts() {
    return this.http.get<{[key: string]: Post }>(this.url)
      .pipe(
        map((preResponse) => {
            return preResponse
            ? Object.keys(preResponse).map(key => {
              return {
                ...preResponse[key],
                id: key
              }
            })
            : [];
          }
        ),
        catchError(errorResponse => {
          return throwError(errorResponse)
        })
      )
  }

  public clearPosts() {
    return this.http.delete(this.url)
  }
}
