import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CoreAppsService} from "../../services/core-apps.service";

@Component({
  selector: 'app-core-apps',
  templateUrl: './core-apps.component.html',
  styleUrls: ['./core-apps.component.css']
})
export class CoreAppsComponent implements OnInit {

  @Output() newViewfromHomeApps = new EventEmitter();

  property:any;
  margin:any;
  navMode:boolean = true;

  sheetHeight:any;
  listOfApps:any =[];
  listOfAppsBackUp:any =[];

  constructor(private coreAppsProvider: CoreAppsService) { }

  ngOnInit() {
    this.listOfApps = this.listOfAppsBackUp = this.coreAppsProvider.getCoreApps();
    console.log(this.listOfApps)
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


  showBottomSheet(){
    this.sheetHeight = '94%';
  }


  hideBottomSheet(){
    this.sheetHeight = '0%';
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


  getIcon(launchUrl, iconLink){
    let newIconLink='';
    if(iconLink['48'].substr(0,1) === '/'){
      newIconLink = iconLink['48'].substr(1);
    }else{
      newIconLink = iconLink['48'];
    }
    let fullIconlink = launchUrl.split('index.html')[0]+newIconLink;
    console.log("link "+fullIconlink)
    return fullIconlink ;
  }


}
