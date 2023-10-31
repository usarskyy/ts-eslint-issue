import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { fn1 } from '../helpers/number.utils';

@Injectable({
  providedIn: 'root',
})
export class Test1Service {

  public test(): string {
    return `${environment.title} ${fn1(5)}`;
  }
}
