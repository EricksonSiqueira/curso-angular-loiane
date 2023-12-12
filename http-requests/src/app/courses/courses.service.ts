import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from './interfaces/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  private readonly API_URL = 'http://localhost:3000/courses';

  list() {
    return this.http.get<ICourse[]>(this.API_URL);
  }

  delete(id: string) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
