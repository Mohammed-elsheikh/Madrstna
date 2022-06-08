import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  @Input() teacher: any;
  constructor() { }

  ngOnInit(): void {
  }

}
