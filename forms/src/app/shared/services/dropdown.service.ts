import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrazilianState } from '../models/brazilian-state';

@Injectable()
export class DropdownService {
  constructor(private http: HttpClient) {}

  getBrazilianStates(): Observable<BrazilianState[]> {
    return this.http.get('assets/data/brazilian-states.json') as Observable<
      BrazilianState[]
    >;
  }
}
