import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DropdownService {
  constructor(private http: HttpClient) {}

  getBrazilianStates() {
    return this.http.get('assets/data/brazilian-states.json');
  }
}
