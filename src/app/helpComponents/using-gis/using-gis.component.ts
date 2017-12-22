import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-using-gis',
  templateUrl: './using-gis.component.html',
  styleUrls: ['./using-gis.component.css']
})
export class UsingGisComponent implements OnInit {

  @Input() selection;

  constructor() { }

  ngOnInit() {
  }

}
