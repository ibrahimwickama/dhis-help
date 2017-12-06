import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpProviderService} from "./services/http-provider.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  property:any;
  margin:any;
  navMode:boolean = true;
  listOfApps:any =[];
  listOfAppsBackUp:any =[];
  full:boolean = false;
  show:any;
  showHomeApps: boolean = false;
  showHelp: boolean = true;
  showCoreApps: boolean = false;
  showCustomApps: boolean = false;
  showMaintenanceApps: boolean = false;
  showAbout: boolean = false;


  constructor(private httpProvider:HttpProviderService){

  }
  ngOnInit(){
    this.getAllAppsFromServer();
  }

  fullIt(){
    this.full = true;
    this.show = 'box--show'
}

  getAllAppsFromServer(){
    this.httpProvider.getAllApps().subscribe(listApps=>{
      this.listOfApps = this.listOfAppsBackUp = listApps;
    })
  }

  receiveNavOption(option){
    if(option === 'core-apps'){
      this.showCoreApps = true;
      this.showHomeApps = false;
      this.showAbout = false;
      this.showCustomApps = false;
      this.showMaintenanceApps = false;
      this.showHelp = false;
      console.log('core-apps')

    }else if(option === 'maintenance-apps'){
      this.showMaintenanceApps = true;
      this.showCoreApps = false;
      this.showHomeApps = false;
      this.showAbout = false;
      this.showCustomApps = false;
      this.showHelp = false;
      console.log('maintenance-apps')

    }else if(option === 'custom-apps'){
      this.showCustomApps = true;
      this.showCoreApps = false;
      this.showHomeApps = false;
      this.showAbout = false;
      this.showMaintenanceApps = false;
      this.showHelp = false;
      console.log('custom-apps')

    }else if(option === 'about'){
      this.showAbout = true;
      this.showCoreApps = false;
      this.showHomeApps = false;
      this.showCustomApps = false;
      this.showMaintenanceApps = false;
      this.showHelp = false;
      console.log('about')

    }else if(option === 'dhis-help'){
      this.showHelp = true;
      this.showAbout = false;
      this.showCoreApps = false;
      this.showHomeApps = false;
      this.showCustomApps = false;
      this.showMaintenanceApps = false;
      console.log('about')

    }
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
    // this.full = false;
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


  trial(){
    this.httpProvider.getUserGroups().subscribe(response =>{
      console.log(" my users :"+JSON.stringify(response));
    })
  }






}
