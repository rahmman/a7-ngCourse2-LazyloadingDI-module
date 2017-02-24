import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './lazy.routing';
import {LazyComponent} from './lazy.component';
import {CounterService} from './counter.service'
@NgModule({
  imports: [

    routing
  ],
  declarations: [LazyComponent],
  providers: [CounterService]
})
export class LazyModule { }
