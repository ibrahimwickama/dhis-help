import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-sets',
  templateUrl: './data-sets.component.html',
  styleUrls: ['./data-sets.component.css']
})
export class DataSetsComponent implements OnInit {

  @Input() selection;

  constructor() { }

  ngOnInit() {
  }

}
