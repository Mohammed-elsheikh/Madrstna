import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular-cart',
  templateUrl: './popular-cart.component.html'
})
export class PopularCartComponent implements OnInit {
  @Input() teacher: any;
  constructor() { }

  ngOnInit(): void {
  }

}
