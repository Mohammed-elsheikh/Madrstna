import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-rate-chart',
  templateUrl: './rate-chart.component.html'
})
export class RateChartComponent  implements OnInit{
  @Input() subjectRate: any;
  preparedRate:any;
  constructor() { }
  ngOnInit(): void {
    this.preparedRate = this.subjectRate.rate+'%';
  }

}
