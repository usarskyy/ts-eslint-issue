import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component, Test2Component } from './components';


@NgModule({
  declarations: [
    Test1Component,
    Test2Component,
  ],
  imports: [CommonModule],
})
export class Module1Module { }
