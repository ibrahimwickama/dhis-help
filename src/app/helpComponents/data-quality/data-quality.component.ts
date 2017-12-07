import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-quality',
  templateUrl: './data-quality.component.html',
  styleUrls: ['./data-quality.component.css']
})
export class DataQualityComponent implements OnInit {

  @Input() selection;

  constructor() { }

  ngOnInit() {
  }

}
