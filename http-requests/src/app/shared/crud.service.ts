import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  API_URL: string;

  constructor(private http: HttpClient) {
    this.API_URL = '';
  }

  setApiUrl(apiUrl: string) {
    this.API_URL = apiUrl;
  }

  list<T>() {
    return this.http.get<T[]>(this.API_URL).pipe(delay(300));
  }

  getById<T>(id: string) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  edit<T>(id: string | number, record: T) {
    return this.http.put(`${this.API_URL}/${id}`, record).pipe(take(1));
  }

  delete(id: string | number) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }

  save<T>(record: T) {
    return this.http.post(this.API_URL, record).pipe(take(1));
  }
}
