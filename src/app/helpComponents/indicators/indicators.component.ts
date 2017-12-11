import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent implements OnInit {

  @Input() selection;

  constructor() { }

  ngOnInit() {
  }

}
