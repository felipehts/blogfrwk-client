import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.http.get(this.baseUrl + 'posts', { responseType: 'json' });
  }

  getPostById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'post/' + id, { responseType: 'json' });
  }

  createPost(value: any): Observable<any> {
    console.log(value);
    return this.http.post(this.baseUrl + 'post', value, { responseType: 'json' });
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'post/' + id, { responseType: 'text' });
  }

  updatePost(value: any): Observable<any> {
    console.log(value);
    return this.http.put(this.baseUrl + 'post', value, { responseType: 'json' });
  }
}    