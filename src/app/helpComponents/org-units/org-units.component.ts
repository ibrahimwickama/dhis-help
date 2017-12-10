import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-org-units',
  templateUrl: './org-units.component.html',
  styleUrls: ['./org-units.component.css']
})
export class OrgUnitsComponent implements OnInit {

  @Input() selection;

  constructor() { }

  ngOnInit() {
  }

}
