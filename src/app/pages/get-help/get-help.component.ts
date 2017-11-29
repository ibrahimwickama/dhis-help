import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DhisHelpService} from "../../services/dhis-help.service";

@Component({
  selector: 'app-get-help',
  templateUrl: './get-help.component.html',
  styleUrls: ['./get-help.component.css']
})
export class GetHelpComponent implements OnInit {

  @Output() newViewfromHomeApps = new EventEmitter();

  property:any;
  margin:any;
  navMode:boolean = true;
  listOfApps:any =[];
  listOfAppsBackUp:any =[];


  constructor(private dhisHelp:DhisHelpService) { }

  ngOnInit() {
    this.getHelpComponents();
  }

  getHelpComponents(){
    this.listOfApps = this.listOfAppsBackUp  = this.dhisHelp.getDhisHelpUnits();
  }


  showSideNav(){
    this.property = '250px';
    this.margin = '250px';
    this.navMode = false;
  }

  hideSideNav(){
    this.property = '0px';
    this.margin = '0px';
    this.navMode = true;
  }


  getFilteredList(ev) {
    let val = ev.target.value;
    this.listOfApps = this.listOfAppsBackUp;
    if(val && val.trim() != ''){
      this.listOfApps = this.listOfApps.filter((file:any) => {
        return (file.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.listOfApps = this.listOfAppsBackUp;
    }
  }

  optionFromSideNav(option){
    this.hideSideNav();
    if(option === 'core-apps'){
      this.newViewfromHomeApps.emit('core-apps') ;
    } else if(option === 'dhis-help'){
      this.newViewfromHomeApps.emit('dhis-help') ;
    } else if(option === 'maintenance-apps'){
      this.newViewfromHomeApps.emit('maintenance-apps') ;
    } else if(option === 'custom-apps'){
      this.newViewfromHomeApps.emit('custom-apps') ;
    } else if(option === 'about'){
      this.newViewfromHomeApps.emit('about') ;
    }
  }

}
