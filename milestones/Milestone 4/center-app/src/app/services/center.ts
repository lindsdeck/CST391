import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Center } from './center.model';

@Injectable({
  providedIn: 'root'
})
export class CenterService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5000/api/centers';

  getCenters(): Observable<Center[]> {
    return this.http.get<Center[]>(this.apiUrl);
  }

  getCenterById(id: number): Observable<Center[]> {
    return this.http.get<Center[]>(`${this.apiUrl}/${id}`);
  }

  createCenter(center: Center): Observable<any> {
    return this.http.post(this.apiUrl, center);
  }

  updateCenter(id: number, center: Center): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, center);
  }

  deleteCenter(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}