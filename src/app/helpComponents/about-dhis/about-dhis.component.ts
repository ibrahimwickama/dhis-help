import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-dhis',
  templateUrl: './about-dhis.component.html',
  styleUrls: ['./about-dhis.component.css']
})
export class AboutDhisComponent implements OnInit {

  @Input() selection;

  constructor() { }

  ngOnInit() {
  }

}
