import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';


@NgModule({
  declarations: [Child1Component, Child2Component],
  imports: [
    CommonModule,
    Feature1RoutingModule
  ]
})
export class Feature1Module { }
