import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VerifyEmailService {
  constructor(private http: HttpClient) {}

  verifyEmail(email: string) {
    return this.http.get('assets/data/verifyEmail.json').pipe(
      delay(500),
      map((data: any) => data.emails),
      map((data: { email: string }[]) =>
        data.some((emailObj) => emailObj.email === email)
      )
    );
  }
}
