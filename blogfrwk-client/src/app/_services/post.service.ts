import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = 'http://localhost:8080/api/post/';

  constructor(private http: HttpClient) { }

  getPostByToken(token: string): Observable<any> {
    return this.http.get('http://localhost:8080/api/post/list/2');
  }

  getAllPosts(): Observable<any> {
    return this.http.get('http://localhost:8080/api/post/list');
  }

   getPostById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${id}`)
    }


  
 

  /*
  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }*/
}