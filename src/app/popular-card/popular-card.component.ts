import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular-card',
  templateUrl: './popular-card.component.html'
})
export class PopularCardComponent implements OnInit {
  @Input() teacher: any;
  constructor() { }

  ngOnInit(): void {
  }

}
