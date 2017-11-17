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





}
