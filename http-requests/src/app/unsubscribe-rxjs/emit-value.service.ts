import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmitValueService {
  private emissor$ = new Subject<string>();

  emitValue(valor: string) {
    this.emissor$.next(valor);
  }

  getValue() {
    return this.emissor$.asObservable();
  }
}
