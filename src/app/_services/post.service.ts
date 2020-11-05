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
}    