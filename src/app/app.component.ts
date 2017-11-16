import {AfterViewInit, Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  property:any;
  margin:any;
  navMode:boolean = true;

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





}
