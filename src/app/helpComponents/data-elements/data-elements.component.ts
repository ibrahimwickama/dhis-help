import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-elements',
  templateUrl: './data-elements.component.html',
  styleUrls: ['./data-elements.component.css']
})
export class DataElementsComponent implements OnInit {

  @Input() selection;

  constructor() { }

  ngOnInit() {
  }

}
