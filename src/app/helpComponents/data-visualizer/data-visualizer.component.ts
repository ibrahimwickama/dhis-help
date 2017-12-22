import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-visualizer',
  templateUrl: './data-visualizer.component.html',
  styleUrls: ['./data-visualizer.component.css']
})

export class DataVisualizerComponent implements OnInit {

  @Input() selection;

  constructor() { }

  ngOnInit() {
  }

}
