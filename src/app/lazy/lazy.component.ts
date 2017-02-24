import { Component, OnInit } from '@angular/core';
import{ CounterService} from './counter.service'
@Component({

  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor( public counterservice: CounterService) { }
CounterIncrease(){
  this.counterservice.counter +=1;
}
  ngOnInit() {

  }

}
