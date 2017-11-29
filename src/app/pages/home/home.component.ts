import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpProviderService} from "../../services/http-provider.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @Output() newViewfromHomeApps = new EventEmitter();

  property:any;
  margin:any;
  navMode:boolean = true;
  listOfApps:any =[];
  listOfAppsBackUp:any =[];

  constructor(private httpProvider:HttpProviderService){

  }
  ngOnInit(){
    this.getAllAppsFromServer();
  }

  getAllAppsFromServer(){
    this.httpProvider.getAllApps().subscribe(listApps=>{
      this.listOfApps = this.listOfAppsBackUp = listApps;
    })
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
    }else if(option === 'maintenance-apps'){
      this.newViewfromHomeApps.emit('maintenance-apps') ;
    }else if(option === 'custom-apps'){
      this.newViewfromHomeApps.emit('custom-apps') ;
    }else if(option === 'about'){
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
