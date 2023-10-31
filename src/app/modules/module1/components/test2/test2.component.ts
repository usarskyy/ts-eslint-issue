import { Component } from '@angular/core';
import { Test1Service } from '../../services';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
})
export class Test2Component {
  constructor(s1: Test1Service) {
    s1.test();
  }
}
