import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Output() newViewfromHomeApps = new EventEmitter();

  property:any;
  margin:any;
  navMode:boolean = true;
  full:boolean = false;
  show:any;


  constructor() { }

  ngOnInit() {
  }

  showSideNav(){
    this.property = '250px';
    this.margin = '250px';
    this.navMode = false;
  }

  fullIt(){
    this.full = true;
    this.show = 'box--show'
  }

  hideSideNav(){
    this.property = '0px';
    this.margin = '0px';
    this.navMode = true;
  }

  optionFromSideNav(option){
    this.hideSideNav();
    if(option === 'core-apps'){
      this.newViewfromHomeApps.emit('core-apps') ;
    }else if(option === 'maintenance-apps'){
      this.newViewfromHomeApps.emit('maintenance-apps') ;
    }else if(option === 'custom-apps'){
      this.newViewfromHomeApps.emit('custom-apps') ;
    }else if(option === 'about'){
      this.newViewfromHomeApps.emit('about') ;
    }
  }

}
