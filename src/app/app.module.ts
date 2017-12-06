import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MenuModule} from "../app/modules/menu/menu.module";
import { ChartsComponent } from './components/charts/charts.component';
import {HttpProviderService} from "./services/http-provider.service";
import {UtilitiesService} from "./services/utilities.service";
import {AppRoutingModule} from "./app.route";
import { IArchiveComponent } from './pages/i-archive/i-archive.component';
import { IDashboardComponent } from './pages/i-dashboard/i-dashboard.component';
import { PivotTableComponent } from './pages/pivot-table/pivot-table.component';
import { UserSupportAppComponent } from './pages/user-support-app/user-support-app.component';
import { DataEntryComponent } from './pages/data-entry/data-entry.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { DataVisualizerComponent } from './pages/data-visualizer/data-visualizer.component';
import { EventCaptureComponent } from './pages/event-capture/event-capture.component';
import { HomeComponent } from './pages/home/home.component';
import { CoreAppsComponent } from './pages/core-apps/core-apps.component';
import {CoreAppsService} from "./services/core-apps.service";
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {DhisHelpService} from "./services/dhis-help.service";
import { GetHelpComponent } from './pages/get-help/get-help.component';
import { OptionViewerComponent } from './components/option-viewer/option-viewer.component';
import { SettingsComponent } from './helpComponents/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    IArchiveComponent,
    IDashboardComponent,
    PivotTableComponent,
    UserSupportAppComponent,
    DataEntryComponent,
    ReportsComponent,
    DataVisualizerComponent,
    EventCaptureComponent,
    HomeComponent,
    CoreAppsComponent,
    SideNavComponent,
    GetHelpComponent,
    OptionViewerComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule, MenuModule
  ],
  providers: [HttpProviderService,UtilitiesService, CoreAppsService, DhisHelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
