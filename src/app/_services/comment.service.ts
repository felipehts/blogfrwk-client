import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseUrl = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  createComment(comment: any): Observable<any> {
    console.log(comment);
    return this.http.post(baseUrl + 'comment/', {
      idPost: comment.idPost,
      description: comment.description
    }, httpOptions);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete(baseUrl + 'comment/' + id, { responseType: 'text' });
  }

  getAllByIdPost(idPost: number): Observable<any> {
    return this.http.get(baseUrl + 'comments/' + idPost, { responseType: 'json' });
  }

}
