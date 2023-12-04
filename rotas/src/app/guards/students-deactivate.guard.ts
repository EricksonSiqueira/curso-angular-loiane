import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FormCanDeactivate } from './interfaces/form-candeactivate';

@Injectable()
export class StudentsDeactivateGuard
  implements CanDeactivate<FormCanDeactivate>
{
  canDeactivate(
    component: FormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('deactivate guard called');

    return component.canDeactivate();
  }
}
