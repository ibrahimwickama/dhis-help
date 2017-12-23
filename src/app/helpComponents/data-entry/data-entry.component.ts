import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  @Input() selection;

  constructor() { }

  ngOnInit() {
  }

}
