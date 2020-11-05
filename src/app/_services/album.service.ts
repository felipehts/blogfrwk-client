import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getAllFiles(): Observable<any> {
    return this.http.get(this.baseUrl + 'albums', { responseType: 'json' });
  }

    getAllFilesByUser(): Observable<any> {
    return this.http.get(this.baseUrl + 'albums/user', { responseType: 'json' });
  }

    deleteFile(name: string): Observable<any> {
    return this.http.delete(this.baseUrl + 'album/' + name, { responseType: 'text' });
  }
}
