import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-reports-module',
  templateUrl: './reports-module.component.html',
  styleUrls: ['./reports-module.component.css']
})
export class ReportsModuleComponent implements OnInit {

  @Input() selection;

  constructor() { }

  ngOnInit() {
  }

}
