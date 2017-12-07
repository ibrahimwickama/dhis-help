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
import { OrgUnitsComponent } from './helpComponents/org-units/org-units.component';
import { DataQualityComponent } from './helpComponents/data-quality/data-quality.component';
import { DataSetsComponent } from './helpComponents/data-sets/data-sets.component';
import { AboutDhisComponent } from './helpComponents/about-dhis/about-dhis.component';
import { StartingDhisComponent } from './helpComponents/starting-dhis/starting-dhis.component';
import { IndicatorsComponent } from './helpComponents/indicators/indicators.component';
import { UserManagementComponent } from './helpComponents/user-management/user-management.component';
import { UsingGisComponent } from './helpComponents/using-gis/using-gis.component';
import { ReportsModuleComponent } from './helpComponents/reports-module/reports-module.component';
import { DataAdministrationComponent } from './helpComponents/data-administration/data-administration.component';
import { DataElementsComponent } from './helpComponents/data-elements/data-elements.component';
import { ImportExportComponent } from './helpComponents/import-export/import-export.component';

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
    SettingsComponent,
    OrgUnitsComponent,
    DataQualityComponent,
    DataSetsComponent,
    AboutDhisComponent,
    StartingDhisComponent,
    IndicatorsComponent,
    UserManagementComponent,
    UsingGisComponent,
    ReportsModuleComponent,
    DataAdministrationComponent,
    DataElementsComponent,
    ImportExportComponent
  ],
  imports: [
    BrowserModule, MenuModule
  ],
  providers: [HttpProviderService,UtilitiesService, CoreAppsService, DhisHelpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
