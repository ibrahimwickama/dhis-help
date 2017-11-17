import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MenuModule} from "../app/modules/menu/menu.module";
import { ChartsComponent } from './components/charts/charts.component';
import {HttpProviderService} from "./services/http-provider.service";
import {UtilitiesService} from "./services/utilities.service";

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule, MenuModule
  ],
  providers: [HttpProviderService,UtilitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
