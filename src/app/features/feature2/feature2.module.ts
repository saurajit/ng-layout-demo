import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';


@NgModule({
  declarations: [Child1Component, Child2Component],
  imports: [
    CommonModule,
    Feature2RoutingModule
  ]
})
export class Feature2Module { }
