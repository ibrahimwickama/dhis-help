import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-starting-dhis',
  templateUrl: './starting-dhis.component.html',
  styleUrls: ['./starting-dhis.component.css']
})
export class StartingDhisComponent implements OnInit {

  @Input() selection;

  constructor() { }

  ngOnInit() {
  }

}
