import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from './interfaces/course';
import { environment } from 'src/environments/environments';
import { delay, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  private readonly API_URL = `${environment.API}courses`;

  list() {
    return this.http.get<ICourse[]>(this.API_URL).pipe(delay(1000));
  }

  getById(id: string) {
    return this.http.get<ICourse>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  edit(course: ICourse) {
    return this.http.put(`${this.API_URL}/${course.id}`, course);
  }

  delete(id: string) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  save(course: ICourse) {
    return this.http.post(this.API_URL, course).pipe(take(1));
  }
}
